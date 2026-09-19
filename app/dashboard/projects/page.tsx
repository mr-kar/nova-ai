const projects = [
  {
    name: "Project Aurora",
    description: "Next generation product launch",
    progress: 82,
    tasks: "24 / 29",
    status: "Active",
  },
  {
    name: "Marketing Campaign",
    description: "Q4 growth campaign",
    progress: 64,
    tasks: "18 / 28",
    status: "Active",
  },
  {
    name: "Website Redesign",
    description: "Nova marketing website",
    progress: 91,
    tasks: "41 / 45",
    status: "Almost done",
  },
  {
    name: "AI Research",
    description: "Internal AI experiments",
    progress: 38,
    tasks: "12 / 31",
    status: "Planning",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-300">
            Workspace
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-[-0.04em]">
            Projects
          </h1>

          <p className="mt-2 text-xs text-gray-600">
            Manage your team's projects and progress.
          </p>
        </div>

        <button className="w-fit rounded-full bg-white px-5 py-3 text-xs font-semibold text-black hover:bg-cyan-300">
          + New Project
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="glass rounded-2xl p-6 transition hover:border-cyan-400/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  {project.name}
                </p>

                <p className="mt-1 text-[10px] text-gray-600">
                  {project.description}
                </p>
              </div>

              <span className="rounded-full bg-cyan-400/[0.06] px-2.5 py-1 text-[9px] text-cyan-300">
                {project.status}
              </span>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-600">
                Progress
              </span>

              <span className="text-sm font-semibold text-white">
                {project.progress}%
              </span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
              <div
                className="h-full rounded-full bg-cyan-400"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <div className="mt-4 flex justify-between text-[9px] text-gray-700">
              <span>{project.tasks} tasks</span>
              <button className="text-cyan-300 hover:text-cyan-200">
                Open →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}