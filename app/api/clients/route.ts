import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CreateClientSchema } from "@/Schemas/Clients/CreateClientSchema";
import { ClientRepository } from "@/repository/ClientsRepository";
import { ClientService } from "@/services/ClientService";
import { ok, fail } from "@/helpers/http";

// It was created by use directly the functions
const service = new ClientService();
const repository = new ClientRepository();

export async function GET() {
  try {
    const clients = await repository.list();

    if(clients == null) {
      return fail("Nenhum cliente encontrado", 404);
    }

    return ok(clients);
  } catch (error: any) {
    return fail(error.message || "Erro interno ao listar clientes", 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = CreateClientSchema.safeParse(body);

    if (!parsed.success) {
      return fail(
        "Dados inválidos",
        400,
        parsed.error.flatten().fieldErrors
      );
    }

    const client = await service.create(parsed.data);
    return ok(client, 201);

  } catch (error: any) {
    if (error.message === "NUMBER_ALREADY_EXISTS") {
      return fail("Numero já está em uso", 409);
    }

    return fail("Erro interno ao criar usuário", 500);
  }
}

