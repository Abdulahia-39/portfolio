import Navbar from "@/components/navbar";
import { posts } from "@/data/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
    const { slug } = params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Blog`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="relative">
      <Navbar />

      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
            {post.date}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
            {post.title}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {post.summary}
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <article className="prose prose-zinc dark:prose-invert max-w-none">
            <p>{post.content}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
