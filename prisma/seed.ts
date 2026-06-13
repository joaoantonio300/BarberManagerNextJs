import { PrismaClient, Status } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import 'dotenv/config'

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  console.log(`Iniciando o seed...`);
  
  // Limpar tabelas para evitar duplicidades
  await prisma.notification.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.service.deleteMany();
  await prisma.client.deleteMany();
  await prisma.user.deleteMany();

  // 1. Criar Usuários (Barbeiros / Administradores)
  const user1 = await prisma.user.create({
    data: {
      name: "Carlos Barber",
      email: "admin@barbershop.com",
      password: "hashed_password_safe_here", // Em produção, usar bcrypt
      phone: "11999990000",
    }
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Mestre Navalha",
      email: "navalha@barbershop.com",
      password: "hashed_password_safe_here",
      phone: "11999990001",
    }
  });

  console.log(`Usuários criados.`);

  // 2. Criar Clientes
  const client1 = await prisma.client.create({
    data: {
      name: "João Silva",
      password: "password123",
      phone: "11988887777",
      avatarUrl: "https://github.com/shadcn.png",
      loyaltyPoints: 10,
    }
  });

  const client2 = await prisma.client.create({
    data: {
      name: "Marcos Ausente",
      password: "password123",
      phone: "21999998888",
      avatarUrl: null,
      loyaltyPoints: 0,
    }
  });

  console.log(`Clientes criados.`);

  // 3. Criar Serviços
  const serviceCabelo = await prisma.service.create({
    data: {
      name: "Corte de Cabelo",
      duration: 30,
      price: 35.00,
    }
  });

  const serviceBarba = await prisma.service.create({
    data: {
      name: "Barba",
      duration: 20,
      price: 25.00,
    }
  });

  const serviceCombo = await prisma.service.create({
    data: {
      name: "Corte de Cabelo + Barba",
      duration: 50,
      price: 50.00,
    }
  });

  const servicePezinho = await prisma.service.create({
    data: {
      name: "Pezinho",
      duration: 15,
      price: 15.00,
    }
  });

  console.log(`Serviços criados.`);

  // 4. Criar Agendamentos (Appointments)
  await prisma.appointment.create({
    data: {
      date: new Date('2023-12-10T14:00:00Z'),
      status: Status.COMPLETED,
      serviceId: serviceCombo.id,
      userId: user1.id,
      clientId: client1.id,
    }
  });

  await prisma.appointment.create({
    data: {
      date: new Date('2025-12-25T10:00:00Z'),
      status: Status.SCHEDULED,
      serviceId: serviceCabelo.id,
      userId: user1.id,
      clientId: client1.id,
    }
  });

  await prisma.appointment.create({
    data: {
      date: new Date('2023-11-01T15:00:00Z'),
      status: Status.NO_SHOW,
      serviceId: servicePezinho.id,
      userId: user2.id,
      clientId: client2.id,
    }
  });

  console.log(`Agendamentos criados.`);

  // 5. Criar Notificações para Clientes
  await prisma.notification.create({
    data: {
      title: "Bem-vindo!",
      message: "Obrigado por se cadastrar na nossa barbearia.",
      read: true,
      clientId: client1.id,
    }
  });

  await prisma.notification.create({
    data: {
      title: "Lembrete de Agendamento",
      message: "Seu corte é amanhã às 10:00.",
      read: false,
      clientId: client1.id,
    }
  });

  console.log(`Notificações criadas.`);
  console.log(`Seed finalizado com sucesso!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });