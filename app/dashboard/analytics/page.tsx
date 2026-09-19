import ProductivityChart from "@/components/dashboard/ProductivityChart";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-300">
          Intelligence
        </p>

        <h1 className="mt-2 text-3xl font-black tracking-[-0.04em]">
          Analytics
        </h1>

        <p className="mt-2 text-xs text-gray-600">
          Understand how your team is actually working.
        </p>
      </div>

      <ProductivityChart />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["82%", "Overall Efficiency"],
          ["48.2K", "AI Requests"],
          ["18.4%", "Growth Rate"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="glass rounded-2xl p-6"
          >
            <p className="text-3xl font-black tracking-tight text-white">
              {value}
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-gray-600">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}