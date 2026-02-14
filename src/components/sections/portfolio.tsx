"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading, SubHeading } from "@/components/ui/typography";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web Apps", "E-Commerce", "Mobile", "Design & SEO"];

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="portfolio" className="py-20 md:py-24 relative z-10" aria-label="Our portfolio">
            <div className="container mx-auto px-6">
                <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[#C8FF00] text-[11px] font-mono tracking-[0.2em] uppercase mb-4 block">Portfolio</span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                            Selected<br /><span className="text-white/25">Work.</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-[#C8FF00] text-black shadow-[0_0_20px_-5px_rgba(200,255,0,0.4)]"
                                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                                    }`}
                                aria-pressed={activeCategory === cat}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div className="mb-8 flex items-center gap-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8FF00]/5 border border-[#C8FF00]/10 text-[#C8FF00]/60 text-xs font-mono">
                        <span className="text-[#C8FF00]">✦</span> SAMPLE CONCEPTS — Real case studies available upon request
                    </span>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div layout key={project.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                                <Card variant="glass" className="group h-full flex flex-col overflow-hidden cursor-pointer hover:border-[#C8FF00]/20">
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                                        <img src={project.image} alt={`${project.title} project`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                            <div className="w-10 h-10 rounded-full bg-[#C8FF00]/20 backdrop-blur-md flex items-center justify-center text-[#C8FF00] border border-[#C8FF00]/30">
                                                <ArrowUpRight size={20} />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="inline-block py-1 px-2.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs font-medium text-white/80">{project.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/20">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C8FF00] transition-colors">{project.title}</h3>
                                        <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-2">{project.summary}</p>
                                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-mono">
                                            <span>{project.tech.slice(0, 2).join(" • ")}</span>
                                            <div className="flex gap-3">
                                                {project.metrics.map(m => (
                                                    <span key={m.label} className="text-[#C8FF00]/70">{m.value} <span className="text-white/30">{m.label}</span></span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-16 text-center">
                    <Button variant="secondary" onClick={scrollToContact}>Request Case Studies</Button>
                </div>
            </div>
        </section>
    );
}
