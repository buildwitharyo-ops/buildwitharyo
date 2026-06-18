"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// Lenis only runs on the desktop where the parallax pays off, and never when the
// user asked for less motion. Mobile + reduced-motion keep native scroll. Done
// imperatively so the render tree never changes (no remount, no hydration flash).
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!desktop || reduced) return;

    const lenis = new Lenis({ autoRaf: false });

    // drive Lenis off GSAP's clock so scroll and ScrollTrigger stay in sync
    function raf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("load", refresh);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
