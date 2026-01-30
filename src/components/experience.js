"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "Frontend tools",
    items: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    name: "Backend tools",
    items: ["Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    name: "Mobile development tools",
    items: ["React Native", "Expo", "Nativewind", "Firebase"],
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        {/* LEFT SIDE: Sticky Header */}
        <div className="md:w-1/3">
          <div className="sticky top-32">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-mono text-sm uppercase tracking-widest"
            >
              Expertise
            </motion.span>
            <h2 className="text-5xl font-bold mt-4 tracking-tighter dark:text-white">
              The education, tools & <br /> experience.
            </h2>
            <p className="mt-6 text-zinc-500 dark:text-zinc-400 leading-relaxed">
              I specialize in building modular, scalable, and highly secure web
              and mobile applications that focus on user experience.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Scrolling Content */}
        <div className="md:w-2/3 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="p-10 rounded-[2.25rem] border border-blue-500/30 bg-gradient-to-br from-blue-50/80 via-white/80 to-white/60 dark:from-blue-500/10 dark:via-zinc-900/70 dark:to-zinc-900/40 shadow-[0_20px_60px_-30px_rgba(59,130,246,0.6)]"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-blue-700 bg-blue-100/80 dark:text-blue-300 dark:bg-blue-500/10">
                Education
              </span>
              <span className="text-sm font-mono text-blue-600">
                2022 — 2026
              </span>
            </div>
            <h3 className="text-2xl font-bold dark:text-white">
              Amoud University
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              B.Sc. in Software engineering
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20 bg-white/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                Data Structures
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20 bg-white/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                Algorithms
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20 bg-white/80 dark:bg-zinc-900/60 dark:text-zinc-300">
                Project management
              </span>
            </div>
          </motion.div>

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm group hover:border-blue-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 dark:text-white flex items-center gap-3">
                <span className="w-8 h-[1px] bg-blue-600"></span>
                {skill.name}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-5 py-2 rounded-full text-sm font-medium border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-800 dark:text-zinc-300 shadow-sm group-hover:shadow-blue-500/10 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Experience Timeline Item */}
          <div className="pt-12 border-t border-black/5 dark:border-white/10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold dark:text-white">
                  Fullstack Intern
                </h4>
                <p className="text-zinc-500">Loola ai</p>
              </div>
              <span className="text-sm font-mono text-blue-600">
                2025 — Present
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 italic">
              "Building the future of Education"
            </p>
          </div>

          <div className="pt-12 border-t border-black/5 dark:border-white/10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold dark:text-white">
                  Web Developer Intern
                </h4>
                <p className="text-zinc-500">Shaba</p>
              </div>
              <span className="text-sm font-mono text-blue-600">
                2025 — 2025
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 italic">
              "Providing water services to Borama's community"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
