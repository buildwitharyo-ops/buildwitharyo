"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

type Project = {
  title: string;
  tags: string[];
  description: string;
  url: string;
  domain?: string;
  image: string;
  status: "live" | "coming_soon";
};

const projects: Project[] = [
  {
    title: "Rituals Coffee",
    tags: ["E-Commerce"],
    description:
      "Premium e-commerce for a specialty coffee brand — full checkout with payment & shipping integration, plus a complete admin dashboard. Next.js + Supabase.",
    url: "https://yourituals.com",
    image: "/images/projects/rituals.png",
    status: "live",
  },
  {
    title: "ACTA Instalasi Audiovisual",
    tags: ["Company Profile"],
    description:
      "Company website for an AV systems integrator — services, solutions, and project showcase built to generate inbound leads.",
    url: "https://actainstalasiaudiovisual.com",
    image: "/images/projects/acta.png",
    status: "live",
  },
  {
    title: "Avion Display",
    tags: ["Product Website"],
    description:
      "Product website for AVION interactive smartboards — AI-powered 4K displays for classrooms and meeting rooms, presented through a clean, spec-rich showcase.",
    url: "https://aviondisplay.com",
    image: "/images/projects/avion.png",
    status: "live",
  },
  {
    title: "ACTA OS",
    tags: ["Business OS", "AI"],
    description:
      "Internal business operating system — workflow automation, integrated company systems, and AI assistance woven into daily operations.",
    url: "https://acta-os.vercel.app",
    image: "/images/projects/acta-os-dashboard.png",
    status: "live",
  },
  {
    title: "SpeakUp Mandarin",
    tags: ["EdTech"],
    description:
      "A conversation-first way for Indonesians to learn Mandarin — speak from day one instead of memorizing word lists. Platform launching soon.",
    url: "",
    domain: "speakupmandarin.id",
    image: "/images/projects/speakup.png",
    status: "coming_soon",
  },
  {
    title: "KosManager",
    tags: ["PropTech"],
    description:
      "Property management platform for Indonesian boarding-house (kos) operators — payments, tenants, and operations in one place.",
    url: "",
    domain: "kosmanager.id",
    image: "/images/projects/kosmanager.png",
    status: "coming_soon",
  },
];

// Gradient wordmark shown until a real screenshot lands in /public/images/projects
function Thumbnail({ project }: { project: Project }) {
  const [missing, setMissing] = useState(false);

  return (
    <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-grape via-grape-light to-night">
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <span className="text-center text-2xl font-extrabold tracking-tight text-white/90">
          {project.title}
        </span>
      </div>
      {!missing && (
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={760}
          height={570}
          onError={() => setMissing(true)}
          className="relative h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      )}
    </div>
  );
}

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
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (i % 3) * 0.12 }}
              className="group flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-dashed border-neutral-300 px-3 py-1 text-xs text-ink">
                  {project.tags[0]}
                </span>
                {project.tags[1] ? (
                  <span className="rounded-full border border-dashed border-neutral-300 px-3 py-1 text-xs text-ink">
                    {project.tags[1]}
                  </span>
                ) : (
                  <span className="rounded-full border border-dashed border-neutral-300 px-3 py-1 text-xs text-ink">
                    {project.status === "live" ? "Live" : "In Progress"}
                  </span>
                )}
              </div>

              <Thumbnail project={project} />

              <h3 className="mt-4 text-lg font-bold text-ink">{project.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-fog">{project.description}</p>

              {project.status === "live" ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-grape"
                >
                  Visit Website
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              ) : (
                <p className="mt-3 inline-flex items-center gap-2.5">
                  <span className="rounded-full border border-dashed border-neutral-300 px-3 py-1 text-xs font-semibold text-ink">
                    Coming Soon
                  </span>
                  <span className="text-sm text-fog">{project.domain}</span>
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
