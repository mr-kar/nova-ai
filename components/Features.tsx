const features = [
  {
    number: "01",
    title: "AI Workflow Automation",
    description:
      "Turn repetitive work into intelligent workflows that run automatically while your team focuses on what matters.",
    metric: "+82%",
    metricLabel: "productivity boost",
    size: "large",
  },
  {
    number: "02",
    title: "Instant AI Summary",
    description:
      "Transform long documents, meetings, and notes into clear actionable insights in seconds.",
    size: "small",
  },
  {
    number: "03",
    title: "Fast Performance",
    description:
      "Built for speed with a clean interface that keeps your work moving without unnecessary friction.",
    size: "small",
  },
  {
    number: "04",
    title: "Advanced Analytics",
    description:
      "Understand how your team works with powerful analytics, productivity trends, and AI-powered recommendations.",
    metric: "+48%",
    metricLabel: "weekly growth",
    size: "large",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Powerful Features
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Everything You Need
            <br />
            <span className="text-gray-600">To Work Smarter.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Nova combines AI automation, intelligent insights, and
            productivity analytics into one focused workspace.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.number}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-9 ${
                feature.size === "large"
                  ? "min-h-[360px]"
                  : "min-h-[300px]"
              }`}
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.04] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.09]" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-gray-700">
                    {feature.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-gray-500 transition-colors group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                    {feature.number === "01" && "✦"}
                    {feature.number === "02" && "✎"}
                    {feature.number === "03" && "↯"}
                    {feature.number === "04" && "◒"}
                  </div>
                </div>

                <div className="mt-auto pt-20">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>

                  {feature.metric && (
                    <div className="mt-7 flex items-end gap-3">
                      <span className="text-3xl font-black tracking-tight text-cyan-300">
                        {feature.metric}
                      </span>

                      <span className="pb-1 text-xs text-gray-600">
                        {feature.metricLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400/60 transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}