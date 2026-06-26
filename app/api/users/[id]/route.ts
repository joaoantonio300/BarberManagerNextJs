import { NextRequest } from "next/server";
import { UpdateUserSchema } from "@/Schemas/Users/UpdateUserSchema";
import { UsersRepository } from "@/repository/UsersRepository";
import { ok, fail, validationFail } from "@/helpers/http";

const repository = new UsersRepository();

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (id == null) {
      return fail("ID do usuário é obrigatório", 400);
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return fail("ID do usuário inválido", 400);
    }

    const body = await req.json();
    const parsed = UpdateUserSchema.safeParse(body);

    if (!parsed.success) {
      return validationFail(parsed.error);
    }

    const user = await repository.findById(idNumber);
    if (!user) {
      return fail("Usuário não encontrado", 404);
    }

    const updateUser = await repository.update(idNumber, parsed.data);
    return ok(updateUser);

  } catch (error) {
    return fail("Erro interno ao atualizar usuário", 500);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (id == null) {
      return fail("ID do usuário é obrigatório", 400);
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return fail("ID do usuário inválido", 400);
    }

    const user = await repository.findById(idNumber);
    if (!user) {
      return fail("Usuário não encontrado", 404);
    }

    await repository.delete(idNumber);
    return ok("Usuário deletado com sucesso");

  } catch (error) {
    return fail("Erro interno ao deletar usuário", 500);
  }
}
