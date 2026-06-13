import React from "react";
import Layout from "@/components/Layout";
import AppointmentForm from "@/components/agenda/AppointmentForm";

async function getData() {
  const clients = [
    { nome: "Carlos", phone: "11999990000", loyaltyPoints: 10, lastVisit: "2023-12-10" },
    { nome: "Marcos", phone: "11988887777", loyaltyPoints: 5, lastVisit: "2023-12-11" },
  ];
  const services = [
    { name: "Corte de Cabelo", code: "COR" },
    { name: "Barba", code: "BAR" },
  ];
  const professionals = [
    { name: "Mestre Navalha", code: "P1" },
    { name: "Doutor Tesoura", code: "P2" },
  ];

  return { clients, services, professionals };
}

export default async function Page() {
  const data = await getData();

  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-100">Editar Apontamento</h2>
          <p className="text-zinc-400 text-sm mt-1">
            Edite algum agendamento de um serviço.
          </p>
        </div>

        <AppointmentForm 
            clients={data.clients} 
            services={data.services} 
            professionals={data.professionals} 
        />
      </div>
    </Layout>
  );
}