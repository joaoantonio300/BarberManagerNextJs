import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CreateUserSchema } from "@/Schemas/CreateUserSchema";
import { ClientRepository } from "@/repository/ClientsRepository";
import { ClientService } from "@/services/ClientService";
import { ok, fail } from "@/helpers/http";

// It was created by use directly the functions
const service = new ClientService();
const repository = new ClientRepository();

export async function GET() {
  try {
    
    const users = await repository.list();

    return ok(users);
  } catch (error) {
    return fail("Erro ao buscar usuários", 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = CreateUserSchema.safeParse(body);

    if (!parsed.success) {
      return fail(
        "Dados inválidos",
        400,
        parsed.error.flatten().fieldErrors
      );
    }

    const user = await service.create(parsed.data);
    return ok(user, 201);

  } catch (error: any) {
    if (error.message === "NUMBER_ALREADY_EXISTS") {
      return fail("Numero já está em uso", 409);
    }

    return fail("Erro interno ao criar usuário", 500);
  }
}

