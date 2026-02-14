"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LineHoverLink } from "@/components/ui/line-hover-link";

export function Footer() {
    const scrollTo = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const [email, setEmail] = React.useState("");

    return (
        <footer className="relative bg-[#050505] pt-20 md:pt-32 pb-10 overflow-hidden border-t border-white/5" role="contentinfo">
            <div className="container mx-auto px-6 relative z-10">

                {/* Top Section: Newsletter & Links */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-24 border-b border-white/10">

                    {/* Left Column: Subscribe (4 cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full border-r border-white/5 pr-8 md:pr-12 lg:border-r lg:border-white/10">
                        <div className="max-w-md">
                            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-8">Subscribe</h3>
                            <p className="text-white/60 text-lg mb-8 font-light">
                                Join our newsletter to stay up to date on features and releases.
                            </p>
                            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg placeholder:text-white/20 focus:outline-none focus:border-[#b6ff00] transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-0 top-1/2 -translate-y-1/2 px-6 py-2 bg-transparent text-xs font-bold text-[#b6ff00] border border-[#b6ff00]/30 rounded-full hover:bg-[#b6ff00] hover:text-black transition-all uppercase tracking-wider"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-16 text-xs text-white/30 font-mono uppercase tracking-wider">
                            <p>&copy; {new Date().getFullYear()} STACKWISE</p>
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>

                    {/* Right Columns: Links (8 cols) */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Column 1: Explore */}
                        <div>
                            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-8">Explore</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="#services" className="text-white/60 hover:text-[#b6ff00] text-sm transition-colors block py-1" onClick={scrollTo("services")}>
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#portfolio" className="text-white/60 hover:text-[#b6ff00] text-sm transition-colors block py-1" onClick={scrollTo("portfolio")}>
                                        Work
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Company */}
                        <div>
                            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-8">Company</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="#why-stackwise" className="text-white/60 hover:text-[#b6ff00] text-sm transition-colors block py-1" onClick={scrollTo("why-stackwise")}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#pricing" className="text-white/60 hover:text-[#b6ff00] text-sm transition-colors block py-1" onClick={scrollTo("pricing")}>
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="text-white/60 hover:text-[#b6ff00] text-sm transition-colors block py-1" onClick={scrollTo("contact")}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Connect */}
                        <div>
                            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-8">Connect</h3>
                            <ul className="space-y-4">
                                {['Twitter', 'LinkedIn', 'GitHub'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-white/60 hover:text-[#b6ff00] text-sm transition-colors block py-1">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Massive Brand Name */}
                <div className="pt-24 pb-8 flex justify-center">
                    <h1
                        className="text-[14vw] leading-[0.8] font-medium text-white tracking-tight text-center select-none pointer-events-none mix-blend-overlay opacity-30"
                        style={{ fontFamily: "'Oughter', sans-serif" }}
                    >
                        STACKWISE
                    </h1>
                </div>
            </div>
        </footer>
    );
}
