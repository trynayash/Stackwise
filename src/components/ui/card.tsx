"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "glass" | "neon";
    children: React.ReactNode;
    spotlight?: boolean;
}

export function Card({
    className,
    variant = "glass",
    children,
    spotlight = false,
    ...props
}: CardProps) {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const variants = {
        glass: "bg-glass-card backdrop-blur-md border border-glass-border shadow-xl",
        neon: "bg-black/40 border border-[#C8FF00]/30 shadow-[0_0_30px_-10px_rgba(200,255,0,0.2)] hover:border-[#C8FF00]/60 hover:shadow-[0_0_50px_-10px_rgba(200,255,0,0.35)]",
    };

    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-2xl transition-colors duration-300",
                variants[variant],
                className
            )}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={variant === "neon" ? { y: -5 } : {}}
            {...props as any}
        >
            {spotlight && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                    }}
                />
            )}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
