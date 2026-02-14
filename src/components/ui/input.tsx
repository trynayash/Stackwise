"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <div className="relative group">
                <input
                    type={type}
                    className={cn(
                        "relative flex h-14 w-full rounded-[14px] bg-[#141414] border border-[#222] px-5 py-3 text-base text-[#ededed] shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#555] focus-visible:outline-none focus-visible:border-neon-blue/50 focus-visible:shadow-[0_0_15px_-3px_rgba(0,212,255,0.15)] disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {/* Subtle focus glow wrapper if needed, but CSS shadow handle it well now. keeping clean */}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
