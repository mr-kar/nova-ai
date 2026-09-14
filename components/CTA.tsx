export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-cyan-400/[0.035] px-6 py-20 text-center sm:px-10">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[100px]" />

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
            ✦
          </div>

          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Work Smarter With AI
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl md:text-6xl">
            Your Work.
            <br />
            <span className="text-gray-600">Powered By Intelligence.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Start organizing, automating, and accelerating your workflow
            with Nova AI.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.22)] sm:w-auto"
            >
              Start Free Trial

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] px-7 py-3.5 text-sm text-gray-400 transition hover:bg-white/[0.06] hover:text-white sm:w-auto"
            >
              Talk to Sales
            </a>
          </div>

          <p className="mt-5 text-[9px] text-gray-700">
            No credit card required · Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
}