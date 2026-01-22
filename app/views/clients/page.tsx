import React from "react";
import { Edit, Trash } from "lucide-react";
import { Button } from "primereact/button";
import Layout from "@/components/Layout";
import { CapacityBar } from "@/components/CapacityBar";
import Link from "next/link";

type Props = {};

type Client = {
  nome: string;
  phone: string;
  loyaltyPoints: number;
  lastVisit: string;
};

const clients: Client[] = [
  {
    nome: "João Silva",
    phone: "(11) 99999-0001",
    loyaltyPoints: 120,
    lastVisit: "08/01/2025 09:00",
  },
  {
    nome: "Carlos Oliveira",
    phone: "(11) 98888-0002",
    loyaltyPoints: 45,
    lastVisit: "07/01/2025 09:30",
  },
  {
    nome: "Pedro Santos",
    phone: "(11) 97777-0003",
    loyaltyPoints: 80,
    lastVisit: "06/01/2025 10:00",
  },
  {
    nome: "Lucas Almeida",
    phone: "(11) 96666-0004",
    loyaltyPoints: 200,
    lastVisit: "05/01/2025 10:30",
  },
  {
    nome: "Rafael Costa",
    phone: "(11) 95555-0005",
    loyaltyPoints: 30,
    lastVisit: "04/01/2025 11:00",
  },
  {
    nome: "Diego Pereira",
    phone: "(11) 94444-0006",
    loyaltyPoints: 10,
    lastVisit: "03/01/2025 11:30",
  },
  {
    nome: "Bruno Martins",
    phone: "(11) 93333-0007",
    loyaltyPoints: 150,
    lastVisit: "02/01/2025 13:00",
  },
  {
    nome: "Thiago Rocha",
    phone: "(11) 92222-0008",
    loyaltyPoints: 95,
    lastVisit: "01/01/2025 13:30",
  },
  {
    nome: "André Lima",
    phone: "(11) 91111-0009",
    loyaltyPoints: 60,
    lastVisit: "30/12/2024 14:00",
  },
  {
    nome: "Felipe Nogueira",
    phone: "(11) 90000-0010",
    loyaltyPoints: 180,
    lastVisit: "29/12/2024 14:30",
  },
  {
    nome: "Matheus Araujo",
    phone: "(11) 98989-0011",
    loyaltyPoints: 25,
    lastVisit: "28/12/2024 15:00",
  },
  {
    nome: "Gustavo Ribeiro",
    phone: "(11) 97878-0012",
    loyaltyPoints: 70,
    lastVisit: "27/12/2024 15:30",
  },
  {
    nome: "Eduardo Pacheco",
    phone: "(11) 96767-0013",
    loyaltyPoints: 110,
    lastVisit: "26/12/2024 16:00",
  },
  {
    nome: "Henrique Farias",
    phone: "(11) 95656-0014",
    loyaltyPoints: 40,
    lastVisit: "24/12/2024 16:30",
  },
  {
    nome: "Leonardo Teixeira",
    phone: "(11) 94545-0015",
    loyaltyPoints: 220,
    lastVisit: "23/12/2024 17:00",
  },
];

const page = (props: Props) => {
  return (
    <Layout>
      <div className="w-full">
        <div className="flex justify-between mb-3">
          <div>
            <h1 className="font-bold text-4xl">Clientes</h1>
            <p className="text-zinc-400">Gerencie seus Clientes</p>
          </div>
          <Link href="/views/clients/create">
            <Button
              label="Create"
              icon="pi pi-plus"
              size="small"
              className="bg-[#d4a873]! hover:bg-[#b88e5e]! text-black! border-none!"
            />
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl bg-[#121212]">
          <table className="w-full text-sm">
            <thead className="bg-[#2a2a2a]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Clientes</th>
                <th className="px-4 py-3 text-left font-semibold">Numero</th>
                <th className="px-4 py-3 text-left font-semibold">Pontos</th>
                <th className="px-4 py-3 text-left font-semibold">
                  Ultima Visita
                </th>
                <th className="px-4 py-3 text-left font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {clients &&
                clients.map((item, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 text-left">{item.nome}</td>
                    <td className="px-4 py-3 text-left">{item.phone}</td>
                    <td className="px-4 py-3 text-left">
                      <CapacityBar value={item.loyaltyPoints} max={100} />
                    </td>
                    <td className="px-4 py-3 text-left">{item.lastVisit}</td>
                    <td className="px-4 py-3">
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
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default page;
