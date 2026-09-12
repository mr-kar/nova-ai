const team = [
  {
    initials: "JD",
    name: "Jordan Davis",
    action: "completed AI workflow",
    time: "2m ago",
  },
  {
    initials: "AK",
    name: "Alex Kim",
    action: "created a new project",
    time: "8m ago",
  },
  {
    initials: "SM",
    name: "Sarah Miller",
    action: "generated AI summary",
    time: "14m ago",
  },
];

export default function ProductShowcase() {
  return (
    <section
      id="product"
      className="relative overflow-hidden border-y border-white/[0.04] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.055),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Product Showcase
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Designed For
            <br />
            <span className="text-gray-600">Modern Teams.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            One intelligent workspace for projects, tasks, analytics,
            notes, and everything your team needs to move faster.
          </p>
        </div>

        {/* Browser */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute -inset-8 rounded-[50px] bg-cyan-400/[0.035] blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0e1d] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            {/* Browser bar */}
            <div className="flex h-14 items-center justify-between border-b border-white/[0.06] bg-white/[0.015] px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/50" />
              </div>

              <div className="hidden h-7 w-64 items-center justify-center rounded-lg border border-white/[0.05] bg-white/[0.025] sm:flex">
                <span className="text-[8px] tracking-wider text-gray-700">
                  app.nova-ai.com/dashboard
                </span>
              </div>

              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[7px] font-bold">
                JD
              </div>
            </div>

            {/* App */}
            <div className="grid min-h-[600px] grid-cols-1 md:grid-cols-[190px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r border-white/[0.05] bg-[#080b18] p-5 md:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs font-black text-black">
                    N
                  </div>

                  <span className="text-xs font-bold tracking-widest">
                    NOVA
                  </span>
                </div>

                <p className="mt-10 px-2 text-[8px] uppercase tracking-[0.2em] text-gray-700">
                  Workspace
                </p>

                <nav className="mt-3 space-y-1">
                  {[
                    ["⌁", "Analytics", true],
                    ["◫", "Projects", false],
                    ["✓", "Tasks", false],
                    ["✦", "AI Notes", false],
                    ["◎", "Team", false],
                  ].map(([icon, label, active]) => (
                    <div
                      key={String(label)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[10px] ${
                        active
                          ? "bg-cyan-400/10 text-cyan-300"
                          : "text-gray-600"
                      }`}
                    >
                      <span>{icon}</span>
                      <span>{label}</span>
                    </div>
                  ))}
                </nav>

                <div className="mt-12 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-3">
                  <p className="text-[8px] text-gray-600">Workspace Plan</p>

                  <p className="mt-1 text-xs font-semibold">Pro</p>

                  <div className="mt-3 h-1 rounded-full bg-white/[0.05]">
                    <div className="h-full w-[76%] rounded-full bg-cyan-400" />
                  </div>

                  <p className="mt-2 text-[7px] text-gray-700">
                    76% of monthly AI credits
                  </p>
                </div>
              </aside>

              {/* Main content */}
              <div className="min-w-0 p-5 sm:p-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
                      Overview
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      Good morning, Jordan.
                    </h3>

                    <p className="mt-1 text-xs text-gray-600">
                      Here&apos;s what&apos;s happening with your team.
                    </p>
                  </div>

                  <button className="w-fit rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-[9px] text-gray-500">
                    Last 7 days
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    ["12.4K", "Tasks Done", "+24.8%"],
                    ["48K", "AI Requests", "+32.4%"],
                    ["+82%", "Efficiency", "+12.2%"],
                  ].map(([value, label, growth]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-4"
                    >
                      <p className="text-[9px] text-gray-600">{label}</p>

                      <div className="mt-2 flex items-end justify-between">
                        <span className="text-2xl font-bold">{value}</span>

                        <span className="text-[8px] text-emerald-400">
                          {growth}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main grid */}
                <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[1.5fr_1fr]">
                  {/* Chart */}
                  <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] text-gray-600">
                          Productivity Growth
                        </p>

                        <p className="mt-1 text-xl font-bold">+48.2%</p>
                      </div>

                      <div className="rounded-lg bg-cyan-400/10 px-2.5 py-1.5 text-[8px] text-cyan-300">
                        Growing
                      </div>
                    </div>

                    <div className="relative mt-7 h-[220px]">
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[1, 2, 3, 4, 5].map((line) => (
                          <div
                            key={line}
                            className="border-t border-white/[0.04]"
                          />
                        ))}
                      </div>

                      <svg
                        viewBox="0 0 700 220"
                        preserveAspectRatio="none"
                        className="absolute inset-0 h-full w-full"
                      >
                        <defs>
                          <linearGradient
                            id="showcaseChart"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgb(34 211 238)"
                              stopOpacity="0.18"
                            />

                            <stop
                              offset="100%"
                              stopColor="rgb(34 211 238)"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 185 C70 178, 80 160, 135 170 C190 180, 205 130, 260 145 C315 160, 330 105, 385 120 C440 135, 455 90, 505 98 C560 108, 590 45, 640 60 C665 67, 680 45, 700 35 L700 220 L0 220 Z"
                          fill="url(#showcaseChart)"
                        />

                        <path
                          d="M0 185 C70 178, 80 160, 135 170 C190 180, 205 130, 260 145 C315 160, 330 105, 385 120 C440 135, 455 90, 505 98 C560 108, 590 45, 640 60 C665 67, 680 45, 700 35"
                          fill="none"
                          stroke="rgb(34 211 238)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        <circle
                          cx="700"
                          cy="35"
                          r="5"
                          fill="rgb(34 211 238)"
                        />

                        <circle
                          cx="700"
                          cy="35"
                          r="11"
                          fill="rgb(34 211 238)"
                          opacity="0.12"
                        />
                      </svg>
                    </div>

                    <div className="flex justify-between text-[8px] text-gray-700">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>

                  {/* AI Recommendation */}
                  <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                        ✦
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold">
                          AI Recommendation
                        </p>

                        <p className="text-[8px] text-gray-600">
                          Based on your activity
                        </p>
                      </div>
                    </div>

                    <h4 className="mt-7 text-lg font-bold leading-snug">
                      Automate your weekly reports
                    </h4>

                    <p className="mt-3 text-[10px] leading-5 text-gray-500">
                      Nova detected that your team spends around 4.5 hours
                      every week preparing reports.
                    </p>

                    <div className="mt-5 rounded-xl border border-white/[0.05] bg-black/10 p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] text-gray-600">
                          Estimated time saved
                        </span>

                        <span className="text-xs font-bold text-cyan-300">
                          4.5h
                        </span>
                      </div>

                      <div className="mt-3 h-1 rounded-full bg-white/[0.05]">
                        <div className="h-full w-[82%] rounded-full bg-cyan-400" />
                      </div>
                    </div>

                    <button className="mt-5 w-full rounded-xl bg-white py-2.5 text-[9px] font-semibold text-black transition hover:bg-cyan-300">
                      Automate Workflow
                    </button>
                  </div>
                </div>

                {/* Team activity */}
                <div className="mt-3 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] text-gray-600">
                      Team Activity
                    </p>

                    <span className="text-[8px] text-cyan-300">
                      View all →
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {team.map((member) => (
                      <div
                        key={member.name}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gray-600 to-gray-800 text-[7px] font-bold">
                          {member.initials}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-[8px] font-semibold">
                            {member.name}
                          </p>

                          <p className="truncate text-[7px] text-gray-700">
                            {member.action} · {member.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="mx-auto mt-7 max-w-lg text-center text-[10px] leading-5 text-gray-700">
          Everything your team needs, intelligently connected in one
          workspace.
        </p>
      </div>
    </section>
  );
}