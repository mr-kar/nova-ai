const plans = [
  {
    name: "Free",
    description: "For individuals exploring AI productivity.",
    price: "$0",
    period: "",
    features: [
      "3 AI Projects",
      "Basic Analytics",
      "Community Support",
      "1 Workspace",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "For creators and teams ready to move faster.",
    price: "$19",
    period: "/month",
    features: [
      "Unlimited Projects",
      "AI Automation",
      "Advanced Analytics",
      "Team Collaboration",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations that need AI at scale.",
    price: "Custom",
    period: "",
    features: [
      "Dedicated Infrastructure",
      "API Access",
      "SSO Integration",
      "Dedicated Manager",
      "Custom AI Models",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Simple Pricing
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Start Free.
            <br />
            <span className="text-gray-600">Scale When Ready.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Simple plans designed around the way modern teams actually
            work. No complicated pricing maze.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 sm:p-8 ${
                plan.popular
                  ? "border-cyan-400/25 bg-cyan-400/[0.045] shadow-[0_30px_100px_rgba(8,145,178,0.08)]"
                  : "border-white/[0.07] bg-white/[0.02]"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-6 top-6 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
                  Most Popular
                </div>
              )}

              <div>
                <p className="text-sm font-semibold">{plan.name}</p>

                <p className="mt-3 min-h-10 max-w-xs text-xs leading-5 text-gray-600">
                  {plan.description}
                </p>
              </div>

              <div className="mt-8 flex items-end gap-1">
                <span className="text-4xl font-black tracking-tight">
                  {plan.price}
                </span>

                {plan.period && (
                  <span className="pb-1.5 text-xs text-gray-600">
                    {plan.period}
                  </span>
                )}
              </div>

              <div className="my-8 h-px bg-white/[0.06]" />

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-xs text-gray-400"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] text-[8px] text-cyan-300">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-10 flex items-center justify-center rounded-xl px-5 py-3 text-xs font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-black hover:bg-cyan-300"
                    : "border border-white/[0.08] bg-white/[0.025] text-white hover:bg-white/[0.07]"
                }`}
              >
                {plan.name === "Enterprise"
                  ? "Contact Sales"
                  : plan.name === "Pro"
                    ? "Start Pro Trial"
                    : "Get Started"}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-[9px] text-gray-700">
          No credit card required for the Free plan.
        </p>
      </div>
    </section>
  );
}