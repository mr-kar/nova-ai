import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { resources } from "@/components/resource-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "AI workflows, automation strategies, and ideas for building smarter ways of working.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <Navbar />

      <div className="pt-20">
        {/* Header */}
        <section className="relative px-6 pb-20 pt-20 sm:pt-28">
          <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-[120px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Nova Resources
            </p>

            <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-6xl md:text-8xl">
              Ideas For A
              <br />
              <span className="text-gray-600">Smarter Future.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              AI workflows, automation strategies, and ideas for building
              better ways of working.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="border-t border-white/[0.04] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-5 md:grid-cols-3">
              {resources.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20"
                >
                  {/* Visual */}
                  <div className="relative h-56 overflow-hidden bg-[#0a1020]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(34,211,238,0.12),transparent_35%)]" />

                    <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />

                    <span className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-gray-400 backdrop-blur">
                      {article.category}
                    </span>

                    <span className="absolute bottom-5 right-7 text-7xl font-black text-white/[0.06] transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-300/10">
                      0{index + 1}
                    </span>

                    <div className="absolute bottom-6 left-6 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300">
                      ✦
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-bold leading-snug">
                      {article.title}
                    </h2>

                    <p className="mt-3 text-xs leading-6 text-gray-600">
                      {article.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-[9px] text-gray-700">
                        {article.readTime}
                      </span>

                      <span className="text-[9px] text-gray-500 group-hover:text-cyan-300">
                        Read article →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}