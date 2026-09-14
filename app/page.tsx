import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import TrustedStats from "@/components/TrustedStats";
import Pricing from "@/components/Pricing";
import Resources from "@/components/Resources";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <Navbar />

      <Hero />

      <Features />

      <ProductShowcase />

      <TrustedStats />

      <Pricing />

      <Resources />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}