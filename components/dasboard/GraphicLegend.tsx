import React from "react";

type Props = {};

const GraphicLegend = (props: Props) => {
  const calculo = () => {
    const pontuais: number = 68;
    const atrasados: number = 32;
    const noShow: number = 10;

    return { pontuais, atrasados, noShow };
  };

  const { pontuais, atrasados, noShow } = calculo();

  const total = pontuais + atrasados + noShow;

  const listaLegenda = [
    { label: "Pontuais", value: pontuais, color: "#16A249" },
    { label: "Atrasados", value: atrasados, color: "#F59F0A" },
    { label: "No-Show", value: noShow, color: "#D92626" },
  ];

  return (
    <div className="flex flex-col gap-2 min-w-[200px]">
      {listaLegenda.map((item, index) => (
        <div key={index} className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 w-[20%]">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-white font-medium">{item.label}</span>
          </div>
          <div className="text-white font-bold">
            {item.value}
            <span className="text-gray-400 font-normal ml-1">
              ({total > 0 ? Math.round((item.value / total) * 100) : 0}%)
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GraphicLegend;