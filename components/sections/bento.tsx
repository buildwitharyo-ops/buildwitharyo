"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronsRight, Mail, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const chipRows = [
  { chips: ["React Expert", "Fullstack Developer", "Resposive Design"], duration: 26, reverse: false },
  { chips: ["5 Years Experience", "React Expert", "Fullstack Developer"], duration: 30, reverse: true },
  { chips: ["Clean Code", "Performance Optimation", "Resposive Design"], duration: 28, reverse: false },
];

const techIcons = ["css", "js", "html", "express", "cube", "typescript", "react", "docker", "postgresql", "mongodb"];

const stats = [
  { value: "50+", label: "Global Client’s Handle" },
  { value: "99%", label: "Client Satisfaction Rate" },
  { value: "100+", label: "Project Delivered" },
];

function BentoCard({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={cn("rounded-3xl", className)}
    >
      {children}
    </motion.div>
  );
}

function ChipMarquee({ chips, duration, reverse }: { chips: string[]; duration: number; reverse: boolean }) {
  // list rendered twice so a -50% translate loops seamlessly
  const loop = [...chips, ...chips];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((chip, i) => (
          <span
            key={`${chip}-${i}`}
            className="mr-3 whitespace-nowrap rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink"
          >
            {chip}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Bento() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[1184px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          <BentoCard className="flex flex-col overflow-hidden bg-gradient-to-b from-[#E48B2C] to-[#E17B0E] p-8 md:h-[384px]">
            <h3 className="text-[28px] font-extrabold tracking-tight text-white">Why Choose Me</h3>
            <p className="mt-3 max-w-[300px] text-sm leading-7 text-white/90">
              Delivering excellence with innovative solutions and seamless execution.
            </p>
            <div className="-mx-8 mt-10 space-y-4 md:mt-auto">
              {chipRows.map((row) => (
                <ChipMarquee key={row.chips[0]} chips={row.chips} duration={row.duration} reverse={row.reverse} />
              ))}
            </div>
          </BentoCard>

          <BentoCard delay={0.08} className="flex flex-col bg-charcoal p-8 md:h-[384px]">
            <h3 className="text-[28px] font-extrabold tracking-tight text-white">Expert Skill</h3>
            <div className="mt-4 flex gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-6 fill-tangerine text-tangerine" />
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-white/60">
              Mastering modern technologies to deliver impactful and efficient solutions
            </p>
            <div className="mt-8 grid grid-cols-5 gap-x-3 gap-y-6 md:mt-auto">
              {techIcons.map((name) => (
                <div
                  key={name}
                  className="flex aspect-square items-center justify-center rounded-full border border-white/10 bg-white/5"
                >
                  <Image
                    src={`/images/tech/${name}.png`}
                    alt={name}
                    width={30}
                    height={30}
                    className="size-[30px] object-contain"
                  />
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard delay={0.16} className="relative h-[360px] overflow-hidden md:h-[384px]">
            <Image
              src="/images/edwin-working.jpg"
              alt="Edwin working at his desk"
              width={640}
              height={640}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10" />
            <div className="absolute inset-0 flex items-center justify-center pb-20">
              <h3 className="text-center text-[28px] font-extrabold leading-snug tracking-tight text-white">
                5+ Years
                <br />
                Experience
              </h3>
            </div>
            <div className="absolute inset-x-0 bottom-4 flex justify-center">
              <Image
                src="/images/work-showcase.jpg"
                alt="Recent work showcase"
                width={1260}
                height={464}
                className="w-[86%] rounded-xl border border-white/30"
              />
            </div>
          </BentoCard>

          <BentoCard className="relative h-[400px] overflow-hidden bg-grape md:h-[384px]">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1.5px)] [background-size:12px_12px]"
            />
            <p className="absolute inset-x-0 top-[10%] text-center font-extrabold uppercase leading-[0.95] text-tangerine">
              <span className="block text-[64px] tracking-[0.08em] md:text-[82px]">Edwin</span>
              <span className="block text-[50px] tracking-tight md:text-[68px]">Anderson</span>
            </p>
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <Image src="/images/edwin.png" alt="Edwin Anderson" width={640} height={640} className="w-[92%] max-w-[360px]" />
            </div>
            <div className="absolute inset-x-0 bottom-6 flex justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-[64%] items-center justify-center gap-2 rounded-full bg-white py-3 text-[15px] font-semibold text-ink shadow-lg"
              >
                <Mail className="size-[18px]" strokeWidth={2.25} />
                Hire Me
              </motion.a>
            </div>
          </BentoCard>

          <BentoCard
            delay={0.1}
            className="relative overflow-hidden bg-sea bg-[linear-gradient(115deg,#002C6E_0%,#03357F_45%,#0E4DA8_100%)] md:col-span-2 md:h-[384px]"
          >
            <div className="absolute inset-y-0 right-0 w-[82%] [mask-image:linear-gradient(to_right,transparent,black_28%)] md:w-[68%]">
              <Image
                src="/images/world-map.png"
                alt=""
                width={735}
                height={306}
                className="absolute right-0 top-1/2 w-full -translate-y-1/2"
              />
            </div>
            <div className="absolute bottom-[120px] right-5 md:bottom-[86px] md:right-9">
              <Image src="/images/flag-id.png" alt="Indonesian flag" width={70} height={54} className="w-[68px] drop-shadow-md" />
            </div>
            <span aria-hidden className="absolute left-[45%] top-8 size-1 rounded-full bg-white/70" />
            <span aria-hidden className="absolute bottom-10 right-12 size-1 rounded-full bg-white/60" />
            <div className="relative flex min-h-[440px] flex-col p-8 md:min-h-0 md:h-full">
              <h3 className="text-[28px] font-extrabold leading-snug tracking-tight text-white">
                Building Digital
                <br />
                Products <ChevronsRight className="ml-1 inline size-7 align-[-4px]" strokeWidth={2.5} />
              </h3>
              <div className="mt-10 flex flex-col gap-7 md:mt-auto md:flex-row md:items-end md:gap-12">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[32px] font-extrabold leading-tight text-white">{stat.value}</p>
                    <p className="mt-1 text-[13px] text-white/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
