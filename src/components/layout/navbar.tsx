"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToContact = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                isScrolled
                    ? "bg-black/80 backdrop-blur-2xl border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "bg-transparent border-transparent py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Text Logo */}
                <Link href="/" className="z-50 group" aria-label="StackWise Home">
                    <span
                        className="text-2xl tracking-tight text-white group-hover:text-[#C8FF00] transition-colors duration-300"
                        style={{ fontFamily: "'Oughter', sans-serif" }}
                    >
                        STACK<span className="text-[#C8FF00] group-hover:text-white transition-colors duration-300">WISE</span>
                    </span>
                </Link>

                {/* Start Project CTA */}
                <LiquidMetalButton
                    size="sm"
                    borderWidth={3}
                    icon={<ArrowRight className="w-4 h-4" />}
                    metalConfig={{
                        colorBack: "#3d6600",
                        colorTint: "#C8FF00",
                        distortion: 0.15,
                        speed: 0.4,
                    }}
                    onClick={scrollToContact}
                >
                    Start Project
                </LiquidMetalButton>
            </div>
        </motion.nav>
    );
}
