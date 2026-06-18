"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { gsap } from "@/lib/gsap";

const jobs = [
  {
    company: "buildwitharyo",
    logo: "/images/logo-mark.png",
    logoClass: "h-9 w-9 rounded-lg bg-night p-1.5",
    role: "Fullstack Developer & AI Automation · Founder",
    years: "2024 — Present",
    description:
      "Design and ship production web & mobile products and AI automation for businesses — from e-commerce with payment and shipping integration to internal business operating systems. Full lifecycle ownership: discovery, architecture, build (Next.js, React Native, Supabase), deployment, and post-launch iteration.",
  },
  {
    company: "ACTA",
    logo: "/images/logos/acta.png",
    logoClass: "h-12 w-auto",
    role: "Founder & AV Systems Integrator",
    years: "2021 — Present",
    description:
      "Lead AV technology integrations that make company operations more efficient and reduce long-term cost. Translate business requirements into system architecture and manage delivery end to end — the operator's perspective that now shapes how I build software.",
  },
  {
    company: "ARKA Production",
    logo: "/images/logos/arka.png",
    logoClass: "h-12 w-auto",
    role: "Sound Engineer",
    years: "2018 — 2023",
    description:
      "5+ years engineering live audio for events and productions — environments where complex systems must work the first time, in real time. Built the signal-flow thinking, fast troubleshooting, and calm-under-pressure execution I bring to every codebase.",
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  // the dashed line draws itself and the dots pop as you scroll the timeline
  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-connector]").forEach((line) => {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              transformOrigin: "top",
              ease: "none",
              scrollTrigger: { trigger: line, start: "top 80%", end: "bottom 60%", scrub: true },
            }
          );
        });
        gsap.utils.toArray<HTMLElement>("[data-dot]").forEach((dot) => {
          gsap.from(dot, {
            scale: 0,
            ease: "back.out(2)",
            duration: 0.5,
            scrollTrigger: { trigger: dot, start: "top 85%" },
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="experience" className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1184px] px-6 md:px-8">
        <RevealHeading
          text="My Work Experience"
          className="text-center text-3xl md:text-[40px] font-extrabold tracking-tight text-ink"
        />

        <ul className="mt-12 space-y-10 md:mt-16 md:space-y-14">
          {jobs.map((job, i) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="grid grid-cols-[24px_minmax(0,1fr)] gap-x-4 md:grid-cols-[232px_40px_minmax(0,1fr)] md:gap-x-0"
            >
              <div className="col-start-2 md:col-start-1 md:row-start-1">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={160}
                    height={145}
                    className={job.logoClass}
                  />
                  {job.company === "buildwitharyo" && (
                    <span className="text-[17px] font-bold tracking-tight text-ink">
                      buildwitharyo
                    </span>
                  )}
                </div>
                <p className="mt-2 text-base font-bold text-ink md:mt-6">{job.company}</p>
                <p className="mt-1.5 text-sm text-fog md:mt-2">{job.years}</p>
              </div>

              <div className="relative col-start-1 row-start-1 row-span-2 flex justify-center md:col-start-2 md:row-span-1">
                <span
                  data-dot
                  className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-fog/80 md:mt-0 md:h-10 md:w-10"
                >
                  <span className="h-3.5 w-3.5 rounded-full bg-grape-light md:h-6 md:w-6" />
                </span>
                {/* dashed connector runs through the row gap to the next dot */}
                {i < jobs.length - 1 && (
                  <span
                    data-connector
                    aria-hidden
                    className="absolute left-1/2 top-8 -bottom-10 border-l border-dashed border-fog/80 md:top-11 md:-bottom-14"
                  />
                )}
              </div>

              <div className="col-start-2 mt-5 md:col-start-3 md:row-start-1 md:mt-0 md:pl-4">
                <h3 className="text-lg font-bold text-ink md:leading-10">{job.role}</h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-fog md:mt-4 md:text-[15px] md:leading-[30px]">
                  {job.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
