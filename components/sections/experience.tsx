"use client";

import Image from "next/image";
import { motion } from "motion/react";

const description =
  "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.";

const jobs = [
  { company: "Trustpilot", logo: "/images/logos/logo-trustpilot.png", logoWidth: 132 },
  { company: "Postman", logo: "/images/logos/logo-postman.png", logoWidth: 111 },
  { company: "Spotify", logo: "/images/logos/logo-spotify.png", logoWidth: 121 },
].map((job) => ({ ...job, role: "Frontend Developer", years: "2021-2024" }));

export function Experience() {
  return (
    <section id="experience" className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1184px] px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-3xl md:text-[40px] font-extrabold tracking-tight text-ink"
        >
          My Work Experience
        </motion.h2>

        <ul className="mt-12 space-y-10 md:mt-16 md:space-y-14">
          {jobs.map((job, i) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="grid grid-cols-[24px_minmax(0,1fr)] gap-x-4 md:grid-cols-[232px_40px_minmax(0,1fr)] md:gap-x-0"
            >
              <div className="col-start-2 md:col-start-1 md:row-start-1">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={job.logoWidth}
                  height={36}
                  className="h-8 w-auto md:h-9"
                />
                <p className="mt-2 text-base font-bold text-ink md:mt-7">{job.company}</p>
                <p className="mt-1.5 text-sm text-fog md:mt-2">{job.years}</p>
              </div>

              <div className="relative col-start-1 row-start-1 row-span-2 flex justify-center md:col-start-2 md:row-span-1">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-fog/80 md:mt-0 md:h-10 md:w-10">
                  <span className="h-3.5 w-3.5 rounded-full bg-grape-light md:h-6 md:w-6" />
                </span>
                {/* dashed connector runs through the row gap to the next dot */}
                {i < jobs.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-8 -bottom-10 border-l border-dashed border-fog/80 md:top-11 md:-bottom-14"
                  />
                )}
              </div>

              <div className="col-start-2 mt-5 md:col-start-3 md:row-start-1 md:mt-0 md:pl-4">
                <h3 className="text-lg font-bold text-ink md:leading-10">{job.role}</h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-fog md:mt-4 md:text-[15px] md:leading-[30px]">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
