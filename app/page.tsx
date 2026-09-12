import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import TrustedStats from "@/components/TrustedStats";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <Navbar />

      <Hero />

      <Features />

      <ProductShowcase />

      <TrustedStats />

      {/* Temporary section */}
      <section
        id="pricing"
        className="flex min-h-[220px] items-center justify-center border-t border-white/[0.04]"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gray-700">
          Pricing coming in Batch 3
        </p>
      </section>
    </main>
  );
}