import React from "react";
import Link from "next/link";
import { Edit, Trash } from "lucide-react";

type CardsProps = {
  servico: string;
  valor: number;
  duracaoMin: number;
};

const ServicesCards = ({ servico, valor, duracaoMin }: CardsProps) => {
  return (
    <div className="bg-[#181818] p-3 rounded-lg mt-2 flex justify-between">
      <div>
        <h3 className="">{servico}</h3>
        <div className="text-zinc-500 text-sm">
          <p>
            R$ {valor} <span>-</span> {duracaoMin} min
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/views/clients/edit">
          <Edit
            size={19}
            className="text-zinc-500 cursor-pointer hover:text-zinc-700"
          />
        </Link>
        <Trash
          size={19}
          className="text-zinc-500 cursor-pointer hover:text-red-500"
        />
      </div>
    </div>
  );
};

export default ServicesCards;
