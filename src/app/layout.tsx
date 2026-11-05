import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { PortfolioProvider } from "@/context/PortfolioConfigContext";

export const metadata: Metadata = {
  title: "DHRUB MAHAJAN | Information Science Engineer & Full-Stack Developer",
  description: "Interactive futuristic Minecraft-inspired digital portfolio universe showcasing full-stack web applications, MERN stack, and Django projects.",
  keywords: ["Information Science", "Software Engineer", "Full-Stack Developer", "Portfolio", "MERN Stack", "Django", "Next.js", "React"],
  openGraph: {
    title: "DHRUB MAHAJAN | Information Science Engineer & Full-Stack Developer",
    description: "Interactive futuristic Minecraft-inspired digital portfolio universe.",
    type: "website",
    locale: "en_US",
  }
};

/**
 * Root Layout Component
 * 
 * WHAT IT DOES:
 * This is the Next.js App Router root layout. It defines the `<html>` and `<body>` tags and 
 * sets the baseline global styles and fonts for the entire application. It also defines the SEO metadata.
 * 
 * HOW IT CONNECTS TO OTHER FILES:
 * - Wraps the entire application inside the `<PortfolioProvider>` (from `PortfolioConfigContext`), injecting global state into all child pages/components.
 * - Wraps child content in `<SmoothScroll>`, enabling Lenis smooth scrolling globally.
 * - Imports `globals.css` where all the Tailwind and custom Minecraft/CSS-variable theme tokens are defined.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col bg-[#0b0f10] text-[#f3f4f6]">
        <PortfolioProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </PortfolioProvider>
      </body>
    </html>
  );
}
