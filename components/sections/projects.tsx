"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useSpring, type MotionValue } from "motion/react";
import { useGSAP } from "@gsap/react";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { gsap } from "@/lib/gsap";

type Project = {
  title: string;
  tags: string[];
  description: string;
  url: string;
  domain?: string;
  image: string;
  preview?: string;
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
    preview: "/images/projects/previews/rituals.jpg",
    status: "live",
  },
  {
    title: "ACTA Instalasi Audiovisual",
    tags: ["Company Profile"],
    description:
      "Company website for an AV systems integrator — services, solutions, and project showcase built to generate inbound leads.",
    url: "https://actainstalasiaudiovisual.com",
    image: "/images/projects/acta.png",
    preview: "/images/projects/previews/acta.jpg",
    status: "live",
  },
  {
    title: "Avion Display",
    tags: ["Product Website"],
    description:
      "Product website for AVION interactive smartboards — AI-powered 4K displays for classrooms and meeting rooms, presented through a clean, spec-rich showcase.",
    url: "https://aviondisplay.com",
    image: "/images/projects/avion.png",
    preview: "/images/projects/previews/avion.jpg",
    status: "live",
  },
  {
    title: "ACTA OS",
    tags: ["Business OS", "AI"],
    description:
      "Internal business operating system — workflow automation, integrated company systems, and AI assistance woven into daily operations.",
    url: "https://acta-os.vercel.app",
    image: "/images/projects/acta-os-dashboard.png",
    preview: "/images/projects/acta-os-dashboard.png",
    status: "live",
  },
  {
    title: "SpeakUp Mandarin",
    tags: ["EdTech", "AI"],
    description:
      "Conversation-first Mandarin app for Indonesians — speak from day one with an AI Laoshi that listens and corrects your tones in real time, on an HSK 3.0 path from zero to confident. Streaks and daily speaking minutes keep the habit going.",
    url: "https://speakupmandarin.com",
    image: "/images/projects/speakup.png",
    preview: "/images/projects/previews/speakup.jpg",
    status: "live",
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
        <div
          data-parallax
          className="absolute inset-x-0 top-[-7.5%] bottom-[-7.5%] will-change-transform"
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={760}
            height={570}
            onError={() => setMissing(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
}

function hostFromUrl(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

// a little browser window that trails the cursor and slowly scrolls the page
function HoverPreview({
  project,
  x,
  y,
}: {
  project: Project | null;
  x: MotionValue<number>;
  y: MotionValue<number>;
}) {
  const [imgH, setImgH] = useState(0);

  return (
    <AnimatePresence>
      {project?.preview && (
        <motion.div
          key="preview"
          style={{ x, y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
        >
          <div className="absolute left-1/2 -top-[300px] -translate-x-1/2">
            <motion.div
              key={project.title}
              initial={{ scale: 0.9, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="w-[360px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl shadow-black/30"
            >
              <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-neutral-50 px-3 py-2">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 truncate text-[11px] text-fog">{hostFromUrl(project.url)}</span>
              </div>
              <div className="relative h-[230px] w-full overflow-hidden bg-white">
                <motion.img
                  src={project.preview}
                  alt=""
                  onLoad={(e) => setImgH(e.currentTarget.clientHeight)}
                  className="absolute left-0 top-0 w-full will-change-transform"
                  animate={imgH > 230 ? { y: [0, -(imgH - 230)] } : { y: 0 }}
                  transition={{
                    duration: Math.max(5, (imgH - 230) / 60),
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const [active, setActive] = useState<Project | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 28, mass: 0.5 });
  const y = useSpring(my, { stiffness: 300, damping: 28, mass: 0.5 });

  function showPreview(project: Project, e: React.MouseEvent) {
    if (!project.preview) return;
    // skip on touch / reduced-motion; the overlay is desktop-only anyway
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    x.jump(e.clientX);
    y.jump(e.clientY);
    mx.set(e.clientX);
    my.set(e.clientY);
    setActive(project);
  }

  // each thumbnail drifts slower than its card for a sense of depth
  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="projects" className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1184px] px-6 md:px-8">
        <RevealHeading
          text="My Latest Work"
          className="text-center text-3xl md:text-[40px] font-extrabold tracking-tight text-ink"
        />

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-3 md:gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: (i % 3) * 0.12,
              }}
              onMouseEnter={(e) => showPreview(project, e)}
              onMouseMove={(e) => {
                mx.set(e.clientX);
                my.set(e.clientY);
              }}
              onMouseLeave={() => setActive(null)}
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

              <h3 className="mt-4 text-lg font-bold text-ink">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-fog">
                {project.description}
              </p>

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

      <HoverPreview project={active} x={x} y={y} />
    </section>
  );
}
