const notes = [
  {
    title: "Weekly Team Meeting",
    preview: "Discussed product roadmap, launch timeline...",
    date: "Today",
  },
  {
    title: "Customer Research",
    preview: "Three major patterns emerged from recent...",
    date: "Yesterday",
  },
  {
    title: "Product Strategy",
    preview: "The next iteration should focus on automation...",
    date: "Sep 17",
  },
];

export default function AiNotesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-300">
            Intelligence
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-[-0.04em]">
            AI Notes
          </h1>

          <p className="mt-2 text-xs text-gray-600">
            Turn messy information into useful knowledge.
          </p>
        </div>

        <button className="w-fit rounded-full bg-white px-5 py-3 text-xs font-semibold text-black hover:bg-cyan-300">
          + New AI Note
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              ✦
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Ask Nova
              </p>

              <p className="text-[10px] text-gray-600">
                Summarize or analyze your workspace
              </p>
            </div>
          </div>

          <textarea
            placeholder="Ask Nova something about your notes..."
            className="mt-6 min-h-40 w-full resize-none rounded-xl border border-white/[0.07] bg-black/10 p-4 text-xs text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/20"
          />

          <button className="mt-3 rounded-xl bg-cyan-400 px-4 py-3 text-xs font-semibold text-black transition hover:bg-cyan-300">
            Generate Insight ✦
          </button>
        </div>

        <div className="glass rounded-2xl p-6">
          <p className="text-sm font-semibold text-white">
            Recent Notes
          </p>

          <div className="mt-5 space-y-2">
            {notes.map((note) => (
              <button
                key={note.title}
                className="w-full rounded-xl border border-white/[0.05] p-4 text-left transition hover:border-cyan-400/10 hover:bg-white/[0.02]"
              >
                <div className="flex justify-between gap-3">
                  <span className="text-[11px] font-medium text-gray-300">
                    {note.title}
                  </span>

                  <span className="text-[9px] text-gray-700">
                    {note.date}
                  </span>
                </div>

                <p className="mt-2 line-clamp-2 text-[9px] leading-5 text-gray-600">
                  {note.preview}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}