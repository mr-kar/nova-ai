import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="nova-grid absolute inset-0" />

        <div className="nova-glow nova-glow-cyan nova-pulse w-125 h-125 -top-40 left-[10%]" />

        <div className="nova-glow nova-glow-blue nova-pulse w-112.5 h-112.5 top-[35%] right-[5%]" />

        <div className="absolute inset-x-0 top-0 h-125 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.08),transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Hero Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="nova-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/4 px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-cyan-300">
                AI Productivity Platform
              </span>
            </div>
          </div>

          <h1
            className="nova-slide-up mt-7 text-5xl sm:text-6xl md:text-7xl lg:text-[92px] font-black tracking-[-0.055em] leading-[0.9]"
            style={{ animationDelay: "100ms" }}
          >
            Work Faster
            <br />

            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-gray-500">
              With AI.
            </span>
          </h1>

          <p
            className="nova-slide-up mx-auto mt-7 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-gray-500"
            style={{ animationDelay: "200ms" }}
          >
            Organize tasks, summarize notes, and automate your workflow
            with one powerful AI platform.
          </p>

          {/* CTA */}
          <div
            className="nova-slide-up mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#pricing"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.22)]"
            >
              Start Free Trial

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/3 px-7 py-3.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/6 hover:text-white"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-[9px]">
                ▶
              </span>

              Watch Demo
            </a>
          </div>

          {/* Trusted Users */}
          <div
            className="nova-slide-up mt-10 flex flex-col items-center gap-3"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex -space-x-2">
              {[
                ["JD", "from-cyan-400 to-blue-500"],
                ["AK", "from-violet-400 to-fuchsia-500"],
                ["SM", "from-emerald-400 to-cyan-500"],
                ["+12K", "from-gray-500 to-gray-700"],
              ].map(([initials, gradient]) => (
                <div
                  key={initials}
                  className={`w-8 h-8 rounded-full border-2 border-[#060816] bg-linear-to-br ${gradient} flex items-center justify-center text-[7px] font-bold text-white`}
                >
                  {initials}
                </div>
              ))}
            </div>

            <p className="text-[10px] sm:text-xs text-gray-600">
              Trusted by{" "}
              <span className="text-gray-400">12,000+</span>{" "}
              creators & teams
            </p>
          </div>
        </div>

        {/* Dashboard */}
        <div
          id="dashboard"
          className="nova-slide-up relative mx-auto mt-20 sm:mt-24 lg:mt-28 max-w-6xl"
          style={{ animationDelay: "500ms" }}
        >
          <div className="absolute -inset-10 rounded-[50px] bg-cyan-400/2.5 blur-3xl pointer-events-none" />

          <DashboardPreview />
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute left-0 right-0 -bottom-1 h-40 bg-linear-to-t from-[#060816] to-transparent" />
      </div>
    </section>
  );
}