import { PrismaClient, Prisma, Role, Status, Punctuality } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import 'dotenv/config'

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Carlos Barber",
    email: "admin@barbershop.com",
    password: "hashed_password_safe_here", // Em produção, use bcrypt/argon2
    phone: "11999990000",
    role: Role.ADMIN, 
    avatarUrl: "https://github.com/shadcn.png",
    notifications: {
      create: [
        {
          title: "Sistema Atualizado",
          message: "O sistema foi atualizado para a versão 2.0",
          read: false,
        }
      ]
    }
  },
  {
    name: "João Silva",
    email: "joao.client@gmail.com",
    password: "password123",
    phone: "11988887777",
    role: Role.CLIENT,
    loyaltyPoints: 10,
    appointments: {
      create: [
        {
          date: new Date('2023-12-10T14:00:00Z'),
          serviceType: "Corte de Cabelo + Barba",
          price: "50.00", 
          status: Status.COMPLETED,
          punctuality: Punctuality.ON_TIME,
          notes: "Cliente gosta da barba desenhada"
        },
        {
          date: new Date('2025-12-25T10:00:00Z'),
          serviceType: "Corte Social",
          price: "35.00",
          status: Status.SCHEDULED,
        }
      ]
    },
    notifications: {
      create: [
        {
          title: "Bem-vindo!",
          message: "Obrigado por se cadastrar na nossa barbearia.",
          read: true,
        },
        {
          title: "Lembrete de Agendamento",
          message: "Seu corte é amanhã às 10:00.",
          read: false,
        }
      ]
    }
  },
  {
    name: "Marcos Ausente",
    email: "marcos@email.com",
    password: "password123",
    phone: "21999998888",
    role: Role.CLIENT,
    loyaltyPoints: 0,
    appointments: {
      create: [
        {
          date: new Date('2023-11-01T15:00:00Z'),
          serviceType: "Pezinho",
          price: "15.00",
          status: Status.NO_SHOW,
          punctuality: Punctuality.ABSENT,
          notes: "Não avisou que não viria"
        }
      ]
    }
  }
];

export async function main() {
  console.log(`Iniciando o seed...`);
  
  // Opcional: Limpar o banco antes de popular (cuidado em produção!)
  // await prisma.notification.deleteMany();
  // await prisma.appointment.deleteMany();
  // await prisma.user.deleteMany();

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Usuário criado com id: ${user.id}`);
  }
  console.log(`Seed finalizado.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })