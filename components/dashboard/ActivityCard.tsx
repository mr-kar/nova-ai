const activities = [
  {
    initials: "AM",
    title: "Project Aurora updated",
    description: "3 tasks completed",
    time: "2m ago",
  },
  {
    initials: "JD",
    title: "AI summary generated",
    description: "Weekly team meeting",
    time: "18m ago",
  },
  {
    initials: "SK",
    title: "New project created",
    description: "Marketing Campaign",
    time: "42m ago",
  },
  {
    initials: "RM",
    title: "Task automation triggered",
    description: "Weekly report workflow",
    time: "1h ago",
  },
];

export default function ActivityCard() {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Recent Activity
          </p>

          <p className="mt-1 text-[10px] text-gray-600">
            Latest workspace events
          </p>
        </div>

        <button className="text-[10px] text-cyan-300 transition hover:text-cyan-200">
          View all
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {activities.map((activity) => (
          <div
            key={`${activity.initials}-${activity.time}`}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-[9px] font-semibold text-gray-400">
              {activity.initials}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium text-gray-300">
                {activity.title}
              </p>

              <p className="mt-0.5 truncate text-[9px] text-gray-700">
                {activity.description}
              </p>
            </div>

            <span className="shrink-0 text-[9px] text-gray-700">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}