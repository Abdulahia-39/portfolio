import Navbar from "@/components/navbar";
import Link from "next/link";
import { posts } from "@/data/blog";

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const getPostUrl = (post) =>
  post.url ?? post.slug ?? (post.id ? String(post.id) : slugify(post.title));

const getPostSummary = (post) => {
  if (post.summary) return post.summary;
  const firstParagraph = post.content?.find(
    (block) => block.type === "paragraph" && block.text,
  );
  return firstParagraph?.text ?? "";
};

export default function BlogPage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <p className="text-blue-600 font-mono text-sm uppercase tracking-[0.2em]">
            Blog
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter dark:text-white">
            Notes on building and shipping.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Writing about front-end craft, product thinking, and the lessons
            learned while shipping real projects.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto grid gap-6">
          {posts.map((post) => {
            const slug = getPostUrl(post);
            const summary = getPostSummary(post);
            return (
              <Link key={post.id} href={`/blog/${slug}`} className="block">
                <article className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                  <h2 className="text-2xl font-bold tracking-tight dark:text-white mb-2">
                    {post.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400">{summary}</p>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
