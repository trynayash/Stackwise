"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeadingProps extends HTMLMotionProps<"h1"> {
    children: React.ReactNode;
    gradient?: boolean;
}

export function HeroHeading({ children, className, ...props }: HeadingProps) {
    return (
        <motion.h1
            className={cn(
                "text-5xl md:text-7xl font-bold tracking-tighter text-white",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            {...(props as HTMLMotionProps<"h1">)}
        >
            {children}
        </motion.h1>
    );
}

export function SectionHeading({ children, className, gradient = false, ...props }: Omit<HeadingProps, "gradient"> & { gradient?: boolean } & HTMLMotionProps<"h2">) {
    return (
        <motion.h2
            className={cn(
                "text-3xl md:text-5xl font-bold tracking-tight mb-6",
                gradient ? "bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60" : "text-white",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            {...(props as HTMLMotionProps<"h2">)}
        >
            {children}
        </motion.h2>
    );
}

export function SubHeading({ children, className, ...props }: HTMLMotionProps<"p">) {
    return (
        <motion.p
            className={cn("text-lg md:text-xl text-neutral-400 leading-relaxed font-light", className)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            {...props}
        >
            {children}
        </motion.p>
    );
}
