import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  //   const { slug } = await params;
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  // Await the params object
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative">
      <Navbar />

      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap gap-3 text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
            <span>{project.category}</span>
            <span className="text-zinc-500 dark:text-zinc-400">/</span>
            <span>{project.timeline}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
            {project.title}
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-zinc-700 dark:text-zinc-300">
            <span className="px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5">
              Role: {project.role}
            </span>
            {project.tech.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl font-semibold dark:text-white">
                Highlights
              </h2>
              <div className="space-y-4">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 p-6"
                  >
                    <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold dark:text-white">
                  Screenshots
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.imgs.map((img, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 overflow-hidden ${
                        project.isMobile
                          ? "aspect-[9/16]"
                          : "aspect-[16/9] md:col-span-2"
                      }`}
                      aria-label="Screenshot placeholder"
                    >
                      <Image
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        className={`w-full h-full object-cover ${
                          project.isMobile ? "object-top" : "object-center"
                        }`}
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 p-6 space-y-4">
                <h3 className="text-lg font-semibold dark:text-white">
                  Project Details
                </h3>
                <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <div className="flex justify-between gap-3">
                    <span>Timeline</span>
                    <span className="font-medium text-zinc-900 dark:text-white">
                      {project.timeline}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>Role</span>
                    <span className="font-medium text-zinc-900 dark:text-white">
                      {project.role}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>Category</span>
                    <span className="font-medium text-zinc-900 dark:text-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent p-6 space-y-4">
                <h3 className="text-lg font-semibold dark:text-white">
                  Outcome
                </h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed">
                  Each build sharpened processes around design tokens, motion
                  standards, and handoff. If you want the full write-up or
                  prototype demo, reach out and I will send the case study.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
