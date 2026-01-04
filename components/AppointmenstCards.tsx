import React from "react";

interface DataForAppointments {
  nome: string;
  horario: string;
  servico: string;
}

const AppointmenstCards = ({ nome, horario, servico }: DataForAppointments) => {
  return (
    <div>
      <div className="bg-[#121212] p-4 rounded-lg mb-2 flex items-center fle-row">
        <div className="bg-[#36261A]! text-[#AA612C] p-3 rounded-lg mr-4">
          <p>{horario}</p>
        </div>
        <div>
          <h2 className="font-bold">{nome}</h2>
          <p className="text-sm  text-gray-500!">{servico}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmenstCards;
