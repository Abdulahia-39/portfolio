import Navbar from "@/components/navbar";
import ContactForm from "./contact-form";

export const metadata = {
  title: "Contact — Portfolio",
  description: "Get in touch for projects, collaborations, or questions.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="pt-28 pb-12 px-6 bg-linear-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <p className="text-blue-600 font-mono text-sm uppercase tracking-[0.2em]">
            Contact
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter dark:text-white">
            Let's talk about your project.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Share a few details and I'll reply within one business day.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-8 space-y-6">
            <h2 className="text-2xl font-semibold dark:text-white">
              Send a message
            </h2>
            <ContactForm />
          </div>

          <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-8 space-y-6">
            <h2 className="text-2xl font-semibold dark:text-white">
              Contact details
            </h2>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="text-lg font-semibold dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                >
                  abdilahi1055@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 mb-1">
                  Location
                </p>
                <p className="text-lg font-semibold dark:text-white">
                  Remote / Hargeisa, Somaliland
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 mb-1">
                  Phone
                </p>
                <p className="text-lg font-semibold dark:text-white">
                  +252 63 3981055 / +252 65 3981055
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 mb-1">
                  Availability
                </p>
                <p className="text-lg font-semibold dark:text-white">
                  Accepting new projects for Q2 2026
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 mb-1">
                  Social
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/abdilahi-a-1303a224b/",
                    },
                    {
                      label: "GitHub",
                      href: "https://github.com/Abdulahia-39",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
