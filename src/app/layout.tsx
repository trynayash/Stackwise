import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "StackWise | Engineering Digital Growth",
  description: "Elite digital development agency specializing in Web Applications, E-commerce, and Custom Software.",
};

import { LoadingProvider } from "@/components/providers/loading-context";
import { LayoutShell } from "@/components/layout/layout-shell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#060606] text-foreground selection:bg-[#C8FF00]/20 selection:text-[#C8FF00]`}
      >
        <LoadingProvider>
          <LayoutShell>{children}</LayoutShell>
        </LoadingProvider>
      </body>
    </html>
  );
}
