import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nova AI and our mission to build the future of work.",
};

const values = [
  {
    number: "01",
    title: "Clarity Over Complexity",
    text: "Powerful software should not require a complicated interface. We design Nova around focus, clarity, and useful defaults.",
  },
  {
    number: "02",
    title: "AI With Purpose",
    text: "AI should remove friction and create leverage, not add another layer of noise to an already busy workflow.",
  },
  {
    number: "03",
    title: "Human Decisions Matter",
    text: "Automation handles the repetitive parts. People stay in control of the decisions that actually matter.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative px-6 pb-28 pt-20 sm:pt-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-[130px]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              About Nova
            </p>

            <h1 className="mt-6 text-5xl font-black tracking-[-0.055em] sm:text-6xl md:text-8xl">
              Building The
              <br />
              <span className="text-gray-600">Future Of Work.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Nova is an AI productivity platform built around one simple
              idea: technology should give people more time to think,
              create, and do meaningful work.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="border-y border-white/[0.04] py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                Our Mission
              </p>

              <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Less Busywork.
                <br />
                <span className="text-gray-600">More Momentum.</span>
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-7 text-gray-500">
              <p>
                Modern teams have access to more software than ever, yet
                much of their day is still spent moving information from
                one place to another.
              </p>

              <p>
                Nova brings AI into that workflow so repetitive work can
                become automated, information can become actionable, and
                teams can spend more time on the work that actually moves
                the business forward.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-28 sm:py-36">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                What We Believe
              </p>

              <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Principles Behind
                <br />
                <span className="text-gray-600">The Product.</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7"
                >
                  <span className="text-[10px] tracking-[0.2em] text-gray-700">
                    {value.number}
                  </span>

                  <h3 className="mt-16 text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-gray-600">
                    {value.text}
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