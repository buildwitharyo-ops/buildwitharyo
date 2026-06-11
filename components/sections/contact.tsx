"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Smartphone, Mail, MapPin, Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const contactItems = [
  { icon: Smartphone, label: "+62 878-3201-9418", href: "https://wa.me/6287832019418" },
  { icon: Mail, label: "buildwitharyo@gmail.com", href: "mailto:buildwitharyo@gmail.com" },
  { icon: MapPin, label: "Bali, Indonesia" },
];

const dialogViews = {
  success: {
    image: "/images/mail-success.png",
    title: "Message Sent Successfully!",
    body: "Thank you for reaching out. I'll get back to you as soon as possible",
    action: "Back to Home",
  },
  failed: {
    image: "/images/mail-failed.png",
    title: "Failed to send.",
    body: "Please check your internet connection or try refreshing the page.",
    action: "Try Again",
  },
} as const;

const fieldClasses =
  "rounded-xl border-neutral-200 bg-white px-4 text-base text-ink shadow-none placeholder:text-neutral-400 focus-visible:border-grape focus-visible:ring-grape/20";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<"success" | "failed">("success");

  const view = dialogViews[result];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ok = [name, email, message].every((v) => v.trim().length > 0);
    setResult(ok ? "success" : "failed");
    setOpen(true);
    if (ok) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  function handleDialogAction() {
    setOpen(false);
    if (result === "success") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 md:py-[120px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] md:h-[340px] [mask-image:linear-gradient(to_top,black_25%,transparent)]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #ececec 0 1px, transparent 1px 56px), repeating-linear-gradient(to bottom, #ececec 0 1px, transparent 1px 56px)",
            transform: "perspective(600px) rotateX(58deg) scale(2.6)",
            transformOrigin: "bottom center",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1184px] items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-[40px] leading-[1.15] md:text-[56px] font-extrabold tracking-tight text-ink">
            Got a project <br className="hidden lg:block" />
            in mind?
          </h2>
          <p className="mt-6 text-base font-semibold text-ink">
            Fill in the form or reach me directly — I reply fast.
          </p>

          <ul className="mt-10 flex flex-col gap-6">
            {contactItems.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lilac">
                  <Icon className="h-5 w-5 text-grape" />
                </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-base text-ink transition-colors hover:text-grape"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-base text-ink">{label}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="w-full rounded-2xl border border-neutral-100 bg-white p-6 shadow-xl shadow-neutral-200/60 md:p-8 lg:max-w-[505px] lg:justify-self-end"
        >
          <h3 className="text-2xl font-extrabold tracking-tight text-ink">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="contact-name" className="text-sm font-semibold text-ink">
                Name
              </Label>
              <Input
                id="contact-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className={`h-12 ${fieldClasses}`}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email" className="text-sm font-semibold text-ink">
                Email
              </Label>
              <Input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`h-12 ${fieldClasses}`}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message" className="text-sm font-semibold text-ink">
                Message
              </Label>
              <Textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message"
                className={`min-h-[160px] resize-none py-3 ${fieldClasses}`}
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-grape text-sm font-semibold text-white transition-colors hover:bg-grape-light"
            >
              <Send className="h-4 w-4" />
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-[calc(100%-2rem)] gap-0 rounded-2xl border-none bg-white p-8 ring-0 shadow-2xl sm:max-w-[480px]"
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src={view.image}
              alt=""
              width={230}
              height={179}
              className="h-auto w-[230px]"
            />
            <DialogTitle className="mt-6 text-xl font-bold leading-snug text-ink">
              {view.title}
            </DialogTitle>
            <DialogDescription className="mt-2 max-w-[340px] text-sm leading-6 text-fog">
              {view.body}
            </DialogDescription>
            <button
              type="button"
              onClick={handleDialogAction}
              className="mt-6 h-11 w-full max-w-[306px] rounded-full bg-grape text-sm font-semibold text-white transition-colors hover:bg-grape-light"
            >
              {view.action}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
