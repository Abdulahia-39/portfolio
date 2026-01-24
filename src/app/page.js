import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProjectGrid from "@/components/projects";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Experience />
      <Contact />
    </main>
  );
}
