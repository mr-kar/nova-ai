const companies = [
  "VERTEX",
  "AETHER",
  "SYNCO",
  "NEXUS",
  "ORBIT",
];

const stats = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "2M+",
    label: "AI Requests",
  },
  {
    value: "98%",
    label: "Accuracy Rate",
  },
  {
    value: "120+",
    label: "Countries",
  },
];

export default function TrustedStats() {
  return (
    <>
      {/* Trusted companies */}
      <section
        id="reviews"
        className="relative overflow-hidden border-b border-white/[0.04] py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-700">
            Trusted By Teams Worldwide
          </p>

          <div className="mt-10 grid grid-cols-2 gap-y-7 sm:grid-cols-5">
            {companies.map((company) => (
              <div
                key={company}
                className="flex items-center justify-center text-sm font-bold tracking-[0.25em] text-gray-700 transition-colors duration-300 hover:text-gray-400"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#060816] px-5 py-10 text-center sm:px-8 sm:py-14"
              >
                <p className="text-3xl font-black tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-gray-600 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}