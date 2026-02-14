"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLoading } from "@/components/providers/loading-context";
import { Hero } from "@/components/sections/hero";
import { Trusted } from "@/components/sections/trusted";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import RevealLoader from "@/components/ui/reveal-loader";

export default function Home() {
  const { isLoading, setLoadingDone } = useLoading();

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <RevealLoader
              text="STACKWISE"
              textSize="clamp(48px, 10vw, 120px)"
              textColor="#C8FF00"
              bgColors={["#060606", "#1a1a00", "#0d0d0a"]}
              angle={135}
              staggerOrder="center-out"
              movementDirection="top-down"
              textFadeDelay={0.4}
              onComplete={setLoadingDone}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-0 pb-20"
          >
            <Hero />
            <Trusted />
            <Services />
            <Portfolio />
            <Pricing />
            <Testimonials />
            <About />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

