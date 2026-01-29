import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-blue-600 font-mono text-sm uppercase tracking-[0.2em]">
            About
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter dark:text-white">
            Building thoughtful products with intent.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            I am a fullstack developer focused on performant interfaces and
            reliable backends. I love collaborating with teams that care about
            design systems, accessibility, and measurable impact.
          </p>
        </div>
      </section>

      <Experience />

      <Contact />
    </main>
  );
}
