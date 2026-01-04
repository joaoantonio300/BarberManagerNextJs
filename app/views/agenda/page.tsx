import React from "react";
import Layout from "@/components/Layout";

type Props = {};

const data = [
  { professional: "João Pedro", nome: "Carlos",  horario: "09:00", servico: "Corte Degradê" },
  { professional: "João Pedro", nome: "Marcos",  horario: "09:30", servico: "Corte Social" },
  { professional: "João Pedro", nome: "Lucas",   horario: "10:00", servico: "Barba Completa" },
  { professional: "João Pedro", nome: "Rafael", horario: "10:30", servico: "Corte + Barba" },
  { professional: "João Pedro", nome: "André",  horario: "11:00", servico: "Corte Degradê" },
  { professional: "Joalisson", nome: "Bruno",   horario: "09:00", servico: "Corte Social" },
  { professional: "Joalisson", nome: "Diego",   horario: "09:30", servico: "Corte Degradê" },
  { professional: "Joalisson", nome: "Matheus", horario: "10:00", servico: "Barba Desenhada" },
  { professional: "Joalisson", nome: "Renan",   horario: "10:30", servico: "Corte + Barba" },
  { professional: "Joalisson", nome: "Gustavo", horario: "11:00", servico: "Corte Social" },
  { professional: "Lucas Almeida", nome: "Pedro",   horario: "13:00", servico: "Corte Degradê" },
  { professional: "Lucas Almeida", nome: "Thiago",  horario: "13:30", servico: "Barba Completa" },
  { professional: "Lucas Almeida", nome: "Henrique",horario: "14:00", servico: "Corte Social" },
  { professional: "Lucas Almeida", nome: "Eduardo", horario: "14:30", servico: "Corte + Barba" },
  { professional: "Lucas Almeida", nome: "Igor",    horario: "15:00", servico: "Corte Degradê" },
];


const page = (props: Props) => {
  return (
    <Layout>
      <div>
        <div>
          <h1>Agendamentos</h1>
          <p>Gerenciamento de agendamentos</p>
        </div>
        <div>
          {data && data.map((item) => (
            
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default page;
