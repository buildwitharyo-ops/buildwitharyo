"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1184px] px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-semibold text-ink"
        >
          Hi, I&rsquo;m Edwin Anderson 👋
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-4 text-xl font-bold leading-snug tracking-tight text-ink md:text-[28px] md:leading-[1.5]"
        >
          Building digital products with a focus on crafting visually engaging
          and seamless user interfaces using{" "}
          <span className="text-grape">React.js.</span>{" "}
          <span className="text-fog">
            Prioritizing responsive design, performance optimization, and
            user-centric features to deliver exceptional web experiences.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
