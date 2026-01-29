"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { projects } from "@/data/projects";

const MotionLink = motion(Link);

export default function ProjectGrid() {
  return (
    // We remove the solid bg-white to let your global blurs show through
    <section className="relative py-24 px-6 overflow-hidden">
      {/* 1. Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 [background-image:radial-gradient(#888_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter dark:text-white"
        >
          Selected Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <MotionLink
      href={`/work/${project.slug}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -8 }}
      className={`relative group overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/10 p-10 min-h-[320px] cursor-pointer flex flex-col justify-between transition-all duration-500 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md ${project.size}`}
    >
      {/* 2. Interactive Inner Glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${project.color} to-transparent`}
      />

      <div className="relative z-10">
        <p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
          {project.category}
        </p>
        <h3 className="text-3xl font-bold tracking-tight dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-12">
        <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 dark:text-white">
          Explore Project <span className="text-xl">→</span>
        </div>

        {/* 3. Floating Icon/Shape Placeholder */}
        <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-500">
          +
        </div>
      </div>

      {/* 4. Animated Background Orbit */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/30 transition-colors"
      />
    </MotionLink>
  );
}
