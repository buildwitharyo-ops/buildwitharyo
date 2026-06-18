"use client";

import { motion } from "motion/react";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { Check, X } from "lucide-react";

const skills = [
  "AI-accelerated delivery — days, not months",
  "True fullstack ownership: frontend, backend, database, deploy",
  "Business-operator mindset (5+ years running real operations)",
  "AI & automation designed in from day one",
  "Clean handoff — you own your infrastructure & accounts",
  "Direct line to the builder — no agency layers",
  "Performance, responsive & SEO fundamentals by default",
];

function Mark({ pass }: { pass: boolean }) {
  return (
    <motion.span
      initial={{ scale: 0, rotate: -25 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ type: "spring", stiffness: 320, damping: 15, delay: 0.05 }}
      className={`flex h-6 w-6 items-center justify-center rounded-full md:h-7 md:w-7 ${
        pass ? "bg-tangerine" : "bg-fog"
      }`}
    >
      {pass ? (
        <Check className="h-3.5 w-3.5 text-white md:h-4 md:w-4" strokeWidth={3} />
      ) : (
        <X className="h-3.5 w-3.5 text-white md:h-4 md:w-4" strokeWidth={3} />
      )}
    </motion.span>
  );
}

export function Comparison() {
  return (
    <section className="bg-[#fafafa] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1184px] px-6 md:px-8">
        <RevealHeading
          text="Why Choose Me"
          className="text-center text-3xl md:text-[40px] font-extrabold tracking-tight text-ink"
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 rounded-2xl border border-neutral-100 bg-white p-3 md:mt-14 md:p-6"
        >
          {/* Skill column is wider on mobile, equal thirds on desktop */}
          <div className="grid h-[54px] grid-cols-[2.8fr_1fr_1fr] items-center rounded-full bg-grape-light text-[13px] font-semibold text-white md:grid-cols-3 md:text-[15px]">
            <span className="text-center">Skill</span>
            <span className="text-center">Me</span>
            <span className="text-center">Other</span>
          </div>

          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="grid min-h-[72px] grid-cols-[2.8fr_1fr_1fr] items-center border-b border-neutral-200 py-2 last:border-b-0 md:grid-cols-3"
            >
              <span className="pl-4 text-left text-[13px] font-medium text-ink md:pl-[100px] md:text-[15px]">
                {skill}
              </span>
              <span className="flex justify-center">
                <Mark pass />
              </span>
              <span className="flex justify-center">
                <Mark pass={false} />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
