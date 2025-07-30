import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Matt Enarle - Portfolio",
  description: "Marathoner, coder, and film photographer from Bacolod City. Building applications that solve real problems.",
  keywords: ["Matt Enarle", "portfolio", "developer", "Next.js", "React", "Flutter", "AI/ML"],
  authors: [{ name: "Matt Enarle" }],
  openGraph: {
    title: "Matt Enarle - Portfolio",
    description: "Marathoner, coder, and film photographer from Bacolod City",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
