import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Rivera | Senior Full-Stack Engineer & Distributed Systems Architect",
  description:
    "Portfolio of Alex Rivera, Senior Full-Stack Engineer specializing in high-throughput distributed systems, real-time architectures, and crisp web user experiences.",
  keywords: [
    "Full-Stack Engineer",
    "Distributed Systems",
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "Rust",
    "Cloud Architecture",
  ],
  authors: [{ name: "Alex Rivera" }],
  openGraph: {
    title: "Alex Rivera | Senior Full-Stack Engineer",
    description:
      "Engineering scalable distributed systems and high-fidelity web experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen relative">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
