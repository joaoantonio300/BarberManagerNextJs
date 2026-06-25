import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { UpdateClientSchema } from "@/Schemas/Clients/UpdateClientSchema";
import { ClientRepository } from "@/repository/ClientsRepository";
import { ok, fail } from "@/helpers/http";

const repository = new ClientRepository();

export async function PUT(
  req: NextRequest,
  { params } : { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (id == null) {
      return fail("ID do cliente é obrigatório", 400);
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return fail("ID do cliente inválido", 400);
    }

    const body = await req.json();
    const parsed = UpdateClientSchema.safeParse(body);

    if (!parsed.success) {
      return fail("Dados inválidos", 400, parsed.error.flatten().fieldErrors);
    }

    const updateClient = await repository.update(idNumber, parsed.data);

    return ok(updateClient);

  } catch (error: any) {

    return fail( "Erro interno ao atualizar cliente", 500);

  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (id == null) {
      return fail("ID do cliente é obrigatório", 400);
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return fail("ID do cliente inválido", 400);
    }

    const client = await repository.findById(idNumber);

    if(!client) {
      return fail("Cliente não encontrado", 404);
    }

    await repository.delete(idNumber);

    return ok("Cliente excluído com sucesso");

  } catch (error: any) {
    return fail("Erro interno ao excluir cliente", 500);
  }
}