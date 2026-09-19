import StatCard from "@/components/dashboard/StatCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import ProductivityChart from "@/components/dashboard/ProductivityChart";

const tasks = [
  {
    title: "Finalize product roadmap",
    project: "Project Aurora",
    priority: "High",
    status: "In Progress",
  },
  {
    title: "Review campaign analytics",
    project: "Marketing",
    priority: "Medium",
    status: "Review",
  },
  {
    title: "Prepare weekly team report",
    project: "Operations",
    priority: "Low",
    status: "Pending",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.07] via-white/[0.02] to-transparent p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.06] blur-[100px]" />

        <div className="relative">
          <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-300">
            Workspace Overview
          </p>

          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Your work,
                <br />
                <span className="text-gray-600">
                  intelligently organized.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-xs leading-6 text-gray-500">
                Nova is keeping track of your projects, tasks, and AI-powered
                workflows so your team can focus on the work that matters.
              </p>
            </div>

            <button className="w-fit rounded-full bg-white px-5 py-3 text-xs font-semibold text-black transition hover:bg-cyan-300">
              + Create Project
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Tasks Completed"
          value="12.4K"
          change="+18.4%"
          icon="✓"
        />

        <StatCard
          label="AI Requests"
          value="48.2K"
          change="+32.8%"
          icon="✦"
        />

        <StatCard
          label="Productivity"
          value="82%"
          change="+12.5%"
          icon="↗"
        />

        <StatCard
          label="Active Projects"
          value="24"
          change="+4.2%"
          icon="◈"
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <ProductivityChart />
        <ActivityCard />
      </section>

      <section className="glass overflow-hidden rounded-2xl">
        <div className="flex flex-col justify-between gap-3 border-b border-white/[0.06] p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-sm font-semibold text-white">
              Priority Tasks
            </p>

            <p className="mt-1 text-[10px] text-gray-600">
              Tasks that need your attention
            </p>
          </div>

          <button className="w-fit rounded-lg border border-white/[0.07] px-3 py-2 text-[10px] text-gray-500 transition hover:bg-white/[0.04] hover:text-white">
            Manage tasks
          </button>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="flex flex-col gap-4 p-5 transition hover:bg-white/[0.015] sm:flex-row sm:items-center"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] text-xs text-gray-500">
                ✓
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-gray-300">
                  {task.title}
                </p>

                <p className="mt-1 text-[9px] text-gray-700">
                  {task.project}
                </p>
              </div>

              <span className="w-fit rounded-full border border-white/[0.06] px-2.5 py-1 text-[9px] text-gray-500">
                {task.priority}
              </span>

              <span className="w-fit rounded-full bg-cyan-400/[0.06] px-2.5 py-1 text-[9px] text-cyan-300">
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}