import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductShowcase from "@/components/ProductShowcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Explore the Nova AI productivity dashboard for tasks, analytics, AI requests, and team activity.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <Navbar />

      <div className="pt-20">
        <div className="mx-auto max-w-7xl px-6 pt-20 text-center sm:pt-28">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Nova Workspace
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black tracking-[-0.05em] sm:text-6xl md:text-8xl">
            Your Work.
            <br />
            <span className="text-gray-600">One Intelligent Dashboard.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Track productivity, manage projects, automate workflows,
            and understand your team from one powerful workspace.
          </p>
        </div>

        <ProductShowcase />

        {/* Dashboard capabilities */}
        <section className="border-t border-white/[0.04] py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["12.4K", "Tasks completed"],
                ["48K", "AI requests"],
                ["+82%", "Efficiency"],
                ["98%", "AI accuracy"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7"
                >
                  <p className="text-3xl font-black">{value}</p>

                  <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-gray-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}