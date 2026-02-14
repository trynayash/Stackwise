type ProjectCategory = "Web Apps" | "E-Commerce" | "Mobile" | "Design & SEO";

type Project = {
    id: string;
    title: string;
    category: ProjectCategory;
    summary: string;
    image: string;
    tech: string[];
    metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
    {
        id: "nexus-fintech",
        title: "Nexus AI Analytics",
        category: "Web Apps",
        summary: "Enterprise-grade predictive analytics dashboard handling $50B+ in transaction volume.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Python", "TensorFlow", "AWS"],
        metrics: [{ label: "Data Processed", value: "10TB/day" }, { label: "Prediction Accuracy", value: "99.2%" }],
    },
    {
        id: "lumina-luxe",
        title: "Lumina Luxe",
        category: "E-Commerce",
        summary: "Immersive 3D shopping experience for a high-end luxury watch brand.",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2670&auto=format&fit=crop",
        tech: ["Shopify Hydrogen", "Three.js", "WebGL"],
        metrics: [{ label: "Conversion Rate", value: "+300%" }, { label: "Avg Order Value", value: "$4.5k" }],
    },
    {
        id: "flow-health",
        title: "FlowHealth",
        category: "Mobile",
        summary: "HIPAA-compliant telemedicine app with real-time patient vitals monitoring.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
        tech: ["React Native", "WebRTC", "Node.js"],
        metrics: [{ label: "User Rating", value: "4.9/5" }, { label: "Active Patients", value: "50k+" }],
    },
    {
        id: "orbit-realty",
        title: "Orbit Realty",
        category: "Web Apps",
        summary: "High-frequency real estate investment platform with live market data feeds.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        tech: ["Vue.js", "Go", "WebSocket"],
        metrics: [{ label: "Latency", value: "<50ms" }, { label: "Transactions", value: "$12M/mo" }],
    },
    {
        id: "velocity-motors",
        title: "Velocity Motors",
        category: "Design & SEO",
        summary: "Award-winning global rebrand and digital showroom for an EV startup.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2670&auto=format&fit=crop",
        tech: ["Framer Motion", "GSAP", "Storyblok"],
        metrics: [{ label: "Traffic", value: "2M/mo" }, { label: "Design Awards", value: "3" }],
    },
    {
        id: "secure-chain",
        title: "SecureChain",
        category: "Web Apps",
        summary: "Blockchain-based supply chain transparency platform for logistics giants.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
        tech: ["Solidity", "React", "Node.js"],
        metrics: [{ label: "Traceability", value: "100%" }, { label: "Fraud Reduction", value: "95%" }],
    },
];

export const pricing: {
    title: string;
    price: { usd: string; inr: string };
    description: string;
    features: string[];
    highlight: boolean;
    gradient: string;
}[] = [
        {
            title: "Startup Launch",
            price: { usd: "$2,900", inr: "₹49,000" },
            description: "Perfect for MSMEs and early-stage startups.",
            features: ["Custom Website (5 Pages)", "Mobile Responsive", "Basic SEO & Analytics", "Listing Optimization", "1 Month Support"],
            highlight: false,
            gradient: "from-white/10 to-white/5",
        },
        {
            title: "Growth Scale",
            price: { usd: "$7,500", inr: "₹1,49,000" },
            description: "For growing brands needing e-commerce & scale.",
            features: ["E-commerce Store (Shopify/Next.js)", "Advanced SEO Suite", "Blog & CMS Setup", "Payment Gateway Integration", "3 Months Support"],
            highlight: true,
            gradient: "from-neon-purple/20 to-neon-blue/20",
        },
        {
            title: "Enterprise",
            price: { usd: "Custom", inr: "Custom" },
            description: "Full-stack custom software solutions.",
            features: ["Custom Web App Development", "Mobile App Development", "Cloud Infrastructure (AWS)", "Dedicated QA & Security", "SLA Support"],
            highlight: false,
            gradient: "from-white/10 to-white/5",
        },
    ];

export const testimonials = [
    {
        name: "Sarah C.",
        role: "CTO, FinTech Startup",
        content: "StackWise didn't just build a platform; they engineered a competitive advantage. The architecture handles our peak loads effortlessly.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "Michael R.",
        role: "Founder, AI Startup",
        content: "We needed a team that spoke 'AI native'. Their integration of our LLM models into the frontend was flawless. Absolutely world-class.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "Elena R.",
        role: "VP of Product, D2C Brand",
        content: "Design is usually an afterthought for dev shops. Not here. The UI/UX they delivered is stunning and drives real conversion.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "David P.",
        role: "CEO, Logistics Company",
        content: "The custom dashboard they built saved us 20 hours a week in operations. The ROI was immediate. Highly recommended.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "James W.",
        role: "Director, SaaS Platform",
        content: "Reliability was our #1 concern. StackWise's DevOps expertise ensured we had 99.99% uptime during our biggest launch event.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "Anita D.",
        role: "Founder, GreenTech Startup",
        content: "As a non-technical founder, I felt supported every step of the way. They explained the tech clearly and delivered exactly what I envisioned.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "Tom H.",
        role: "Product Lead, SaaS Startup",
        content: "I've worked with top-tier agencies. StackWise matches that quality at a fraction of the friction. Pure execution.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "Sophie M.",
        role: "Head of Marketing, E-Commerce",
        content: "Our SEO traffic tripled within 3 months of the rebuild. The site is blazing fast and Google loves it. A game changer.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        rating: 4,
    },
];
