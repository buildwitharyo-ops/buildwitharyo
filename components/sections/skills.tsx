"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML", icon: "/images/tech/html.png" },
  { name: "CSS", icon: "/images/tech/css.png" },
  { name: "Javascript", icon: "/images/tech/js.png" },
  { name: "React JS", icon: "/images/tech/react.png" },
  { name: "Mongo DB", icon: "/images/tech/mongodb.png" },
  { name: "Docker", icon: "/images/tech/docker.png" },
].map((skill) => ({
  ...skill,
  description:
    "Building the structure of web pages with semantic markup for accessibility.",
  level: 90,
}));

const DOTS = 3;

export function Skills() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  function handleScroll() {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const progress = el.scrollLeft / maxScroll;
    setActiveDot(Math.min(DOTS - 1, Math.round(progress * (DOTS - 1))));
  }

  return (
    <section id="skill" className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1184px] px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-3xl md:text-[40px] font-extrabold tracking-tight text-ink"
        >
          My Profesional Skill
        </motion.h2>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-14 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0"
        >
          {skills.map((skill, i) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 2) * 0.1 }}
              className="min-w-[85%] snap-center rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(10,13,18,0.12)] md:min-w-0"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <h3 className="text-lg font-bold text-ink">{skill.name}</h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-fog">{skill.description}</p>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-neutral-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    className="h-full rounded-full bg-grape"
                  />
                </div>
                <span className="text-sm font-bold text-ink">{skill.level}%</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2 md:hidden" aria-hidden>
          {Array.from({ length: DOTS }, (_, i) => (
            <span
              key={i}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === activeDot ? "w-8 bg-grape" : "w-4 bg-neutral-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
