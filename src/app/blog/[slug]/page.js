import Navbar from "@/components/navbar";
import { posts } from "@/data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const getPostUrl = (post) =>
  post.url ?? (post.id ? String(post.id) : slugify(post.title));

const getPostExcerpt = (post) => {
  if (!post) return "";
  const firstParagraph = post?.content?.find(
    (block) => block.type === "paragraph" && block.text,
  );
  return firstParagraph?.text ?? "";
};

const findPostBySlug = (slug) =>
  posts.find((post) => {
    if (!slug) return false;
    if (post.url === slug) return true;
    const canonicalSlug = getPostUrl(post);
    if (canonicalSlug === slug) return true;
    if (slugify(post.title) === slug) return true;
    if (post.id != null && String(post.id) === slug) return true;
    return false;
  });

// app/blog/[slug]/page.js

const renderContentBlock = (block, index) => {
  if (!block) return null;

  switch (block.type) {
    case "header":
      const Tag = block.level === 3 ? "h3" : "h2";
      const sizeClass = block.level === 3 ? "text-2xl" : "text-3xl";
      return (
        <Tag
          key={index}
          className={`${sizeClass} font-bold text-zinc-900 dark:text-zinc-100 mt-12 mb-4 tracking-tight`}
        >
          {block.text}
        </Tag>
      );

    case "list":
      return (
        <ul key={index} className="my-6 space-y-3 list-none">
          {block.items?.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1.5 flex-shrink-0">•</span>
              <span className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "paragraph":
      return (
        <p
          key={index}
          className="text-lg leading-8 text-zinc-700 dark:text-zinc-300 mb-6"
        >
          {block.text}
        </p>
      );

    case "image":
      return (
        <figure key={index} className="my-12">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src={block.src}
              alt={block.alt || "Article image"}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-400 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: getPostUrl(post) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Blog`,
    description: getPostExcerpt(post),
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params; // <--- Await here
  const post = findPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative">
      <Navbar />

      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
            {post.title}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {getPostExcerpt(post)}
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <article className="prose prose-zinc dark:prose-invert max-w-none">
            {post.content?.map((block, index) =>
              renderContentBlock(block, index),
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
