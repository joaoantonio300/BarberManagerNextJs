import React from "react";
import Layout from "@/components/Layout";
import ClientForm from "@/components/clients/ClientForm";

 type ClientData = {
  id: string;
  name: string;
  password: string;
  phone: string;
};


export default async function Page() {

  
  const initialData: ClientData = 
    { 
      id: "1",
      name: "Carlos Silva", 
      password: "123456",
      phone: "(79) 99999-1234", 
    }

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
            initialData={initialData} 
        />
      </div>
    </Layout>
  );
}