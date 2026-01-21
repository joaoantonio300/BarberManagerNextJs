import Layout from "@/components/Layout";
import CardValue from "@/components/CardValue";
import ServicesCards from "@/components/financial/ServicesCards";
import { Button } from "primereact/button";
import Link from "next/link";

const page = () => {
  const worth = "R$ 1.254";
  const newClients = "R$ 24.890";
  const appointments = "R$ 87";

  const servicos = [
    { servico: "Corte Degradê", valor: 35, duracaoMin: 40 },
    { servico: "Barba", valor: 25, duracaoMin: 25 },
    { servico: "Corte Social", valor: 30, duracaoMin: 35 },
    { servico: "Corte + Barba", valor: 55, duracaoMin: 60 },
    { servico: "Barba Completa", valor: 30, duracaoMin: 30 },
    { servico: "Corte Navalhado", valor: 40, duracaoMin: 45 },
    { servico: "Corte Infantil Masculino", valor: 25, duracaoMin: 30 },
  ];

  return (
    <Layout>
      <div className="w-full">
        <div>
          <h1 className="font-bold text-4xl">Financeiro e Serviços</h1>
          <p className="text-zinc-400">Gerencie seus custos e serviços</p>
        </div>
        <div className="flex flex-row gap-4 mb-4">
          <CardValue
            label="Hoje"
            value={worth}
            icon="pi-dollar"
            increase={10}
            color="#AA612C"
            backgroundColor="#ii36261A"
          />
          <CardValue
            label="Faturamento do mês"
            value={newClients}
            icon="pi pi-chart-line"
            increase={10}
            color="#233B5C"
            backgroundColor="#171C22"
          />
          <CardValue
            label="Média Serviço"
            value={appointments}
            icon="pi-credit-card"
            increase={10}
            color="yellow"
            backgroundColor="rgba(255, 140, 0, 0.15)"
          />
        </div>
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-row justify-between">
              <h1 className="font-bold">Serviços</h1>
              <Link href="/views/clients/create">
                <Button
                  label="Create"
                  icon="pi pi-plus"
                  size="small"
                  className="bg-[#d4a873]! hover:bg-[#b88e5e]! text-black! border-none!"
                />
              </Link>
            </div>
           <div className="bg-[#121212] p-2 mt-3 rounded-lg">
             {servicos?.map((item, i) => (
              <ServicesCards
                key={i}
                servico={item.servico}
                valor={item.valor}
                duracaoMin={item.duracaoMin}
              />
            ))}
           </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
