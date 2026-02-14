"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading, SubHeading } from "@/components/ui/typography";
import { testimonials } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
    const row1 = testimonials.slice(0, 4);
    const row2 = testimonials.slice(4, 8);

    return (
        <section id="testimonials" className="py-20 md:py-32 relative z-10 overflow-hidden" aria-label="Client testimonials">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C8FF00]/3 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 mb-20 text-center relative z-10">
                <span className="text-[#C8FF00] text-[11px] font-mono tracking-[0.2em] uppercase mb-4 block">Testimonials</span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-4">What Clients<br /><span className="text-white/25">Say.</span></h2>
                <p className="text-white/20 text-xs font-mono mt-4 tracking-wider">Names shortened to protect confidentiality</p>
            </div>

            <div className="relative z-10">
                <div className="flex mb-8 relative">
                    <motion.div className="flex gap-8 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
                        {[...row1, ...row1, ...row1].map((t, i) => (<TestimonialCard key={`${t.name}-${i}`} testimonial={t} />))}
                    </motion.div>
                </div>
                <div className="flex relative">
                    <motion.div className="flex gap-8 whitespace-nowrap" animate={{ x: ["-50%", "0%"] }} transition={{ duration: 45, ease: "linear", repeat: Infinity }}>
                        {[...row2, ...row2, ...row2].map((t, i) => (<TestimonialCard key={`${t.name}-${i}`} testimonial={t} />))}
                    </motion.div>
                </div>
                <div className="absolute top-0 left-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />
            </div>
        </section>
    );
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={i < rating ? "text-[#C8FF00] fill-[#C8FF00]" : "text-white/10"} />
            ))}
        </div>
    );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <Card variant="glass" className="w-[320px] sm:w-[400px] md:w-[500px] p-6 sm:p-8 flex-shrink-0 whitespace-normal">
            <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <img src={testimonial.image} alt={`${testimonial.name}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-white/40 text-sm">{testimonial.role}</p>
                </div>
                <Quote className="ml-auto text-[#C8FF00]/15" size={24} />
            </div>
            <StarRating rating={testimonial.rating} />
            <p className="text-white/70 leading-relaxed text-sm md:text-base">"{testimonial.content}"</p>
        </Card>
    );
}
