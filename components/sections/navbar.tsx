"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const hireMe = useMagnetic<HTMLSpanElement>(0.35);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-night/80 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-night"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1184px] items-center justify-between px-6 transition-all duration-300 md:px-8",
          scrolled ? "h-[60px] lg:h-[68px]" : "h-[72px] lg:h-[88px]"
        )}
      >
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-mark.png"
            alt="buildwitharyo logo"
            width={34}
            height={34}
            className="h-[30px] w-[30px] lg:h-[34px] lg:w-[34px]"
          />
          <span className="text-[22px] font-bold tracking-tight text-white">buildwitharyo</span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span ref={hireMe} className="hidden lg:inline-block">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold text-ink"
          >
            <Mail className="size-[18px]" strokeWidth={2.25} />
            Hire Me
          </motion.a>
        </span>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center text-white lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-night lg:hidden"
          >
            <nav className="flex flex-col gap-1 border-t border-white/10 px-6 pb-6 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-[15px] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[15px] font-semibold text-ink"
              >
                <Mail className="size-[18px]" strokeWidth={2.25} />
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
