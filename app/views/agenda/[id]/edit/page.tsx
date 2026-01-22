import React from "react";
import Layout from "@/components/Layout";
import AppointmentForm from "@/components/agenda/AppointmentForm";

async function getData() {

  const people = [
    { name: "Carlos", code: "CAR" },
    { name: "Marcos", code: "MAR" },
  ];
  const services = [
    { name: "Corte de Cabelo", code: "COR" },
    { name: "Barba", code: "BAR" },
  ];
  const professionals = [
    { name: "Mestre Navalha", code: "P1" },
    { name: "Doutor Tesoura", code: "P2" },
  ];

  return { people, services, professionals };
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
            people={data.people} 
            services={data.services} 
            professionals={data.professionals} 
        />
      </div>
    </Layout>
  );
}