"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading, SubHeading } from "@/components/ui/typography";
import { Globe, ShoppingCart, TrendingUp, Cpu, ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Web Applications",
        description: "Scalable, high-performance web apps built with Next.js and React. We engineer digital products that drive real business growth.",
        icon: Globe,
        stat: "25+ Apps Shipped",
        num: "01",
    },
    {
        title: "E-commerce",
        description: "Conversion-focused online stores. We blend aesthetic perfection with technical robustness to maximize your revenue.",
        icon: ShoppingCart,
        stat: "₹10Cr+ Revenue",
        num: "02",
    },
    {
        title: "SEO & Growth",
        description: "Data-driven strategies to outrank competitors. We don't just build — we ensure you dominate search results.",
        icon: TrendingUp,
        stat: "300k+ Monthly Traffic",
        num: "03",
    },
    {
        title: "Custom Software",
        description: "Bespoke internal tools, SaaS platforms, and AI integrations. If you can imagine it, we can engineer it.",
        icon: Cpu,
        stat: "15+ Custom Solutions",
        num: "04",
    },
];

export function Services() {
    const scrollToPortfolio = (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="services" className="py-20 md:py-32 relative z-10" aria-label="Our services">
            <div className="container mx-auto px-6">

                {/* Section Header — BeFluence style with section number */}
                <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <span className="text-[#C8FF00] text-[11px] font-mono tracking-[0.2em] uppercase mb-4 block">What We Do</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                            Services Built<br />
                            <span className="text-white/25">For Growth.</span>
                        </h2>
                    </div>
                    <p className="text-white/30 text-sm max-w-sm mt-6 md:mt-0 leading-relaxed">
                        We solve complex business challenges with cutting-edge engineering and premium design.
                    </p>
                </div>

                {/* Service Rows — BeFluence style horizontal list */}
                <div className="border-t border-white/5">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group border-b border-white/5 py-10 md:py-12 cursor-pointer hover:bg-white/[0.01] transition-colors duration-500"
                            onClick={scrollToPortfolio}
                        >
                            <div className="flex items-start md:items-center justify-between gap-6 flex-col md:flex-row">
                                {/* Left: Number + Title */}
                                <div className="flex items-center gap-8">
                                    <span className="text-white/10 text-sm font-mono w-8 flex-shrink-0">{service.num}</span>
                                    <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#C8FF00]/10 group-hover:border-[#C8FF00]/20 transition-all duration-500 flex-shrink-0">
                                        <service.icon className="text-white/30 group-hover:text-[#C8FF00] transition-colors duration-500" size={20} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#C8FF00] transition-colors duration-300">{service.title}</h3>
                                </div>

                                {/* Right: Stat + Arrow */}
                                <div className="flex items-center gap-8 md:gap-12 pl-16 md:pl-0">
                                    <p className="text-white/20 text-sm max-w-xs hidden lg:block">{service.description}</p>
                                    <span className="text-[#C8FF00]/40 text-xs font-mono whitespace-nowrap">{service.stat}</span>
                                    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-[#C8FF00]/30 group-hover:bg-[#C8FF00]/5 transition-all duration-500 flex-shrink-0">
                                        <ArrowUpRight size={16} className="text-white/20 group-hover:text-[#C8FF00] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
