import React from "react";
import { Edit, Trash } from "lucide-react";
import { Button } from "primereact/button";
import Layout from "@/components/Layout";
import { CapacityBar } from "@/components/CapacityBar";
import Link from "next/link";
import { ClientRepository } from "@/repository/ClientsRepository";

const repository = new ClientRepository();

const page = async () => {

  const clients = await repository.list();

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
                  console.log(item.loyaltyPoints),
                  <tr key={i}>
                    <td className="px-4 py-3 text-left">{item.name}</td>
                    <td className="px-4 py-3 text-left">{item.phone}</td>
                    <td className="px-4 py-3 text-left">
                      <CapacityBar value={item.loyaltyPoints} max={100} />
                    </td>
                    <td className="px-4 py-3 text-left">{item.lastVisit && item.lastVisit.toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Link href={`/views/clients/${item.id}/edit`}>
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