"use client";

import { Fragment, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  start?: string;
};

// Splits a plain-string heading into word masks that rise into place as the
// heading scrolls in. Reduced-motion users just get the words at rest.
export function RevealHeading({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  start = "top 85%",
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const targets = ref.current!.querySelectorAll("[data-word]");
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(targets, {
          yPercent: 120,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.07,
          delay,
          scrollTrigger: { trigger: ref.current, start },
        });
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.12em] align-bottom -mb-[0.12em]">
            <span data-word className="inline-block will-change-transform">
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
