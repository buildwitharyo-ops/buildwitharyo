"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "What do you actually build?",
    answer:
      "End-to-end web apps (Next.js), mobile apps (React Native / Expo), e-commerce, company websites, internal tools & business operating systems, and AI automation workflows.",
  },
  {
    id: "item-2",
    question: "How fast can you deliver?",
    answer:
      "I run an AI-accelerated development workflow, so most MVPs ship in weeks — not months — with a realistic buffer for testing and revisions. Exact timelines come with the proposal.",
  },
  {
    id: "item-3",
    question: "What's your tech stack?",
    answer:
      "Next.js, Vite, React Native (Expo), TypeScript, Supabase / PostgreSQL, Tailwind CSS, Vercel. AI integrations with Claude and Gemini, plus payment, shipping, and email integrations as needed.",
  },
  {
    id: "item-4",
    question: "How do we work together?",
    answer:
      "Discovery call → fixed proposal (scope, timeline, price) → build with regular check-ins → clean handoff where you own all accounts and infrastructure, with optional post-launch support.",
  },
  {
    id: "item-5",
    question: "Do you work with international clients?",
    answer:
      "Yes — fully remote and async-friendly, based in Jakarta, Indonesia (GMT+7), comfortable collaborating across US and EU time zones. All work and communication in English.",
  },
];

function ContactCard() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 lg:max-w-[300px]">
      <div className="flex size-16 items-center justify-center overflow-hidden rounded-full bg-tangerine">
        <Image
          src="/images/profil-aryo.png"
          alt="Aryo Pradana"
          width={64}
          height={64}
          className="size-16 rounded-full object-cover object-top"
        />
      </div>
      <p className="mt-5 text-[15px] font-medium leading-relaxed text-ink">
        Have more questions? Send me a message.
      </p>
      <a
        href="#contact"
        className="mt-4 flex h-11 w-full items-center justify-center rounded-full bg-grape text-sm font-semibold text-white transition-colors hover:bg-grape/90"
      >
        Get in touch
      </a>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1184px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-neutral-200 bg-neutral-50/60 p-5 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="flex flex-col lg:w-2/5">
              <Image
                src="/images/faq-chat.png"
                alt=""
                width={44}
                height={44}
                className="size-11"
              />
              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-[44px] md:leading-[1.15]">
                Have <br className="hidden lg:block" />
                Questions?
              </h2>
              <div className="mt-auto hidden pt-10 lg:block">
                <ContactCard />
              </div>
            </div>

            <div className="flex-1">
              <Accordion type="single" collapsible defaultValue="item-1">
                {faqItems.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border-neutral-200">
                    {/* hidden! kills the chevrons baked into the shadcn trigger */}
                    <AccordionTrigger className="items-center gap-4 py-5 text-base font-semibold text-ink hover:no-underline data-[state=open]:text-grape **:data-[slot=accordion-trigger-icon]:hidden!">
                      <span>{item.question}</span>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-ink transition-colors group-aria-expanded/accordion-trigger:bg-grape group-aria-expanded/accordion-trigger:text-white">
                        <Plus className="size-4 group-aria-expanded/accordion-trigger:hidden" />
                        <Minus className="hidden size-4 group-aria-expanded/accordion-trigger:block" />
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pr-4 text-[15px] leading-relaxed text-fog lg:pr-14">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="lg:hidden">
              <ContactCard />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
