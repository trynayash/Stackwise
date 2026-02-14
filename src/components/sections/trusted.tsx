"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
    { src: "/logos/nextjs.svg", name: "Next.js" },
    { src: "/logos/react.svg", name: "React" },
    { src: "/logos/tailwindcss.svg", name: "TailwindCSS" },
    { src: "/logos/typescript.svg", name: "TypeScript" },
    { src: "/logos/nodejs.svg", name: "Node.js" },
    { src: "/logos/mongodb.svg", name: "MongoDB" },
    { src: "/logos/postgresql.svg", name: "PostgreSQL" },
    { src: "/logos/aws.svg", name: "AWS" },
    { src: "/logos/figma.svg", name: "Figma" },
    { src: "/logos/stripe.svg", name: "Stripe" },
];

export function Trusted() {
    return (
        <section className="py-16 relative z-10 border-y border-white/5" aria-label="Our Technology Stack">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <span className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase whitespace-nowrap flex-shrink-0">
                        Our Stack
                    </span>

                    {/* Seamless Marquee */}
                    <div className="relative w-full overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

                        <motion.div
                            className="flex items-center gap-14 whitespace-nowrap"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                        >
                            {[...logos, ...logos].map((logo, i) => (
                                <img
                                    key={`${logo.name}-${i}`}
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-7 md:h-8 w-auto opacity-25 hover:opacity-60 grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0"
                                    loading="lazy"
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
