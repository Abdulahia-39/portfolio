"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter } from "lucide-react";
import Image from "next/image";
import profile from "@/assets/profile_card.jpg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-32 pb-16 md:pt-24">
      {/* Background Blurs - Responsive width/height */}
      <div className="absolute top-[-5%] left-[-5%] w-[60%] md:w-[40%] h-[40%] rounded-full bg-orange-400/30 blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[60%] md:w-[40%] h-[40%] rounded-full bg-purple-500/30 blur-[80px] md:blur-[120px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container px-4 sm:px-6 mx-auto text-center z-10 flex flex-col items-center"
      >
        {/* PROFILE PICTURE */}
        <motion.div variants={itemVariants} className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-purple-500 blur-lg opacity-40 animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-white dark:border-zinc-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
            <Image
              src={profile}
              alt="Profile"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* NAME & PROFESSION BLOCK */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-4 px-2"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold dark:text-white tracking-tight break-words max-w-[90vw]">
            Abdilahi Abdirahman Abdisalam
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="hidden sm:block h-[1px] w-4 bg-blue-600"></span>
            <p className="text-[10px] sm:text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-[0.2em]">
              Fullstack Developer
            </p>
            <span className="hidden sm:block h-[1px] w-4 bg-blue-600"></span>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.span
          variants={itemVariants}
          className="px-3 py-1 md:px-4 md:py-1.5 mb-6 md:mb-8 inline-block rounded-full border border-black/10 dark:border-white/10 text-[10px] md:text-xs font-medium tracking-widest uppercase bg-gray-50/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 backdrop-blur-sm"
        >
          Available for new opportunities — 2026
        </motion.span>

        {/* MAIN HEADLINE - Using responsive text sizes */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 mb-6 leading-[1.1] md:leading-[0.9]"
        >
          Crafting <span className="text-blue-600">Digital</span>{" "}
          <br className="hidden sm:block" />
          Experiences with Intent.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          variants={itemVariants}
          className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-zinc-500 dark:text-zinc-400 mb-8 md:mb-10 leading-relaxed"
        >
          I specialize in building high-performance full stack applications with
          AI integration that deliver seamless user experiences.
        </motion.p>

        {/* BUTTONS/SOCIALS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-xl active:scale-95">
            View My Work <ArrowRight size={18} />
          </button>

          <div className="flex items-center gap-3">
            <button className="p-4 rounded-xl border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors">
              <Github size={20} />
            </button>
            <button className="p-4 rounded-xl border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors">
              <Twitter size={20} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
