import React from "react";
import { PrimeIcons } from "primereact/api";

type CardsProps = {
  label?: string;
  value?: number;
  icon: string;
  increase?: number;
  color: string;
  backgroundColor: string;
};

const CardValue = ({ label, value, icon, increase, color, backgroundColor }: CardsProps) => {
  return (
    <div className="bg-[#121212] p-2 rounded-lg flex flex-row justify-between items-center w-lg">
      <div className="flex flex-col gap-3">
        <i
          className={`pi ${icon} w-6`}
          style={{
            color: color,
            backgroundColor: backgroundColor,
            padding: "10px",
            borderRadius: "8px",
            fontSize: "20px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></i>

        <div className="text-3xl font-bold text-white-400">{value}</div>
        <div className="text-sm text-gray-500!">{label}</div>
      </div>
      <div className="h-full">
       {increase && (
         <div className="bg-[#112D1C]! rounded text-[#16A149] text-xs p-1">{increase}%</div>
       )}
      </div>
    </div>
  );
};

export default CardValue;
