"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-night transition-shadow">
      <div className="mx-auto flex h-[72px] w-full max-w-[1184px] items-center justify-between px-6 md:px-8 lg:h-[88px]">
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

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold text-ink lg:inline-flex"
        >
          <Mail className="size-[18px]" strokeWidth={2.25} />
          Hire Me
        </motion.a>

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
