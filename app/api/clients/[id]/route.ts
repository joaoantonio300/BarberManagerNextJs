import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { UpdateClientSchema } from "@/Schemas/Clients/UpdateClientSchema";
import { ClientRepository } from "@/repository/ClientsRepository";
import { ok, fail } from "@/helpers/http";

const repository = new ClientRepository();

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = UpdateClientSchema.safeParse(body);

    if (!parsed.success) {
      return fail("Dados inválidos", 400, parsed.error.flatten().fieldErrors);
    }

    if (id == null) {
      return fail("ID do cliente é obrigatório", 400);
    }

    const updateClient = await repository.update(id, parsed.data);

    return ok(updateClient);

  } catch (error: any) {

    return fail( "Erro interno ao atualizar cliente", 500);

  }
}
