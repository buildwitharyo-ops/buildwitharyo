"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Founder",
    role: "Specialty Coffee Brand",
    quote:
      "Aryo took us from idea to a fully working online store — payments, shipping, admin dashboard — on a timeline nobody else would commit to. He explains every technical decision in plain language and builds exactly what the business needs.",
  },
  {
    name: "Operations Lead",
    role: "Corporate AV Client",
    quote:
      "What sets Aryo apart is that he understands operations, not just code. He mapped our workflow first, then built the system around it — the automation genuinely cut our manual work.",
  },
  {
    name: "Business Owner",
    role: "SME Client",
    quote:
      "We assumed AI automation was only for big companies. Aryo made it practical for ours — clear scope, fast delivery, and real support after launch.",
  },
];

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
        <RevealHeading
          text="Success Stories from Clients"
          className="text-center text-3xl md:text-[40px] font-extrabold tracking-tight text-ink"
        />

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
                <span className="flex size-12 items-center justify-center rounded-full bg-lilac text-lg font-extrabold text-grape">
                  {item.name.charAt(0)}
                </span>
              </div>

              <blockquote className="mt-6 text-sm leading-relaxed text-ink/80">
                {item.quote}
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
