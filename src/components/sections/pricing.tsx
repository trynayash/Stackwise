"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading, SubHeading } from "@/components/ui/typography";
import { pricing } from "@/lib/data";
import { Check, ChevronDown, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    { q: "What's the typical project timeline?", a: "Most projects take 4–8 weeks from kickoff to launch. Complex enterprise apps may take 12+ weeks. We provide a detailed timeline during our initial consultation." },
    { q: "Do you work with startups outside India?", a: "Absolutely. We work with clients globally. Our team operates in IST and we're flexible with scheduling across time zones." },
    { q: "What happens after the project is delivered?", a: "Every plan includes a support period (1–3 months). After that, we offer ongoing maintenance retainers. You fully own the code and assets we deliver." },
    { q: "Can I see real case studies before committing?", a: "Yes! Once we schedule an introductory call, we'll share detailed case studies relevant to your industry and project scope." },
];

export function Pricing() {
    const [currency, setCurrency] = React.useState<"usd" | "inr">("usd");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    React.useEffect(() => {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz.includes("Kolkata") || tz.includes("Calcutta") || tz.includes("India")) setCurrency("inr");
    }, []);

    const scrollToContact = (planTitle: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="pricing" className="py-20 md:py-24 relative z-10" aria-label="Pricing plans">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] bg-[#C8FF00]/3 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[#C8FF00] text-[11px] font-mono tracking-[0.2em] uppercase mb-4 block">Pricing</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-4">Invest in<br /><span className="text-white/25">Excellence.</span></h2>
                    <p className="text-white/30 text-sm">Transparent pricing for world-class engineering.</p>

                    <div className="mt-8 inline-flex bg-white/5 rounded-full p-1 border border-white/10">
                        <button onClick={() => setCurrency("usd")} className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", currency === "usd" ? "bg-[#C8FF00] text-black" : "text-white/50 hover:text-white")}>USD $</button>
                        <button onClick={() => setCurrency("inr")} className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", currency === "inr" ? "bg-[#C8FF00] text-black" : "text-white/50 hover:text-white")}>INR ₹</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {pricing.map((plan, index) => (
                        <motion.div key={plan.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={cn("h-full", plan.highlight ? "md:-mt-8 md:-mb-8 z-10" : "")}>
                            <Card variant={plan.highlight ? "neon" : "glass"} className={cn("h-full p-8 flex flex-col relative", plan.highlight ? "bg-black/60 border-[#C8FF00]/30 shadow-[0_0_40px_-10px_rgba(200,255,0,0.15)]" : "bg-white/[0.03]")}>
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-[#C8FF00] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">MOST POPULAR</span>
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-xl font-medium text-white mb-2">{plan.title}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-white tracking-tight">{plan.price[currency]}</span>
                                        {plan.price[currency] !== "Custom" && <span className="text-white/40 text-sm">/project</span>}
                                    </div>
                                    <p className="text-white/50 text-sm mt-4">{plan.description}</p>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                                            <div className={cn("flex items-center justify-center w-5 h-5 rounded-full", plan.highlight ? "bg-[#C8FF00]/20 text-[#C8FF00]" : "bg-white/10 text-white/50")}>
                                                <Check size={12} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant={plan.highlight ? "primary" : "secondary"} className="w-full" onClick={scrollToContact(plan.title)}>
                                    Choose {plan.title}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="mt-12 text-center flex items-center justify-center gap-2 text-white/30 text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <Shield size={16} className="text-[#C8FF00]/60" />
                    <span>100% Satisfaction Guaranteed — Full refund if we don't deliver</span>
                </motion.div>

                <div className="mt-20 max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold text-white text-center mb-10">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border border-white/5 rounded-xl overflow-hidden">
                                <button className="w-full flex items-center justify-between p-5 text-left text-white/80 hover:text-white transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                                    <span className="font-medium text-sm">{faq.q}</span>
                                    <ChevronDown size={18} className={cn("transition-transform duration-300 flex-shrink-0 ml-4", openFaq === i ? "rotate-180" : "")} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                            <p className="px-5 pb-5 text-sm text-white/50 leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
