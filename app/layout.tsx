import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nova-ai.example"),

  title: {
    default: "Nova AI | Work Smarter With AI",
    template: "%s | Nova AI",
  },

  description:
    "Nova AI is a modern AI productivity platform for smarter workflows, automation, and modern teams.",

  keywords: [
    "AI productivity",
    "AI SaaS",
    "AI automation",
    "productivity platform",
    "team productivity",
  ],

  authors: [{ name: "Nova AI" }],

  openGraph: {
    title: "Nova AI | Work Smarter With AI",
    description:
      "Organize tasks, automate workflows, and work smarter with Nova AI.",
    type: "website",
    siteName: "Nova AI",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nova AI | Work Smarter With AI",
    description:
      "Organize tasks, automate workflows, and work smarter with Nova AI.",
  },

  robots: {
    index: true,
    follow: true,
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