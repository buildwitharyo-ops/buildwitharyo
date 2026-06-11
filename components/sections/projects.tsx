"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  { image: "/images/project-1.jpg" },
  { image: "/images/project-2.jpg" },
  { image: "/images/project-3.jpg" },
  { image: "/images/project-4.jpg" },
  { image: "/images/project-5.jpg" },
  { image: "/images/project-6.jpg" },
].map((project, i) => ({
  ...project,
  category: "Dashboard",
  year: "2024",
  title: "Dashboard SaaS Task Management",
  alt: `Dashboard SaaS Task Management project ${i + 1}`,
}));

export function Projects() {
  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1184px] px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-3xl md:text-[40px] font-extrabold tracking-tight text-ink"
        >
          My Latest Work
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-3 md:gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.image}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.12 }}
              className="group"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-dashed border-neutral-300 px-3 py-1 text-xs text-ink">
                  {project.category}
                </span>
                <span className="rounded-full border border-dashed border-neutral-300 px-3 py-1 text-xs text-ink">
                  {project.year}
                </span>
              </div>

              <div className="mt-4 aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={760}
                  height={570}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-lg font-bold text-ink">{project.title}</h3>

              <a
                href="#"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-grape"
              >
                Visit Website
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
