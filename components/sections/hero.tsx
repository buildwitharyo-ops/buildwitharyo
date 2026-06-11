"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star, BadgeCheck } from "lucide-react";
import { SiNextdotjs, SiReact, SiSupabase, SiTypescript } from "react-icons/si";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const marqueeItems = [
  "Fullstack Developer",
  "AI Automation",
  "Next.js",
  "React Native",
  "Supabase",
  "TypeScript",
  "Workflow Automation",
];

const stack = [
  { label: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { label: "React", icon: SiReact, color: "text-[#61dafb]" },
  { label: "Supabase", icon: SiSupabase, color: "text-[#3fcf8e]" },
  { label: "TypeScript", icon: SiTypescript, color: "text-[#4c9aff]" },
];

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 28" className={className} fill="currentColor" aria-hidden>
      <path d="M11 0c1 7.8 4.2 12.2 10 14-5.8 1.8-9 6.2-10 14-1-7.8-4.2-12.2-10-14C6.8 12.2 10 7.8 11 0Z" />
    </svg>
  );
}

function FloatingCard({
  className,
  delay = 0,
  float = -7,
  children,
}: {
  className?: string;
  delay?: number;
  float?: number;
  children: ReactNode;
}) {
  return (
    <div className={cn("absolute pointer-events-auto", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, float, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.6 }}
          className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  // each half of the marquee holds the list twice so it always outruns the viewport
  const marqueeHalf = [...marqueeItems, ...marqueeItems];

  return (
    <section id="home" className="relative h-[800px] overflow-hidden lg:h-[920px]">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 bottom-[44px] overflow-hidden bg-night lg:bottom-[70px]"
      >
        <div className="absolute left-1/2 bottom-[-160px] h-[760px] w-[980px] -translate-x-1/2 rounded-full bg-grape/40 blur-[200px]" />
        <div className="absolute left-1/2 bottom-[60px] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-grape-light/25 blur-[120px]" />
        <div className="absolute left-1/2 bottom-[-420px] h-[1300px] w-[1300px] -translate-x-1/2 rounded-full border-[90px] border-white/[0.04]" />
        <div className="absolute left-1/2 bottom-[-680px] h-[1900px] w-[1900px] -translate-x-1/2 rounded-full border-[110px] border-white/[0.04]" />
        <div className="absolute left-1/2 top-[52%] h-[520px] w-[1100px] -translate-x-1/2 rounded-full border border-white/10" />
        <div className="absolute -top-32 left-[6%] h-[480px] w-44 -rotate-[35deg] bg-gradient-to-b from-white/[0.05] to-transparent blur-sm" />
        <div className="absolute -top-32 right-[6%] h-[480px] w-44 rotate-[35deg] bg-gradient-to-b from-white/[0.05] to-transparent blur-sm" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(10,2,24,0.55),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,2,24,0.55),transparent_50%)]" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-x-0 top-[112px] z-10 text-center text-[34px] font-extrabold uppercase leading-none tracking-[-0.02em] whitespace-nowrap text-white sm:top-[60px] sm:text-[clamp(44px,10.4vw,150px)] lg:top-[80px]"
      >
        Aryo Pradana
      </motion.h1>

      <div className="absolute inset-x-0 bottom-[56px] z-20 flex justify-center lg:bottom-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="shrink-0"
        >
          <Image
            src="/images/profil-aryo.png"
            alt="Aryo Pradana"
            width={1024}
            height={1536}
            priority
            className="h-auto w-[235px] max-w-none sm:w-[320px] lg:w-[430px]"
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-30">
        <div className="relative mx-auto h-full w-full max-w-[1184px]">
          <FloatingCard
            className="left-[10%] top-[200px] w-[170px] -rotate-6 lg:left-[15%] lg:top-[372px] lg:w-[218px] lg:-rotate-[5deg]"
            delay={0.5}
            float={-7}
          >
            <div className="p-3.5 lg:p-5">
              <p className="text-[22px] font-bold text-white lg:text-[32px]">5+</p>
              <div className="mt-1.5 flex gap-1 lg:gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-tangerine text-tangerine lg:h-[19px] lg:w-[19px]" />
                ))}
              </div>
              <p className="mt-2 text-[11px] leading-snug text-white/70 lg:mt-3 lg:text-[15px] lg:leading-6">
                Years building with technology
              </p>
            </div>
          </FloatingCard>

          <FloatingCard
            className="left-[72%] top-[470px] w-[160px] rotate-[5deg] lg:left-[70.5%] lg:top-[524px] lg:w-[212px] lg:-rotate-[5deg]"
            delay={0.65}
            float={8}
          >
            <div className="p-3.5 lg:p-5">
              <p className="text-[15px] font-bold text-white lg:text-[20px]">Built with</p>
              <div className="mt-2.5 flex gap-1.5 lg:gap-2">
                {stack.map(({ label, icon: Icon, color }) => (
                  <span
                    key={label}
                    title={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 lg:h-[42px] lg:w-[42px]"
                  >
                    <Icon className={cn("size-4 lg:size-5", color)} aria-label={label} />
                  </span>
                ))}
              </div>
            </div>
          </FloatingCard>

          <FloatingCard
            className="left-[-30px] top-[470px] w-[205px] -rotate-[20deg] lg:left-[9%] lg:top-[612px] lg:w-[280px] lg:rotate-[-3deg]"
            delay={0.8}
            float={-6}
          >
            <div className="px-5 py-4 lg:px-6 lg:py-5">
              <p className="text-[15px] font-bold text-white lg:text-[19px]">
                Fullstack Developer
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 fill-grape-light text-white lg:h-5 lg:w-5" />
                <p className="text-[11px] text-white/70 lg:text-sm">AI Automation Engineer</p>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>

      <div className="absolute inset-x-[-40px] bottom-[2px] z-40 -rotate-2 lg:bottom-[5px]">
        <div className="flex h-[72px] items-center overflow-hidden bg-ink lg:h-[140px]">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex w-max items-center gap-8 pr-8 lg:gap-14 lg:pr-14"
          >
            {[...marqueeHalf, ...marqueeHalf].map((item, i) => (
              <div key={i} className="flex items-center gap-8 lg:gap-14">
                <span className="text-2xl font-extrabold tracking-tight whitespace-nowrap text-white lg:text-[44px]">
                  {item}
                </span>
                <Sparkle className="h-7 w-[22px] text-tangerine lg:h-10 lg:w-8" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
