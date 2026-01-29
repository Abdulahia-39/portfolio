"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-600 font-mono text-sm uppercase tracking-[0.2em] mb-6"
        >
          Need a developer?
        </motion.p>

        {/* The "Big" Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter dark:text-white mb-12"
        >
          Let's build something <br />
          <span className="text-zinc-400 dark:text-zinc-600 italic">
            remarkable
          </span>{" "}
          together.
        </motion.h2>

        {/* Magnetic-style Button Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/contact" className="inline-block relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
            <span className="relative inline-flex items-center justify-center px-12 py-6 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full text-xl font-bold transition-transform duration-300 group-hover:scale-105 active:scale-95">
              Get in Touch
            </span>
          </Link>
        </motion.div>

        {/* Minimal Social Links */}
        <div className="mt-24 flex justify-center gap-8 text-zinc-500 font-medium mx-10">
          {["LinkedIn", "GitHub", "Twitter", "Instagram"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
