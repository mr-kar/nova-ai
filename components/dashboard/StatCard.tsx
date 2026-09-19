type StatCardProps = {
  label: string;
  value: string;
  change: string;
  icon: string;
};

export default function StatCard({
  label,
  value,
  change,
  icon,
}: StatCardProps) {
  return (
    <div className="glass rounded-2xl p-5 transition duration-300 hover:border-cyan-400/10 hover:bg-white/[0.03]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600">
            {label}
          </p>

          <p className="mt-3 text-2xl font-bold tracking-tight text-white">
            {value}
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] text-sm text-cyan-300">
          {icon}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <span className="text-[10px] font-semibold text-emerald-400">
          {change}
        </span>

        <span className="text-[10px] text-gray-700">
          vs last month
        </span>
      </div>
    </div>
  );
}