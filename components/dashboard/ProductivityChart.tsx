const points = [
  [0, 78],
  [10, 70],
  [20, 73],
  [30, 54],
  [40, 60],
  [50, 44],
  [60, 48],
  [70, 32],
  [80, 37],
  [90, 22],
  [100, 27],
];

export default function ProductivityChart() {
  const line = points
    .map(([x, y]) => `${x},${y}`)
    .join(" ");

  const area = `0,100 ${line} 100,100`;

  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-white">
            Productivity Growth
          </p>

          <p className="mt-1 text-[10px] text-gray-600">
            Workspace activity over the last 30 days
          </p>
        </div>

        <button className="w-fit rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2 text-[10px] text-gray-500">
          Last 30 days⌄
        </button>
      </div>

      <div className="relative mt-8 h-64 overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-between">
          {[100, 75, 50, 25, 0].map((value) => (
            <div
              key={value}
              className="flex items-center gap-3"
            >
              <span className="w-7 text-[9px] text-gray-700">
                {value}
              </span>

              <div className="h-px flex-1 bg-white/[0.04]" />
            </div>
          ))}
        </div>

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-10 right-0 h-full w-[calc(100%-2.5rem)]"
        >
          <polygon
            points={area}
            fill="rgba(34,211,238,0.05)"
          />

          <polyline
            points={line}
            fill="none"
            stroke="rgba(34,211,238,0.8)"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />

          <circle
            cx="90"
            cy="22"
            r="2"
            fill="white"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="ml-10 mt-2 flex justify-between text-[9px] text-gray-700">
        <span>01</span>
        <span>07</span>
        <span>14</span>
        <span>21</span>
        <span>30</span>
      </div>
    </div>
  );
}