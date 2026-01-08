import DonutGraphic from "./DonutGraphic";
import GraphicLegend from "./GraphicLegend";

const dadosAgendamentos = [
  { name: "Finalizados", value: 65, color: "#16A149" },
  { name: "Pendentes", value: 25, color: "#F59F0A" },
  { name: "Cancelados", value: 10, color: "#D92626" },
];

export default function Dashboard() {
  return (
    <div className="bg-[#121212] p-4 rounded-lg flex flex-col gap-15 items-center">
      <div>
        <DonutGraphic data={dadosAgendamentos} size={200} thickness={25} />
      </div>
      <div className="w-full">
        <GraphicLegend />
      </div>
    </div>
  );
}
