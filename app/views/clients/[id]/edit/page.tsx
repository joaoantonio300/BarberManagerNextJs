import React from "react";
import Layout from "@/components/Layout";
import ClientForm from "@/components/clients/ClientForm";

async function getData() {
  const clients = [
    { 
      nome: "Carlos Silva", 
      phone: "(79) 99999-1234", 
      loyaltyPoints: 150, 
      lastVisit: "2023-12-20" 
    },
    { 
      nome: "Marcos Oliveira", 
      phone: "(79) 98888-5678", 
      loyaltyPoints: 40, 
      lastVisit: "2024-01-05" 
    },
    { 
      nome: "Ana Souza", 
      phone: "(79) 97777-4321", 
      loyaltyPoints: 320, 
      lastVisit: "2024-01-10" 
    },
  ];

  const services = [
    { name: "Corte de Cabelo", code: "COR" },
    { name: "Barba", code: "BAR" },
    { name: "Corte + Barba", code: "COMBO" },
    { name: "Sobrancelha", code: "SOB" },
  ];

  const professionals = [
    { name: "Mestre Navalha", code: "P1" },
    { name: "Doutor Tesoura", code: "P2" },
    { name: "Barbeiro João", code: "P3" },
  ];

  return { clients, services, professionals };
}

export default async function Page() {
  const data = await getData();

  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-100">Novo Apontamento</h2>
          <p className="text-zinc-400 text-sm mt-1">
            Preencha os dados abaixo para agendar um serviço.
          </p>
        </div>
        <ClientForm 
            clients={data.clients} 
            services={data.services} 
            professionals={data.professionals} 
        />
      </div>
    </Layout>
  );
}