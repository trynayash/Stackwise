"use client";

import React from "react";

export function Background() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#0a0a0a] overflow-hidden">
            {/* Deep blurred radial gradient - subtle depth */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[#1a2200]/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#0d1100]/30 rounded-full blur-[120px] pointer-events-none" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)] pointer-events-none" />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>
        </div>
    );
}
