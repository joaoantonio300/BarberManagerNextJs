import React, { useMemo } from "react";

interface DonutItem {
  name: string;
  value: number;
  color: string;
}

interface DonutGraphicProps {
  data: DonutItem[];
  size?: number;
  thickness?: number;
  totalLabel?: string;
}

const DonutGraphic: React.FC<DonutGraphicProps> = ({
  data,
  size = 200,
  thickness = 30,
  totalLabel = "Agendamentos",
}) => {
  const total = useMemo(
    () => data.reduce((acc, item) => acc + item.value, 0),
    [data]
  );

  const center = size / 2;
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const gap = 4;

  let cumulativeOffset = 0;

  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        {data.map((item, index) => {
          const percentage = item.value / total;
          const rawLength = circumference * percentage;
          const visibleLength = Math.max(0, rawLength - gap);

          const strokeDasharray = `${visibleLength} ${
            circumference - visibleLength
          }`;
          const strokeDashoffset = -cumulativeOffset;

          cumulativeOffset += rawLength;

          return (
            <circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke={item.color}
              strokeWidth={thickness}
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: "all 0.3s ease" }}
            />
          );
        })}
      </svg>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#FFFFFF",
            lineHeight: 1,
          }}
        >
          {total}
        </span>

        <span
          style={{
            fontSize: "14px",
            color: "#9CA3AF",
            marginTop: "4px",
          }}
        >
          {totalLabel}
        </span>
      </div>
    </div>
  );
};

export default DonutGraphic;
