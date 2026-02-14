"use client";

import React from "react";
import { useLoading } from "@/components/providers/loading-context";
import { Background } from "@/components/ui/background";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { GlassDock, type DockItem } from "@/components/ui/glass-dock";
import { cn } from "@/lib/utils";
import {
    Home,
    Briefcase,
    FolderOpen,
    CreditCard,
    Users,
    Mail,
} from "lucide-react";

const dockItems: DockItem[] = [
    { title: "Home", icon: Home, href: "#hero" },
    { title: "Services", icon: Briefcase, href: "#services" },
    { title: "Work", icon: FolderOpen, href: "#portfolio" },
    { title: "Pricing", icon: CreditCard, href: "#pricing" },
    { title: "About", icon: Users, href: "#why-stackwise" },
    { title: "Contact", icon: Mail, href: "#contact" },
];

export function LayoutShell({ children }: { children: React.ReactNode }) {
    const { isLoading } = useLoading();
    const footerRef = React.useRef<HTMLDivElement>(null);
    const [hideDock, setHideDock] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setHideDock(entry.isIntersecting);
            },
            { threshold: 0.1 } // Start hiding as soon as footer nudges in
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, [isLoading]); // Re-run when loading finishes and footer mounts

    const handleDockNav = (href: string) => {
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const dockItemsWithClick: DockItem[] = dockItems.map((item) => ({
        ...item,
        onClick: () => handleDockNav(item.href!),
        href: undefined,
    }));

    return (
        <SmoothScroll>
            {/* Hide background, navbar, footer, dock during loading */}
            {!isLoading && <Background />}
            {!isLoading && <Navbar />}

            <main className="relative z-10 flex min-h-screen flex-col">
                {children}
            </main>

            <div ref={footerRef}>
                {!isLoading && <Footer />}
            </div>

            {/* Glass Dock — fixed bottom center, desktop only */}
            {!isLoading && (
                <div
                    className={cn(
                        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-500 ease-in-out",
                        hideDock ? "translate-y-[200%] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
                    )}
                >
                    <GlassDock items={dockItemsWithClick} />
                </div>
            )}
        </SmoothScroll>
    );
}
