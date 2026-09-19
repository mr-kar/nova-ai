const tasks = [
  ["Finalize product roadmap", "Aurora", "High", "In Progress"],
  ["Review campaign analytics", "Marketing", "Medium", "Review"],
  ["Prepare weekly report", "Operations", "Low", "Pending"],
  ["Update onboarding flow", "Website", "Medium", "In Progress"],
  ["Generate customer insights", "AI Research", "High", "Pending"],
];

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-300">
            Workspace
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-[-0.04em]">
            Tasks
          </h1>

          <p className="mt-2 text-xs text-gray-600">
            Keep your work moving without losing context.
          </p>
        </div>

        <button className="w-fit rounded-full bg-white px-5 py-3 text-xs font-semibold text-black hover:bg-cyan-300">
          + Add Task
        </button>
      </div>

      <div className="glass overflow-hidden rounded-2xl">
        <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/[0.06] p-5 text-[9px] uppercase tracking-[0.15em] text-gray-700 sm:grid-cols-[1fr_140px_100px_110px]">
          <span>Task</span>
          <span className="hidden sm:block">Priority</span>
          <span className="hidden sm:block">Status</span>
          <span className="text-right">Action</span>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {tasks.map(([task, project, priority, status]) => (
            <div
              key={task}
              className="grid grid-cols-[1fr_auto] gap-4 p-5 transition hover:bg-white/[0.015] sm:grid-cols-[1fr_140px_100px_110px] sm:items-center"
            >
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-gray-300">
                  {task}
                </p>

                <p className="mt-1 text-[9px] text-gray-700">
                  {project}
                </p>
              </div>

              <span className="hidden text-[10px] text-gray-500 sm:block">
                {priority}
              </span>

              <span className="hidden rounded-full bg-cyan-400/[0.06] px-2.5 py-1 text-center text-[9px] text-cyan-300 sm:block">
                {status}
              </span>

              <button className="text-right text-[10px] text-gray-600 hover:text-white">
                Open →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}