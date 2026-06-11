"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Robert Lewandowski",
    role: "Head of Engineering, Upwork",
    logo: { src: "/images/logos/logo-upwork.png", alt: "Upwork", width: 88, height: 26 },
  },
  {
    name: "Dani Olmo",
    role: "Product Manager, Zapier",
    logo: { src: "/images/logos/logo-zapier.png", alt: "Zapier", width: 68, height: 28 },
  },
  {
    name: "Jude Belingham",
    role: "Vice President, Zoom",
    logo: { src: "/images/logos/logo-zoom.png", alt: "Zoom", width: 108, height: 24 },
  },
];

const quote =
  "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We've seen a significant increase in user engagement!";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  function handleScroll() {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const progress = el.scrollLeft / maxScroll;
    setActiveDot(
      Math.min(testimonials.length - 1, Math.round(progress * (testimonials.length - 1)))
    );
  }

  return (
    <section id="testimonial" className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1184px] px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-3xl md:text-[40px] font-extrabold tracking-tight text-ink"
        >
          Success Stories from Clients
        </motion.h2>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-12 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
        >
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="min-w-full snap-center rounded-2xl border border-neutral-100 bg-white p-8 text-center shadow-[0_12px_32px_-16px_rgba(10,13,18,0.1)] md:min-w-0"
            >
              <div className="flex justify-center">
                <Image
                  src={item.logo.src}
                  alt={item.logo.alt}
                  width={item.logo.width}
                  height={item.logo.height}
                  className="object-contain"
                  style={{ height: item.logo.height, width: "auto" }}
                />
              </div>

              <blockquote className="mt-6 text-sm leading-relaxed text-ink/80">
                {quote}
              </blockquote>

              <div className="mt-6 flex justify-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, star) => (
                  <Star
                    key={star}
                    className="h-[18px] w-[18px] fill-tangerine text-tangerine"
                  />
                ))}
              </div>

              <figcaption className="mt-6">
                <p className="text-[15px] font-bold text-ink">{item.name}</p>
                <p className="mt-1 text-[13px] text-fog">{item.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-1.5" aria-hidden>
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeDot ? "w-5 bg-grape" : "w-1.5 bg-neutral-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
