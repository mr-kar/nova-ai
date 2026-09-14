import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <Navbar />

      <div className="pt-20">
        <div className="relative mx-auto max-w-7xl px-6 pt-20 text-center sm:pt-28">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Nova Capabilities
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black tracking-[-0.05em] sm:text-6xl md:text-8xl">
            Everything You Need
            <br />
            <span className="text-gray-600">To Work Smarter.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Powerful AI tools designed to remove repetitive work,
            surface better insights, and help your team move faster.
          </p>
        </div>

        <Features />

        {/* Extra feature list */}
        <section className="border-t border-white/[0.04] py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Intelligent Context",
                  text: "Nova understands your workspace context so AI recommendations become more useful over time.",
                },
                {
                  title: "Team Intelligence",
                  text: "Turn team activity into clear signals, trends, and actionable productivity insights.",
                },
                {
                  title: "Built To Scale",
                  text: "From solo creators to large organizations, Nova is designed around flexible workflows.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7"
                >
                  <h2 className="text-lg font-bold">{item.title}</h2>

                  <p className="mt-4 text-xs leading-6 text-gray-600">
                    {item.text}
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