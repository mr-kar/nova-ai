import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA AI | Work Faster With AI",
  description:
    "AI productivity platform for smarter workflows and modern teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}