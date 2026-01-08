import Layout from "@/components/Layout";
import CardValue from "@/components/CardValue";
import Dashboard from "@/components/dasboard/Graphic";
import AppointmenstCards from "@/components/AppointmenstCards";

const page = () => {
  const worth = 10;
  const newClients = 50;
  const appointments = 100;
  // dados de teste
  const data = [
    { nome: "João", horario: "09:00", servico: "Corte Degradê" },
    { nome: "Carlos", horario: "09:30", servico: "Barba" },
    { nome: "Pedro", horario: "10:00", servico: "Corte Social" },
    { nome: "Lucas", horario: "10:30", servico: "Corte + Barba" },
    { nome: "Rafael", horario: "11:00", servico: "Corte Degradê" },
    { nome: "Diego", horario: "11:30", servico: "Barba Completa" },
    { nome: "Bruno", horario: "13:00", servico: "Corte Navalhado" },
    { nome: "Thiago", horario: "13:30", servico: "Corte + Barba" },
    { nome: "André", horario: "14:00", servico: "Corte Social" },
    { nome: "Felipe", horario: "14:30", servico: "Corte Degradê" },
    { nome: "Matheus", horario: "15:00", servico: "Barba" },
    { nome: "Gustavo", horario: "15:30", servico: "Corte Infantil Masculino" },
  ];

  return (
    <Layout>
      <div className="w-full">
        <h1 className="font-bold text-4xl">Dashboard</h1>
        <p className="text-zinc-400">Visão geral do seu negócio</p>
        <div className="flex flex-row gap-4 mb-4">
          <CardValue
            label="Faturamento"
            value={worth}
            icon="pi-wallet"
            increase={10}
            color="#AA612C"
            backgroundColor="#ii36261A"
          />
          <CardValue
            label="Novos Clientes"
            value={newClients}
            icon="pi-users"
            increase={10}
            color="#233B5C"
            backgroundColor="#171C22"
          />
          <CardValue
            label="Agendamentos"
            value={appointments}
            icon="pi-dollar"
            increase={10}
            color="yellow"
            backgroundColor="rgba(255, 140, 0, 0.15)"
          />
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-1/2">
            <h1 className="font-bold">Pontualidade dos Clientes</h1>
            <Dashboard />
          </div>
          <div className="w-1/2">
            <h1 className="font-bold">Agenda de Hoje</h1>
            {data &&
              data.map((item, i) => (
                <AppointmenstCards
                  key={i}
                  nome={item.nome}
                  horario={item.horario}
                  servico={item.servico}
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
