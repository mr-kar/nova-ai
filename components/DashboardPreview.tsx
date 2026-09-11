export default function DashboardPreview() {
  return (
    <div className="relative w-full">
      {/* Main Dashboard */}
      <div className="dashboard-glass relative overflow-hidden rounded-3xl p-3 sm:p-4">
        {/* Window Header */}
        <div className="flex items-center justify-between px-3 py-2.5 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>

          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/6 bg-white/3 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[9px] tracking-wider text-gray-500">
              NOVA WORKSPACE
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[10px] font-bold">
            JD
          </div>
        </div>

        <div className="grid grid-cols-[130px_1fr] gap-3">
          {/* Sidebar */}
          <aside className="hidden sm:block rounded-2xl bg-[#080c1b] border border-white/5 p-3 min-h-102.5">
            <div className="flex items-center gap-2 mb-7 px-2">
              <div className="w-6 h-6 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <span className="text-[10px] text-cyan-300">N</span>
              </div>

              <span className="text-[10px] font-semibold tracking-wider">
                NOVA
              </span>
            </div>

            <p className="px-2 mb-2 text-[8px] uppercase tracking-[0.15em] text-gray-600">
              Workspace
            </p>

            <div className="space-y-1">
              {[
                ["⌁", "Overview", true],
                ["◫", "Projects", false],
                ["✓", "Tasks", false],
                ["✦", "AI Notes", false],
                ["◎", "Team", false],
              ].map(([icon, label, active]) => (
                <div
                  key={String(label)}
                  className={`flex items-center gap-2 rounded-lg px-2 py-2 text-[9px] ${
                    active
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-gray-600"
                  }`}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-white/5 bg-white/2 p-3">
              <p className="text-[8px] text-gray-600">AI Credits</p>
              <p className="mt-1 text-xs font-semibold">8,420</p>

              <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-[72%] rounded-full bg-cyan-400" />
              </div>
            </div>
          </aside>

          {/* Dashboard Content */}
          <div className="dashboard-grid min-w-0 rounded-2xl border border-white/5 bg-[#080c1b] p-4 sm:p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-gray-600">
                  Analytics
                </p>

                <h3 className="mt-1 text-base sm:text-lg font-semibold">
                  Productivity
                </h3>
              </div>

              <button className="rounded-lg border border-white/[0.07] bg-white/3 px-2.5 py-1.5 text-[8px] text-gray-500">
                This Week
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2.5 mt-5">
              <div className="rounded-xl border border-white/5 bg-white/2.5 p-3">
                <p className="text-[8px] text-gray-600">Tasks Completed</p>
                <div className="flex items-end justify-between mt-1.5">
                  <p className="text-lg font-bold">18K</p>
                  <span className="text-[8px] text-emerald-400">+24%</span>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/2.5 p-3">
                <p className="text-[8px] text-gray-600">AI Accuracy</p>
                <div className="flex items-end justify-between mt-1.5">
                  <p className="text-lg font-bold">98%</p>
                  <span className="text-[8px] text-cyan-400">Excellent</span>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-3 rounded-xl border border-white/5 bg-white/2 p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[8px] text-gray-600">
                  Weekly Activity
                </span>

                <span className="text-[8px] text-cyan-400">
                  +48.2%
                </span>
              </div>

              <div className="relative h-37.5">
                {/* Horizontal chart lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[1, 2, 3, 4].map((line) => (
                    <div
                      key={line}
                      className="border-t border-white/4"
                    />
                  ))}
                </div>

                {/* SVG Chart */}
                <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full"
                >
                  <defs>
                    <linearGradient
                      id="novaChart"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgb(34 211 238)"
                        stopOpacity="0.22"
                      />

                      <stop
                        offset="100%"
                        stopColor="rgb(34 211 238)"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 125 C45 118, 50 110, 90 112 C125 114, 130 90, 165 96 C205 102, 220 68, 255 76 C290 84, 300 62, 335 65 C370 68, 380 42, 410 48 C445 54, 455 22, 500 28 L500 150 L0 150 Z"
                    fill="url(#novaChart)"
                  />

                  <path
                    className="chart-line"
                    d="M0 125 C45 118, 50 110, 90 112 C125 114, 130 90, 165 96 C205 102, 220 68, 255 76 C290 84, 300 62, 335 65 C370 68, 380 42, 410 48 C445 54, 455 22, 500 28"
                    fill="none"
                    stroke="rgb(34 211 238)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="500"
                    cy="28"
                    r="4"
                    fill="rgb(34 211 238)"
                  />

                  <circle
                    cx="500"
                    cy="28"
                    r="8"
                    fill="rgb(34 211 238)"
                    opacity="0.12"
                  />
                </svg>
              </div>

              <div className="flex justify-between text-[7px] text-gray-700 mt-1">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-2 gap-2.5 mt-3">
              <div className="rounded-xl border border-white/5 bg-white/2 p-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                    <span className="text-cyan-300 text-xs">✦</span>
                  </div>

                  <div>
                    <p className="text-[8px] text-gray-600">
                      AI Automations
                    </p>

                    <p className="text-xs font-semibold mt-0.5">
                      1,284
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/2 p-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                    <span className="text-emerald-300 text-xs">↗</span>
                  </div>

                  <div>
                    <p className="text-[8px] text-gray-600">
                      Efficiency
                    </p>

                    <p className="text-xs font-semibold mt-0.5">
                      +82%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI Summary */}
      <div className="nova-float absolute -right-4 sm:-right-8 bottom-10 sm:bottom-14 w-52.5 sm:w-58.75 rounded-2xl border border-cyan-400/10 bg-[#0c1225]/95 backdrop-blur-xl p-4 shadow-2xl shadow-cyan-950/30">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
            <span className="text-cyan-300 text-xs">✦</span>
          </div>

          <div>
            <p className="text-[9px] font-semibold">AI Summary</p>
            <p className="text-[7px] text-gray-600">
              Just now
            </p>
          </div>
        </div>

        <p className="mt-3 text-[9px] leading-relaxed text-gray-400">
          Your team&apos;s productivity increased by{" "}
          <span className="text-cyan-300">48%</span> this week.
          Three workflows can be automated.
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[7px] text-gray-600">
            AI recommendation
          </span>

          <span className="text-[7px] text-cyan-300">
            View insights →
          </span>
        </div>
      </div>
    </div>
  );
}