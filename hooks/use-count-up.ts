"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

// Counts a number up from 0 when it scrolls into view, keeping any suffix (+, %).
export function useCountUp<T extends HTMLElement>(end: number, suffix = "") {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const counter = { val: 0 };
        el.textContent = "0" + suffix;
        gsap.to(counter, {
          val: end,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.round(counter.val) + suffix;
          },
        });
      });
    },
    { scope: ref, dependencies: [end, suffix] }
  );

  return ref;
}
