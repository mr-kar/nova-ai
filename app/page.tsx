import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060816] text-white">
      <Navbar />

      <Hero />

      {/* Temporary section marker.
          Akan kita replace di BATCH 2. */}
      <section
        id="features"
        className="relative min-h-75 border-t border-white/4 bg-[#060816]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-700">
            More coming next
          </p>
        </div>
      </section>

      <section id="pricing" className="hidden" />
      <section id="reviews" className="hidden" />
    </main>
  );
}