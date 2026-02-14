"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, ShoppingCart, Smartphone } from "lucide-react";



export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 600], [0, 150]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const scrollToSection = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex flex-col overflow-hidden"
            aria-label="Hero"
            style={{ background: "#060606" }}
        >
            {/* ═══════════════════════════════════════════
                BACKGROUND LAYER 1: Base dark gradient
                Subtle radial gradient from near-black center
            ═══════════════════════════════════════════ */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 30%, #0d1a0a 0%, #080808 40%, #060606 100%)",
                }}
            />

            {/* ═══════════════════════════════════════════
                BACKGROUND LAYER 2: Green/Teal Aurora Glow
                Multiple overlapping blurred orbs — the key
                visual anchor from the DevCore reference.
                Like a diffused northern lights effect.
            ═══════════════════════════════════════════ */}
            {/* Primary lime-green glow — large, centered-top */}
            <div
                className="absolute z-0 pointer-events-none"
                style={{
                    top: "-12%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "900px",
                    height: "500px",
                    background: "radial-gradient(ellipse at center, rgba(200,255,0,0.12) 0%, rgba(200,255,0,0.04) 40%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />
            {/* Secondary teal/cyan glow — left side, adds depth */}
            <div
                className="absolute z-0 pointer-events-none"
                style={{
                    top: "-8%",
                    left: "25%",
                    width: "500px",
                    height: "450px",
                    background: "radial-gradient(ellipse at center, rgba(0,255,200,0.08) 0%, rgba(0,255,200,0.02) 50%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />
            {/* Tertiary green glow — right side, balances */}
            <div
                className="absolute z-0 pointer-events-none"
                style={{
                    top: "-5%",
                    right: "20%",
                    width: "400px",
                    height: "350px",
                    background: "radial-gradient(ellipse at center, rgba(180,255,50,0.07) 0%, transparent 60%)",
                    filter: "blur(70px)",
                }}
            />
            {/* Focused bright hotspot — small intense glow behind icons */}
            <div
                className="absolute z-0 pointer-events-none"
                style={{
                    top: "18%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "300px",
                    height: "200px",
                    background: "radial-gradient(ellipse at center, rgba(200,255,0,0.15) 0%, transparent 60%)",
                    filter: "blur(40px)",
                }}
            />

            {/* ═══════════════════════════════════════════
                BACKGROUND LAYER 3: Square Grid Lines
                Clear visible grid lines like DevCore —
                not dots, actual intersecting lines
                forming a square grid.
            ═══════════════════════════════════════════ */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
                    `,
                    backgroundSize: "64px 64px",
                    maskImage: "radial-gradient(ellipse 65% 55% at 50% 35%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 35%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 80%)",
                }}
            />

            {/* ═══════════════════════════════════════════
                BACKGROUND LAYER 4: Bottom/Edge Fade
                Clean transition into the next section
            ═══════════════════════════════════════════ */}
            <div
                className="absolute bottom-0 left-0 right-0 h-52 z-[2] pointer-events-none"
                style={{
                    background: "linear-gradient(to top, #060606 0%, transparent 100%)",
                }}
            />
            {/* Side vignette for extra depth */}
            <div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(6,6,6,0.6) 100%)",
                }}
            />

            {/* ═══════════════════════════════════════════
                CONTENT
            ═══════════════════════════════════════════ */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-6 pt-24 pb-8"
            >
                {/* Service Icon Badges — 3 glowing floating icons */}
                <motion.div
                    className="flex items-center gap-5 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    {[
                        { icon: Code2, color: "#C8FF00", shadow: "rgba(200,255,0,0.3)" },
                        { icon: ShoppingCart, color: "#00FFC8", shadow: "rgba(0,255,200,0.3)" },
                        { icon: Smartphone, color: "#C8FF00", shadow: "rgba(200,255,0,0.3)" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md"
                            style={{
                                background: `radial-gradient(circle at 30% 30%, ${item.color}18, ${item.color}08)`,
                                border: `1px solid ${item.color}30`,
                                boxShadow: `0 0 25px ${item.shadow}, 0 0 80px ${item.color}10, inset 0 1px 0 ${item.color}15`,
                            }}
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                        >
                            <item.icon size={22} style={{ color: item.color }} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Headline — Single powerful line */}
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.03em] text-white leading-[1.1] mb-7 max-w-5xl"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Design, Build <span className="text-[#C8FF00]">&amp;</span> Scale
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-white/40 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-[1.7] mb-12 tracking-[0.01em]"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    From crafting stunning interfaces to building robust software and
                    deploying it seamlessly — we&apos;re here to help your business shine.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <Button
                        variant="primary"
                        className="h-13 px-10 text-base rounded-full"
                        onClick={scrollToSection("contact")}
                    >
                        Contact Us
                    </Button>
                    <Button
                        variant="secondary"
                        className="h-13 px-10 text-base rounded-full"
                        onClick={scrollToSection("services")}
                    >
                        Explore Our Services
                    </Button>
                </motion.div>
            </motion.div>

        </section>
    );
}
