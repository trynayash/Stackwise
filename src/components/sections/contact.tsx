"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

type FormErrors = { name?: string; contact?: string; details?: string };

export function Contact() {
    const [formData, setFormData] = useState({ name: "", contact: "", details: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [errors, setErrors] = useState<FormErrors>({});

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.contact.trim()) newErrors.contact = "Contact info is required";
        if (!formData.details.trim()) newErrors.details = "Please provide some details";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (!validate()) return;
        setIsSubmitting(true);
        try {
            const payload = {
                name: formData.name,
                email: formData.contact,
                message: formData.details
            };

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error("Failed to send");
            setSubmitted(true);
            setFormData({ name: "", contact: "", details: "" });
        } catch { setError("Something went wrong. Please try again or email us directly at hello@stackwise.agency"); }
        finally { setIsSubmitting(false); }
    };

    return (
        <section
            id="contact"
            className="py-24 relative overflow-hidden"
            aria-label="Contact us"
            style={{ backgroundColor: "#050a05" }}
        >
            {/* Background Effects */}
            {/* 1. Large diagonal neon green light sweep */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "50%",
                    left: "50%",
                    width: "140%",
                    height: "600px",
                    background: "radial-gradient(ellipse at center, rgba(182, 255, 0, 0.15) 0%, transparent 70%)",
                    transform: "translate(-20%, -50%) rotate(-15deg)",
                    filter: "blur(100px)",
                    zIndex: 0
                }}
            />

            {/* 2. Light Sweep Effect - The soft curved light beam */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "40%",
                    right: "-10%",
                    width: "120%",
                    height: "300px",
                    background: "linear-gradient(120deg, transparent 0%, rgba(182, 255, 0, 0.4) 40%, rgba(182, 255, 0, 0.6) 50%, rgba(182, 255, 0, 0.3) 60%, transparent 100%)",
                    transform: "rotate(-10deg)",
                    filter: "blur(60px)",
                    opacity: 0.5,
                    zIndex: 0
                }}
            />

            {/* 3. Subtle concentric circles bottom-left */}
            <div className="absolute bottom-0 left-0 pointer-events-none opacity-5 z-0">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                    <circle cx="0" cy="400" r="100" stroke="#b6ff00" strokeWidth="1" />
                    <circle cx="0" cy="400" r="200" stroke="#b6ff00" strokeWidth="1" />
                    <circle cx="0" cy="400" r="300" stroke="#b6ff00" strokeWidth="1" />
                </svg>
            </div>


            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Side: Headline & Icon (40%) */}
                    <div className="lg:col-span-5 relative mt-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-[56px] md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-8">
                                Let&apos;s Connect <br />
                                And Talk
                                <span className="inline-block align-top ml-4 mt-2 bg-[#0e140e] p-3 rounded-full border border-[#b6ff00]/30 relative overflow-hidden group shadow-[0_0_15px_rgba(182,255,0,0.2)]">
                                    <MessageSquare size={32} className="text-[#b6ff00] relative z-10" fill="currentColor" />
                                </span>
                            </h2>
                        </motion.div>
                        <div className="h-32 hidden lg:block" /> {/* Negative space */}
                    </div>

                    {/* Right Side: Form (60%) */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#050a05]/80 backdrop-blur-sm rounded-[20px] p-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-[#1c2a1c]"
                        >
                            <div className="p-8 md:p-10">
                                <AnimatePresence mode="wait">
                                    {!submitted ? (
                                        <motion.form
                                            key="form"
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <div className="space-y-2 group">
                                                <label htmlFor="contact-name" className="text-sm font-medium text-[#888] pl-1">Name</label>
                                                <Input
                                                    id="contact-name"
                                                    placeholder="Semyon"
                                                    value={formData.name}
                                                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                                                    style={{ backgroundColor: "#0e140e", borderColor: "#1c2a1c", color: "#ddd" }}
                                                    className="h-14 border rounded-lg px-4 focus:ring-1 focus:ring-[#b6ff00] focus:border-[#b6ff00] focus:shadow-[0_0_10px_rgba(182,255,0,0.1)] transition-all placeholder:text-[#444]"
                                                />
                                                {errors.name && <p className="text-red-400 text-xs pl-1">{errors.name}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="contact-contact" className="text-sm font-medium text-[#888] pl-1">Phone Number / Telegram Nickname</label>
                                                <Input
                                                    id="contact-contact"
                                                    placeholder="+ 7 564 67 5645"
                                                    value={formData.contact}
                                                    onChange={(e) => { setFormData({ ...formData, contact: e.target.value }); setErrors({ ...errors, contact: undefined }); }}
                                                    style={{ backgroundColor: "#0e140e", borderColor: "#1c2a1c", color: "#ddd" }}
                                                    className="h-14 border rounded-lg px-4 focus:ring-1 focus:ring-[#b6ff00] focus:border-[#b6ff00] focus:shadow-[0_0_10px_rgba(182,255,0,0.1)] transition-all placeholder:text-[#444]"
                                                />
                                                {errors.contact && <p className="text-red-400 text-xs pl-1">{errors.contact}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="contact-details" className="text-sm font-medium text-[#888] pl-1">Details</label>
                                                <Textarea
                                                    id="contact-details"
                                                    placeholder="We are CPA oriented Influencer Marketing Agency"
                                                    value={formData.details}
                                                    onChange={(e) => { setFormData({ ...formData, details: e.target.value }); setErrors({ ...errors, details: undefined }); }}
                                                    style={{ backgroundColor: "#0e140e", borderColor: "#1c2a1c", color: "#ddd" }}
                                                    className="min-h-[160px] border rounded-lg px-4 py-4 focus:ring-1 focus:ring-[#b6ff00] focus:border-[#b6ff00] focus:shadow-[0_0_10px_rgba(182,255,0,0.1)] transition-all resize-none placeholder:text-[#444]"
                                                />
                                                {errors.details && <p className="text-red-400 text-xs pl-1">{errors.details}</p>}
                                            </div>

                                            {error && <div className="flex items-center gap-2 text-red-400 text-sm"><AlertCircle size={16} /><span>{error}</span></div>}

                                            <div className="pt-4">
                                                <Button
                                                    type="submit"
                                                    className="w-full h-14 text-base font-bold rounded-lg border-none transition-all hover:brightness-105 hover:shadow-[0_0_20px_rgba(182,255,0,0.3)]"
                                                    style={{ backgroundColor: "#b6ff00", color: "#000000" }}
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? "Sending..." : "Submit Your Application"}
                                                </Button>
                                            </div>
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            className="py-20 text-center"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ type: "spring" }}
                                        >
                                            <div className="w-20 h-20 rounded-full bg-[#b6ff00]/10 text-[#b6ff00] border border-[#b6ff00]/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(182,255,0,0.15)]">
                                                <CheckCircle size={36} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                                            <p className="text-[#888] mb-10">We&apos;ll be in touch within 24 hours.</p>
                                            <Button
                                                variant="outline"
                                                className="border-[#1c2a1c] text-[#ddd] hover:bg-[#0e140e] hover:text-white hover:border-[#b6ff00]/50 transition-colors"
                                                onClick={() => setSubmitted(false)}
                                            >
                                                Send Another Message
                                            </Button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
