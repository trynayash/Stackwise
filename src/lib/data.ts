type ProjectCategory = "Web Apps" | "E-Commerce" | "Mobile" | "Design & SEO";

type CaseStudy = {
    problem: string;
    strategy: string;
    blueprint: string[];
    results: { metric: string; value: string; description: string }[];
};

type Project = {
    id: string;
    title: string;
    category: ProjectCategory;
    summary: string;
    image: string;
    tech: string[];
    metrics: { label: string; value: string }[];
    featured?: boolean;
    caseStudy?: CaseStudy;
};

export const projects: Project[] = [
    // ═══════════════════════════════════════
    //  WEB APPS (7 projects)
    // ═══════════════════════════════════════
    {
        id: "vaultedge-fintech",
        title: "VaultEdge — FinTech Platform",
        category: "Web Apps",
        summary: "Real-time stock & crypto trading dashboard processing 500K+ trades daily with sub-50ms latency.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Go", "WebSocket", "Redis", "AWS"],
        metrics: [{ label: "Trades/Day", value: "500K+" }, { label: "Latency", value: "<50ms" }],
        featured: true,
        caseStudy: {
            problem: "Our client, a growing FinTech startup, was losing traders to competitors because their legacy platform couldn't handle peak trading volumes. Page loads exceeded 4 seconds, WebSocket connections dropped during market volatility, and their monolithic architecture made feature deployment a week-long ordeal. They were hemorrhaging 25% of active users monthly.",
            strategy: "We rebuilt the entire platform from the ground up using a microservices architecture with Go for the trading engine (sub-millisecond execution), Next.js for the real-time dashboard, and Redis for caching hot market data. We implemented WebSocket multiplexing to handle 50K+ concurrent connections and deployed on AWS with auto-scaling groups that spin up during market hours.",
            blueprint: ["Migrated from monolithic Node.js to Go microservices", "Built real-time WebSocket dashboard with Next.js + Redis pub/sub", "Implemented circuit breakers and graceful degradation for peak loads", "Designed multi-region AWS deployment with <50ms global latency", "Created automated CI/CD pipeline with zero-downtime deployments"],
            results: [
                { metric: "Latency", value: "<50ms", description: "Average trade execution time, down from 800ms" },
                { metric: "Trades/Day", value: "500K+", description: "Daily trade volume processed without degradation" },
                { metric: "User Retention", value: "+340%", description: "Monthly active user retention after platform rebuild" },
                { metric: "Uptime", value: "99.99%", description: "Platform availability during peak market hours" },
            ],
        },
    },
    {
        id: "medvault-health",
        title: "MedVault — Healthcare Portal",
        category: "Web Apps",
        summary: "HIPAA-compliant EHR platform connecting 200+ clinics with real-time patient data sync & telemedicine.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
        tech: ["React", "Node.js", "PostgreSQL", "WebRTC"],
        metrics: [{ label: "Clinics", value: "200+" }, { label: "Uptime", value: "99.99%" }],
    },
    {
        id: "propnest-realty",
        title: "PropNest — Real Estate Portal",
        category: "Web Apps",
        summary: "AI-powered property search platform with 3D virtual tours, predictive pricing & instant mortgage calc.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Python", "TensorFlow", "Mapbox"],
        metrics: [{ label: "Listings", value: "45K+" }, { label: "Conversion", value: "+280%" }],
    },
    {
        id: "eduvault-lms",
        title: "EduVault — EdTech LMS",
        category: "Web Apps",
        summary: "Full-featured LMS with live classes, AI-graded assignments & gamified learning serving 100K+ students.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Firebase", "WebRTC", "OpenAI"],
        metrics: [{ label: "Students", value: "100K+" }, { label: "Completion Rate", value: "92%" }],
    },
    {
        id: "fleet-logistics",
        title: "FleetPulse — Logistics Dashboard",
        category: "Web Apps",
        summary: "Live fleet tracking SaaS with route optimization, fuel analytics & automated dispatch for 5K+ vehicles.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
        tech: ["React", "Node.js", "MongoDB", "Google Maps API"],
        metrics: [{ label: "Vehicles Tracked", value: "5K+" }, { label: "Cost Saved", value: "30%" }],
    },
    {
        id: "insights-ai",
        title: "InsightsAI — Analytics Platform",
        category: "Web Apps",
        summary: "Enterprise BI dashboard with AI-driven forecasting, custom reports & real-time KPI tracking for C-suite.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Python", "TensorFlow", "AWS"],
        metrics: [{ label: "Data Processed", value: "10TB/day" }, { label: "Accuracy", value: "99.2%" }],
        featured: true,
        caseStudy: {
            problem: "A Series-B enterprise analytics company was drowning in data but starving for insights. Their existing BI tool took 45+ seconds to generate reports, couldn't handle real-time data streams, and their C-suite clients were churning because the dashboards looked like Excel spreadsheets from 2005. They needed a complete overhaul — fast.",
            strategy: "We engineered a custom analytics engine using Python + TensorFlow for AI-driven forecasting, paired with a blazing-fast Next.js frontend that renders complex charts in under 200ms. We built a proprietary data pipeline on AWS that ingests 10TB/day from 50+ data sources with 99.2% prediction accuracy. The UI was designed to be boardroom-ready.",
            blueprint: ["Built custom ETL pipeline processing 10TB/day from 50+ connectors", "Trained ML models for revenue forecasting with 99.2% accuracy", "Designed executive-grade dashboard UI with real-time KPI widgets", "Implemented role-based access with SSO integration", "Created automated report generation with PDF/Slack/Email exports"],
            results: [
                { metric: "Report Speed", value: "200ms", description: "Dashboard load time, down from 45 seconds" },
                { metric: "Data Processed", value: "10TB/day", description: "Real-time data ingestion from 50+ sources" },
                { metric: "Prediction Accuracy", value: "99.2%", description: "AI forecasting model accuracy rate" },
                { metric: "Client Retention", value: "+85%", description: "Enterprise client retention after platform launch" },
            ],
        },
    },
    {
        id: "saas-crm",
        title: "NexusCRM — Sales Platform",
        category: "Web Apps",
        summary: "All-in-one CRM with AI lead scoring, pipeline automation & integrated payment processing for SMBs.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop",
        tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
        metrics: [{ label: "Users", value: "25K+" }, { label: "Revenue Tracked", value: "$80M+" }],
    },

    // ═══════════════════════════════════════
    //  E-COMMERCE (6 projects)
    // ═══════════════════════════════════════
    {
        id: "luxe-jewels",
        title: "Luxe & Co — Luxury Jewelry",
        category: "E-Commerce",
        summary: "Premium D2C jewelry store with AR try-on, 360° product views & same-day delivery doing ₹5Cr/month.",
        image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6c4?q=80&w=2670&auto=format&fit=crop",
        tech: ["Shopify Plus", "Three.js", "Next.js", "Razorpay"],
        metrics: [{ label: "Revenue", value: "₹5Cr/mo" }, { label: "AOV", value: "₹45K" }],
        featured: true,
        caseStudy: {
            problem: "A luxury jewelry brand was stuck at ₹80L/month revenue with a generic Shopify template that screamed 'cheap'. Their bounce rate was 72%, average order value was ₹18K (well below their ₹50K+ product range), and customers didn't trust buying high-ticket jewelry online. The founder said: 'Our website looks like a marketplace stall, not a luxury boutique.'",
            strategy: "We rebuilt their entire e-commerce experience on Shopify Plus with a custom Next.js storefront. We integrated Three.js for AR try-on and 360° product views, implemented a concierge-style checkout flow that felt like walking into a luxury store, and optimized every pixel for conversion. We also built a personalized recommendation engine that increased cross-sells by 200%.",
            blueprint: ["Custom Next.js storefront on Shopify Plus with headless architecture", "AR try-on powered by Three.js and WebXR for rings and necklaces", "360° product photography with zoom and spin interactions", "Concierge checkout with WhatsApp integration for high-touch support", "AI recommendation engine trained on purchase history and browsing behavior"],
            results: [
                { metric: "Revenue", value: "₹5Cr/mo", description: "Monthly revenue, up from ₹80L — a 6.25x increase" },
                { metric: "AOV", value: "₹45K", description: "Average order value, up 150% from ₹18K" },
                { metric: "Bounce Rate", value: "-58%", description: "Bounce rate dropped from 72% to 30%" },
                { metric: "Repeat Customers", value: "+120%", description: "Return customer rate after loyalty program launch" },
            ],
        },
    },
    {
        id: "urbanthread-fashion",
        title: "UrbanThread — Fashion Store",
        category: "E-Commerce",
        summary: "Trend-driven D2C fashion brand with AI-powered recommendations, size prediction & influencer integrations.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Shopify Hydrogen", "Algolia", "Stripe"],
        metrics: [{ label: "Conversion", value: "+350%" }, { label: "Returns", value: "-60%" }],
    },
    {
        id: "greenbowl-organic",
        title: "GreenBowl — Organic Marketplace",
        category: "E-Commerce",
        summary: "Farm-to-table organic food marketplace connecting 500+ farmers with 50K+ urban consumers directly.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Node.js", "Stripe", "Firebase"],
        metrics: [{ label: "Farmers", value: "500+" }, { label: "Orders/Day", value: "2K+" }],
    },
    {
        id: "techmart-electronics",
        title: "TechMart — Electronics Store",
        category: "E-Commerce",
        summary: "High-traffic electronics megastore handling 100K+ SKUs with real-time inventory sync & flash sales.",
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Elasticsearch", "Redis", "AWS"],
        metrics: [{ label: "SKUs", value: "100K+" }, { label: "Peak Load", value: "50K/min" }],
    },
    {
        id: "b2b-wholesale",
        title: "TradeFlow — B2B Wholesale",
        category: "E-Commerce",
        summary: "Enterprise B2B procurement platform with bulk pricing, credit terms & multi-warehouse fulfillment.",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2670&auto=format&fit=crop",
        tech: ["React", "Node.js", "PostgreSQL", "SAP Integration"],
        metrics: [{ label: "GMV", value: "$25M/yr" }, { label: "Buyers", value: "3K+" }],
    },
    {
        id: "cratejoy-subs",
        title: "CrateJoy — Subscription Box",
        category: "E-Commerce",
        summary: "Curated subscription box platform with personalized AI picks, 95% retention rate & Razor­pay integration.",
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2670&auto=format&fit=crop",
        tech: ["Next.js", "Node.js", "Stripe", "MongoDB"],
        metrics: [{ label: "Subscribers", value: "30K+" }, { label: "Retention", value: "95%" }],
    },

    // ═══════════════════════════════════════
    //  MOBILE (4 projects)
    // ═══════════════════════════════════════
    {
        id: "fitpulse-app",
        title: "FitPulse — Fitness App",
        category: "Mobile",
        summary: "AI personal trainer app with real-time rep counting, nutrition tracking & Apple Watch integration.",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2670&auto=format&fit=crop",
        tech: ["React Native", "TensorFlow Lite", "Node.js", "Firebase"],
        metrics: [{ label: "Downloads", value: "500K+" }, { label: "Rating", value: "4.9★" }],
        featured: true,
        caseStudy: {
            problem: "A fitness startup had a React Native app with 15K downloads and a 3.2-star rating. The app was slow, the AI rep counter was only 60% accurate, and Apple Watch integration crashed constantly. Users were leaving 1-star reviews saying 'this app counts my breathing as reps'. The founders were about to lose their seed funding.",
            strategy: "We rebuilt the AI engine using TensorFlow Lite with custom pose estimation models trained on 50K+ exercise videos, achieving 98% rep counting accuracy. We rewrote the Apple Watch companion app in native Swift, optimized the React Native core for 60fps animations, and added gamification features (streaks, leaderboards, achievements) that drove daily active usage up by 400%.",
            blueprint: ["Custom TensorFlow Lite model trained on 50K+ exercise videos", "Native Swift Apple Watch companion with real-time heart rate sync", "Gamification engine: achievements, streaks, social leaderboards", "Nutrition tracking with barcode scanner and meal plan AI", "Performance optimization: 60fps animations, <2s cold start"],
            results: [
                { metric: "Downloads", value: "500K+", description: "App Store downloads within 6 months of relaunch" },
                { metric: "App Rating", value: "4.9★", description: "Average rating, up from 3.2 stars" },
                { metric: "AI Accuracy", value: "98%", description: "Rep counting accuracy, up from 60%" },
                { metric: "Daily Active Users", value: "+400%", description: "DAU increase after gamification launch" },
            ],
        },
    },
    {
        id: "bitebolt-delivery",
        title: "BiteBolt — Food Delivery",
        category: "Mobile",
        summary: "Hyper-local food delivery app with real-time tracking, dynamic pricing & 18-min average delivery time.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2670&auto=format&fit=crop",
        tech: ["Flutter", "Node.js", "Redis", "Google Maps"],
        metrics: [{ label: "Avg Delivery", value: "18 min" }, { label: "Orders/Day", value: "15K+" }],
    },
    {
        id: "wanderlust-travel",
        title: "Wanderlust — Travel Booking",
        category: "Mobile",
        summary: "Smart travel booking app with AI itinerary builder, price alerts & offline maps across 190+ countries.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2670&auto=format&fit=crop",
        tech: ["React Native", "Python", "Redis", "Stripe"],
        metrics: [{ label: "Countries", value: "190+" }, { label: "Bookings", value: "1M+" }],
    },
    {
        id: "socialshop-commerce",
        title: "SocialShop — Social Commerce",
        category: "Mobile",
        summary: "TikTok-style social commerce app with live selling, in-app checkout & creator analytics dashboard.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=2670&auto=format&fit=crop",
        tech: ["React Native", "WebRTC", "Node.js", "Stripe"],
        metrics: [{ label: "Creators", value: "10K+" }, { label: "GMV", value: "$8M/yr" }],
    },

    // ═══════════════════════════════════════
    //  DESIGN & SEO (5 projects)
    // ═══════════════════════════════════════
    {
        id: "savoria-restaurant",
        title: "Savoria — Restaurant Chain",
        category: "Design & SEO",
        summary: "Complete digital rebrand + Google Business optimization for a 25-outlet chain. 12x organic traffic growth.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
        tech: ["Figma", "Next.js", "Google Ads", "Schema SEO"],
        metrics: [{ label: "Traffic", value: "12x Growth" }, { label: "Outlets", value: "25" }],
    },
    {
        id: "coinvault-seo",
        title: "CoinVault — Crypto Exchange SEO",
        category: "Design & SEO",
        summary: "Technical SEO overhaul for a crypto exchange. Ranked #1 for 50+ high-volume keywords in 4 months.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2670&auto=format&fit=crop",
        tech: ["Ahrefs", "Next.js", "Schema.org", "Google Analytics"],
        metrics: [{ label: "#1 Rankings", value: "50+" }, { label: "Traffic", value: "800K/mo" }],
    },
    {
        id: "lexis-law",
        title: "Lexis & Partners — Law Firm",
        category: "Design & SEO",
        summary: "Premium brand identity + lead-gen website for a top-tier law firm. 400% increase in qualified inquiries.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop",
        tech: ["Figma", "Webflow", "HubSpot", "Google Ads"],
        metrics: [{ label: "Leads", value: "+400%" }, { label: "Bounce Rate", value: "-55%" }],
    },
    {
        id: "skyline-realty-seo",
        title: "SkyLine — Real Estate SEO",
        category: "Design & SEO",
        summary: "Local SEO domination for luxury real estate. Captured 80% of 'luxury apartments' keyword searches.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        tech: ["Ahrefs", "Next.js", "Google My Business", "Schema SEO"],
        metrics: [{ label: "Market Share", value: "80%" }, { label: "Leads/Mo", value: "500+" }],
        featured: true,
        caseStudy: {
            problem: "A premium real estate developer was invisible online. Despite having ₹200Cr+ in luxury apartment inventory, they ranked on page 5 of Google for 'luxury apartments [city]'. Their website was a WordPress template with 12-second load times, no schema markup, and zero local SEO presence. Competitors with inferior properties were stealing all the organic leads.",
            strategy: "We executed a full-stack SEO domination strategy: rebuilt the site on Next.js for blazing speed, implemented comprehensive Schema.org markup for real estate listings, optimized Google My Business profiles for all project locations, and created a content strategy targeting 200+ high-intent keywords. We also built an automated lead nurture system that converted visitors into showroom appointments.",
            blueprint: ["Complete Next.js rebuild with SSG for 500+ property listing pages", "Schema.org structured data for RealEstateListing and LocalBusiness", "Google My Business optimization for 8 project locations", "200+ keyword content strategy with neighborhood guides and market reports", "Automated lead nurture: chatbot → WhatsApp → CRM pipeline"],
            results: [
                { metric: "Market Share", value: "80%", description: "Captured 80% of 'luxury apartments' keyword searches" },
                { metric: "Leads/Month", value: "500+", description: "Qualified leads per month, up from 30" },
                { metric: "Load Time", value: "0.9s", description: "Page load time, down from 12 seconds" },
                { metric: "Organic Traffic", value: "15x", description: "Organic search traffic growth in 4 months" },
            ],
        },
    },
    {
        id: "velocity-ev",
        title: "Velocity Motors — EV Brand",
        category: "Design & SEO",
        summary: "Award-winning global rebrand & digital showroom for an EV startup. 3 international design awards won.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2670&auto=format&fit=crop",
        tech: ["Framer Motion", "GSAP", "Three.js", "Storyblok"],
        metrics: [{ label: "Traffic", value: "2M/mo" }, { label: "Awards", value: "3" }],
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
            title: "Starter",
            price: { usd: "$499", inr: "₹9,999" },
            description: "Perfect for MSMEs, freelancers & early-stage startups.",
            features: ["Custom Website (5 Pages)", "Mobile Responsive", "Basic SEO & Analytics", "Listing Optimization", "1 Month Support"],
            highlight: false,
            gradient: "from-white/10 to-white/5",
        },
        {
            title: "Growth",
            price: { usd: "$1,499", inr: "₹24,999" },
            description: "For growing brands needing e-commerce & scale.",
            features: ["E-commerce Store (Shopify/Next.js)", "Advanced SEO Suite", "Blog & CMS Setup", "Payment Gateway Integration", "3 Months Support"],
            highlight: true,
            gradient: "from-neon-purple/20 to-neon-blue/20",
        },
        {
            title: "Enterprise",
            price: { usd: "Custom", inr: "Custom" },
            description: "Tailored solutions for complex requirements.",
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
