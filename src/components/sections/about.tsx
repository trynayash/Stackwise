"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, HeartHandshake, Code2, Clock, Users } from "lucide-react";

const values = [
    {
        icon: Zap,
        title: "Performance-First",
        description: "Sub-second load times. Lighthouse scores that Google rewards. Every line of code is optimized.",
        num: "01",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level security baked in. Your data and your customers' data stays protected at every layer.",
        num: "02",
    },
    {
        icon: HeartHandshake,
        title: "True Partnership",
        description: "We don't disappear after launch. Your success is our reputation — we're invested in your long-term growth.",
        num: "03",
    },
];

const metrics = [
    { icon: Code2, value: "50+", label: "Projects Shipped" },
    { icon: Users, value: "40+", label: "Happy Clients" },
    { icon: Clock, value: "3+", label: "Years of Excellence" },
];

export function About() {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="why-stackwise" className="py-20 md:py-32 relative z-10" aria-label="Why StackWise">
            <div className="container mx-auto px-6">

                {/* Header — BeFluence dramatic style */}
                <div className="mb-14 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <span className="text-[#C8FF00] text-[11px] font-mono tracking-[0.2em] uppercase mb-4 block">Why Us</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                            Why Teams<br />
                            Choose <span className="text-[#C8FF00]">StackWise.</span>
                        </h2>
                    </div>
                    <p className="text-white/30 text-sm max-w-sm mt-6 md:mt-0 leading-relaxed">
                        Engineers and designers at the intersection of beautiful interfaces and bulletproof architecture.
                    </p>
                </div>

                {/* Value Cards — minimal, clean */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden mb-24">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            className="group bg-[#0d0d0d] p-10 hover:bg-[#111] transition-colors duration-500 relative"
                        >
                            <span className="text-white/8 text-6xl font-bold absolute top-6 right-8 select-none">{value.num}</span>
                            <div className="w-12 h-12 rounded-full bg-[#C8FF00]/8 flex items-center justify-center mb-8 group-hover:bg-[#C8FF00]/15 transition-colors duration-500">
                                <value.icon className="text-[#C8FF00]/60 group-hover:text-[#C8FF00] transition-colors duration-500" size={22} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                            <p className="text-white/35 text-sm leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Metrics — Large, prominent */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {metrics.map((metric, i) => (
                        <div key={metric.label} className="px-12 py-8 md:py-4 text-center">
                            <motion.p
                                className="text-4xl md:text-5xl font-bold text-white"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                            >
                                {metric.value}
                            </motion.p>
                            <p className="text-white/25 text-xs font-mono tracking-wider mt-2">{metric.label}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
