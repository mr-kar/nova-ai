import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore Nova AI Free, Pro, and Enterprise plans.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <Navbar />

      <div className="pt-20">
        <div className="mx-auto max-w-7xl px-6 pt-20 text-center sm:pt-28">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Pricing
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black tracking-[-0.05em] sm:text-6xl md:text-8xl">
            Simple Pricing.
            <br />
            <span className="text-gray-600">Serious Productivity.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Start for free, upgrade when your workflow grows, and
            scale Nova across your organization.
          </p>
        </div>

        <Pricing />

        <FAQ />
      </div>

      <Footer />
    </main>
  );
}