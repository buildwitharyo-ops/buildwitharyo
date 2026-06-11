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

const question = "What's your approach to front-end development?";
const answer =
  "I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.";

const faqItems = ["item-1", "item-2", "item-3", "item-4", "item-5"];

function ContactCard() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 lg:max-w-[300px]">
      <div className="flex size-16 items-center justify-center overflow-hidden rounded-full bg-tangerine">
        <Image
          src="/images/edwin.png"
          alt="Edwin Anderson"
          width={64}
          height={64}
          className="size-16 rounded-full object-cover"
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
                {faqItems.map((id) => (
                  <AccordionItem key={id} value={id} className="border-neutral-200">
                    {/* hidden! kills the chevrons baked into the shadcn trigger */}
                    <AccordionTrigger className="items-center gap-4 py-5 text-base font-semibold text-ink hover:no-underline data-[state=open]:text-grape **:data-[slot=accordion-trigger-icon]:hidden!">
                      <span>{question}</span>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-ink transition-colors group-aria-expanded/accordion-trigger:bg-grape group-aria-expanded/accordion-trigger:text-white">
                        <Plus className="size-4 group-aria-expanded/accordion-trigger:hidden" />
                        <Minus className="hidden size-4 group-aria-expanded/accordion-trigger:block" />
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pr-4 text-[15px] leading-relaxed text-fog lg:pr-14">
                      {answer}
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
