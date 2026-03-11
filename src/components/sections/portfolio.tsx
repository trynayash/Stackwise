"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import { ArrowUpRight, ChevronDown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web Apps", "E-Commerce", "Mobile", "Design & SEO"] as const;
const INITIAL_SHOW = 9;

const stats = [
    { value: "50+", label: "Projects Shipped" },
    { value: "40+", label: "Happy Clients" },
    { value: "₹10Cr+", label: "Revenue Generated" },
    { value: "99.9%", label: "Client Satisfaction" },
];

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [showAll, setShowAll] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    const filteredProjects = useMemo(
        () => activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory),
        [activeCategory]
    );

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_SHOW);
    const hasMore = filteredProjects.length > INITIAL_SHOW;

    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { All: projects.length };
        projects.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
        return counts;
    }, []);

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setShowAll(false);
    };

    return (
        <section id="portfolio" className="py-20 md:py-32 relative z-10" aria-label="Our portfolio" ref={sectionRef}>
            <div className="container mx-auto px-6">

                {/* ═══════════════════════════════════════
                    SECTION HEADER — Dramatic & Bold
                ═══════════════════════════════════════ */}
                <motion.div
                    className="mb-8 md:mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                        <div className="max-w-3xl">
                            <span className="text-[#C8FF00] text-[11px] font-mono tracking-[0.2em] uppercase mb-4 block">
                                <Sparkles size={12} className="inline mr-1.5 -mt-0.5" />
                                Portfolio
                            </span>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.03em] text-white leading-[1.05]">
                                Results That<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8FF00] to-[#9EFF00]">Speak.</span>
                            </h2>
                        </div>
                        <p className="text-white/25 text-sm max-w-sm leading-relaxed font-light">
                            Every project is a case study in driving real business outcomes. Not templates — engineered solutions.
                        </p>
                    </div>
                </motion.div>

                {/* ═══════════════════════════════════════
                    STATS BAR — Social Proof Numbers
                ═══════════════════════════════════════ */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="bg-[#0a0a0a] px-6 py-6 md:py-8 text-center group hover:bg-[#0f0f0f] transition-colors duration-500">
                            <motion.p
                                className="text-2xl md:text-3xl font-bold text-white mb-1"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.08, type: "spring" }}
                            >
                                {stat.value}
                            </motion.p>
                            <p className="text-white/20 text-[10px] md:text-xs font-mono tracking-wider uppercase">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* ═══════════════════════════════════════
                    CATEGORY FILTERS — Pills with counts
                ═══════════════════════════════════════ */}
                <motion.div
                    className="mb-10 flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`group relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === cat
                                ? "bg-[#C8FF00] text-black shadow-[0_0_25px_-5px_rgba(200,255,0,0.5)]"
                                : "bg-white/[0.04] text-white/50 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                                }`}
                            aria-pressed={activeCategory === cat}
                        >
                            {cat}
                            <span className={`text-[10px] font-mono ${activeCategory === cat ? "text-black/50" : "text-white/20"}`}>
                                {categoryCounts[cat] || 0}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* ═══════════════════════════════════════
                    SAMPLE CONCEPTS NOTE
                ═══════════════════════════════════════ */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8FF00]/[0.04] border border-[#C8FF00]/10 text-[#C8FF00]/50 text-[11px] font-mono">
                        <Zap size={11} className="text-[#C8FF00]/60" />
                        SAMPLE CONCEPTS — Real case studies & live demos available upon request
                    </span>
                </motion.div>

                {/* ═══════════════════════════════════════
                    PROJECT GRID — Mixed layout with featured
                ═══════════════════════════════════════ */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, index) => {
                            const cardContent = (
                                <div className="portfolio-card group h-full flex flex-col overflow-hidden rounded-2xl bg-[#111111]/60 backdrop-blur-sm border border-white/[0.06] cursor-pointer transition-all duration-500 hover:border-[#C8FF00]/25 hover:shadow-[0_0_40px_-10px_rgba(200,255,0,0.12)]">
                                    {/* Image */}
                                    <div className="relative h-56 md:h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={project.image}
                                            alt={`${project.title} — ${project.summary}`}
                                            className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        {/* Arrow Badge */}
                                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="w-10 h-10 rounded-full bg-[#C8FF00]/15 backdrop-blur-md flex items-center justify-center text-[#C8FF00] border border-[#C8FF00]/30 shadow-[0_0_15px_-3px_rgba(200,255,0,0.3)]">
                                                <ArrowUpRight size={18} className="transform group-hover:rotate-45 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        {/* Category Badge */}
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="inline-block py-1 px-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-white/70 uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>
                                        {/* Featured Badge */}
                                        {project.featured && (
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="inline-flex items-center gap-1 py-1 px-2.5 rounded-full bg-[#C8FF00]/10 backdrop-blur-sm border border-[#C8FF00]/20 text-[10px] font-mono text-[#C8FF00]/80 uppercase tracking-wider">
                                                    <Sparkles size={9} /> Featured
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#C8FF00] transition-colors duration-300 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/35 text-sm leading-relaxed mb-5 line-clamp-2">
                                            {project.summary}
                                        </p>

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {project.tech.slice(0, 4).map(t => (
                                                <span key={t} className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-white/30 transition-colors group-hover:text-white/50 group-hover:border-white/10">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Metrics — Bottom */}
                                        <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                {project.metrics.map(m => (
                                                    <div key={m.label} className="flex items-baseline gap-1.5">
                                                        <span className="text-[#C8FF00] text-sm font-bold">{m.value}</span>
                                                        <span className="text-white/20 text-[10px] font-mono uppercase">{m.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {project.caseStudy && (
                                                <span className="text-[#C8FF00]/0 group-hover:text-[#C8FF00]/60 text-[10px] font-mono tracking-wider transition-all duration-300 whitespace-nowrap">
                                                    View Case Study →
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );

                            return (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className={project.featured && activeCategory === "All" ? "md:col-span-2" : ""}
                            >
                                {project.caseStudy ? (
                                    <Link href={`/work/${project.id}`} className="block h-full">
                                        {cardContent}
                                    </Link>
                                ) : cardContent}
                            </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* ═══════════════════════════════════════
                    SHOW MORE / SHOW LESS
                ═══════════════════════════════════════ */}
                {hasMore && !showAll && (
                    <motion.div
                        className="mt-10 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={() => setShowAll(true)}
                            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/60 text-sm font-medium hover:bg-white/[0.08] hover:text-white hover:border-[#C8FF00]/20 transition-all duration-300"
                        >
                            Show All {filteredProjects.length} Projects
                            <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                        </button>
                    </motion.div>
                )}

                {showAll && hasMore && (
                    <motion.div
                        className="mt-10 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <button
                            onClick={() => setShowAll(false)}
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 text-sm font-medium hover:text-white/60 transition-all duration-300"
                        >
                            Show Less
                            <ChevronDown size={16} className="rotate-180" />
                        </button>
                    </motion.div>
                )}

                {/* ═══════════════════════════════════════
                    BOTTOM CTA — Client Converting
                ═══════════════════════════════════════ */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#C8FF00]/20 via-[#9EFF00]/10 to-[#C8FF00]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <p className="text-white/20 text-sm font-light mb-6 tracking-wide">
                            Like what you see? Let&apos;s build something legendary.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Button variant="primary" onClick={scrollToContact} className="h-12 px-8 text-sm rounded-full">
                                Start Your Project
                            </Button>
                            <Button variant="secondary" onClick={scrollToContact} className="h-12 px-8 text-sm rounded-full">
                                Request Case Studies
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
