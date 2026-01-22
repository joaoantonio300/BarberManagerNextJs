import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import DropListCompontent from "@/components/agenda/DropListCompontent";

type Appointment = {
  id: string;
  professional: string;
  nome: string;
  horario: string;
  servico: string;
};


const initialData: Appointment[] = [
  {
    id: "1",
    professional: "João Barbeiro",
    nome: "Pedro Silva",
    horario: "10:00",
    servico: "Corte + Barba",
  },
  {
    id: "2",
    professional: "Carlos Barbeiro",
    nome: "André Santos",
    horario: "09:00",
    servico: "Barba",
  },
  {
    id: "3",
    professional: "Rafael Barbeiro",
    nome: "Marcos Oliveira",
    horario: "11:00",
    servico: "Corte Social",
  },
  {
    id: "4",
    professional: "João Barbeiro",
    nome: "Lucas Costa",
    horario: "14:00",
    servico: "Corte Degradê",
  },
  {
    id: "5",
    professional: "Carlos Barbeiro",
    nome: "Roberto Lima",
    horario: "15:00",
    servico: "Corte + Barba",
  },
  {
    id: "6",
    professional: "Carlos Barbeiro",
    nome: "Felipe (Encaixe)",
    horario: "10:30",
    servico: "Sobrancelha",
  },
  {
    id: "16",
    professional: "Carlos Emanuel",
    nome: "Felipe (Encaixe)",
    horario: "10:30",
    servico: "Sobrancelha",
  },
  {
    id: "8",
    professional: "João Zacanlleri",
    nome: "Felipe (Encaixe)",
    horario: "10:30",
    servico: "Sobrancelha",
  },
];

const ScheduleKanban = () => {
  return (
    <Layout>
      <div className="w-full min-h-screen text-zinc-100 font-sans h-full">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-bold text-4xl">Agenda Semanal</h1>
            <p className="text-zinc-400">Gerenciamento de fila e barbeiros</p>
          </div>
          <Link
            href="/views/agenda/create"
            className="flex items-center gap-2 bg-[#d4a873] hover:bg-[#b88e5e] text-black font-semibold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-[#d4a873]/20"
          >
            Novo Agendamento
          </Link>
        </div>
        <DropListCompontent initialData={initialData} />
      </div>
    </Layout>
  );
};

export default ScheduleKanban;
