"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <div className="relative group">
                <textarea
                    className={cn(
                        "relative flex min-h-[160px] w-full rounded-[14px] bg-[#141414] border border-[#222] px-5 py-4 text-base text-[#ededed] shadow-sm transition-all duration-200 placeholder:text-[#555] focus-visible:outline-none focus-visible:border-neon-blue/50 focus-visible:shadow-[0_0_15px_-3px_rgba(0,212,255,0.15)] disabled:cursor-not-allowed disabled:opacity-50 resize-y",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
