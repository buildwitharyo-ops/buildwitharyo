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
          Hi, I&rsquo;m Aryo Pradana 👋
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-4 text-xl font-bold leading-snug tracking-tight text-ink md:text-[28px] md:leading-[1.5]"
        >
          I build production web apps, mobile apps, and{" "}
          <span className="text-grape">AI automation workflows</span> — end to
          end.{" "}
          <span className="text-fog">
            Before software, I spent 5+ years engineering live sound and
            integrating AV systems for companies, so I approach every build
            like an operator: understand the business problem first, then ship
            the technology that solves it. Today I help businesses launch fast
            with modern stacks — Next.js, React Native, Supabase — with AI
            built into both the product and the process.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
