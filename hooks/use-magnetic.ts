"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

// Pulls an element toward the cursor while hovered. Desktop + motion only;
// returns a ref to drop on a wrapper around the button.
export function useMagnetic<T extends HTMLElement>(strength = 0.4) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.matchMedia().add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

          function move(e: MouseEvent) {
            const r = el!.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * strength);
            yTo((e.clientY - (r.top + r.height / 2)) * strength);
          }
          function reset() {
            xTo(0);
            yTo(0);
          }

          el.addEventListener("mousemove", move);
          el.addEventListener("mouseleave", reset);
          return () => {
            el.removeEventListener("mousemove", move);
            el.removeEventListener("mouseleave", reset);
          };
        }
      );
    },
    { scope: ref }
  );

  return ref;
}
