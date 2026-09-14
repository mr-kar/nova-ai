const articles = [
  {
    category: "AI Workflows",
    title: "5 AI Workflows That Save Hours Every Week",
    description:
      "Practical ways to turn repetitive work into automated workflows your team can rely on.",
    date: "6 min read",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    icon: "✦",
  },
  {
    category: "Automation",
    title: "Why Automation Is The Future Of Teams",
    description:
      "How intelligent automation is changing the way modern teams organize and execute work.",
    date: "8 min read",
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    icon: "↗",
  },
  {
    category: "Future Of AI",
    title: "What AI SaaS Will Look Like In 2030",
    description:
      "A look at the technologies and product experiences shaping the next generation of AI software.",
    date: "10 min read",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    icon: "◈",
  },
];

export default function Resources() {
  return (
    <section
      id="resources"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Insights & AI Trends
            </p>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Ideas For A
              <br />
              <span className="text-gray-600">Smarter Future.</span>
            </h2>
          </div>

          <a
            href="/resources"
            className="w-fit rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-xs text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            View all resources →
          </a>
        </div>

        {/* Articles */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12]"
            >
              {/* Visual */}
              <div
                className={`relative h-52 overflow-hidden bg-gradient-to-br ${article.gradient}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.08),transparent_35%)]" />

                {/* Grid */}
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />

                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-gray-300 backdrop-blur">
                  {article.category}
                </div>

                <div className="absolute bottom-6 right-7 text-6xl font-black text-white/[0.08] transition-transform duration-500 group-hover:scale-110 group-hover:text-white/[0.13]">
                  {article.icon}
                </div>

                <div className="absolute bottom-6 left-6 h-10 w-10 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur flex items-center justify-center text-cyan-300">
                  {article.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug transition-colors group-hover:text-cyan-100">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-gray-600">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[9px] text-gray-700">
                    {article.date}
                  </span>

                  <span className="text-[9px] text-gray-500 transition-colors group-hover:text-cyan-300">
                    Read article →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}