type CapacityBarProps = {
  value: number;
  max: number;
};

export function CapacityBar({ value, max }: CapacityBarProps) {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-24 rounded-full bg-neutral-700">
        {value >= 100 ? (
          <div
            className="h-full rounded-full bg-green-500! transition-all"
            style={{ width: `${percent}%` }}
          />
        ) : (
          <div
            className="h-full rounded-full bg-[#d4a873] transition-all"
            style={{ width: `${percent}%` }}
          />
        )}
      </div>

      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}
