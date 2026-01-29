import Navbar from "@/components/navbar";

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
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Project type
                </label>
                <select
                  name="projectType"
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Web app</option>
                  <option>Mobile app</option>
                  <option>Design system</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about the problem you're solving..."
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-semibold hover:scale-[1.01] active:scale-[0.99] transition-transform"
              >
                Send message
              </button>
            </form>
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
                  hello@example.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 mb-1">
                  Location
                </p>
                <p className="text-lg font-semibold dark:text-white">
                  Remote / London
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
                    { label: "LinkedIn", href: "#" },
                    { label: "GitHub", href: "#" },
                    { label: "Twitter", href: "#" },
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
