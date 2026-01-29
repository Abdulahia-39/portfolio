import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import ProjectGrid from "@/components/projects";

export default function WorkPage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-blue-600 font-mono text-sm uppercase tracking-[0.2em]">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter dark:text-white">
            Work that blends craft and impact.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            A focused collection of shipped interfaces, prototypes, and
            experiments built with modern web tooling.
          </p>
        </div>
      </section>

      <ProjectGrid />

      <Contact />
    </main>
  );
}
