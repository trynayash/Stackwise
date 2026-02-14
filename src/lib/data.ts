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
        id: "silk-stone",
        title: "Silk & Stone",
        category: "E-Commerce",
        summary: "D2C jewelry brand transformation with Shopify Plus.",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop",
        tech: ["Shopify", "Liquid", "WebGL", "SEO"],
        metrics: [{ label: "Sales", value: "+240%" }, { label: "ROAS", value: "8x" }],
    },
    {
        id: "apex-logistics",
        title: "Apex Logistics",
        category: "Web Apps",
        summary: "Corporate shipment tracking platform and client portal.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Node.js", "PostgreSQL"],
        metrics: [{ label: "Efficiency", value: "30%" }, { label: "Load Time", value: "0.8s" }],
    },
    {
        id: "fit-track-pro",
        title: "FitTrack Pro",
        category: "Mobile",
        summary: "Cross-platform fitness coaching app with video streaming.",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2670&auto=format&fit=crop",
        tech: ["Flutter/Dart", "Firebase", "Stripe SDK"],
        metrics: [{ label: "Downloads", value: "50k+" }, { label: "Rating", value: "4.9" }],
    },
    {
        id: "growth-masters",
        title: "Growth Masters",
        category: "Design & SEO",
        summary: "High-performance marketing site engineered for search visibility.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tech: ["Astro", "Schema.org", "Core Vitals"],
        metrics: [{ label: "Traffic", value: "300k/mo" }, { label: "Rank", value: "#1" }],
    },
    {
        id: "cloud-guard",
        title: "CloudGuard Migration",
        category: "Web Apps",
        summary: "Legacy to Cloud migration and automated CI/CD pipeline setup for a fintech firm.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        tech: ["AWS", "Docker", "Terraform", "GitHub Actions"],
        metrics: [{ label: "Cost", value: "-40%" }, { label: "Deploy Time", value: "5min" }],
    },
    {
        id: "smart-support",
        title: "SmartSupport AI",
        category: "Web Apps",
        summary: "Custom AI chatbot integration for 24/7 customer service.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2606&auto=format&fit=crop",
        tech: ["OpenAI API", "Python", "React"],
        metrics: [{ label: "Auto-Reply", value: "80%" }, { label: "Savings", value: "40hrs/wk" }],
    },
    {
        id: "urban-eats",
        title: "Urban Eats",
        category: "E-Commerce",
        summary: "Hyper-local food delivery marketplace for MSME restaurants.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Stripe Connect", "Supabase"],
        metrics: [{ label: "Orders", value: "15k+" }, { label: "Partners", value: "50+" }],
    },
    {
        id: "wander-ui",
        title: "Wander Travel UI",
        category: "Design & SEO",
        summary: "Complete brand identity and app design system for a travel startup.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        tech: ["Figma", "Adobe XD", "Prototyping"],
        metrics: [{ label: "Screens", value: "120+" }, { label: "User Test", value: "95/100" }],
    },
    {
        id: "findash-app",
        title: "FinDash Pro",
        category: "Web Apps",
        summary: "SaaS dashboard for personal finance tracking.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        tech: ["React", "Firebase", "Tailwind"],
        metrics: [{ label: "Users", value: "10k" }, { label: "Uptime", value: "99.99%" }],
    },
    {
        id: "med-connect",
        title: "MedConnect App",
        category: "Mobile",
        summary: "Telehealth mobile application for patient-doctor video consultations.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
        tech: ["React Native", "WebRTC", "Node.js"],
        metrics: [{ label: "Consults", value: "5k+" }, { label: "Rating", value: "4.8" }],
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
