"use client";

import Image from "next/image";
import { motion } from "motion/react";

// lucide-react v1 dropped its brand icons, so these are the original lucide paths inlined.
function BrandIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[18px]"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <BrandIcon>
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </BrandIcon>
  );
}

function InstagramIcon() {
  return (
    <BrandIcon>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </BrandIcon>
  );
}

function LinkedinIcon() {
  return (
    <BrandIcon>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </BrandIcon>
  );
}

const socials = [
  { label: "Dribbble", href: "#", icon: DribbbleIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="bg-night py-9">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex w-full max-w-[1184px] flex-col items-start gap-5 px-6 md:flex-row md:items-center md:justify-between md:px-8"
      >
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
          <a href="#home" className="flex items-center gap-2.5">
            <Image
              src="/images/logo-mark.png"
              alt="Edwin Anderson logo"
              width={30}
              height={30}
              className="h-[30px] w-[30px]"
            />
            <span className="text-lg font-bold tracking-tight text-white">Your Logo</span>
          </a>
          <p className="text-sm text-white/80">
            &copy; 2025 Edwin Anderson. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3.5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex size-11 items-center justify-center rounded-full bg-grape text-white transition-colors hover:bg-grape-light"
            >
              <Icon />
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
