import { NextRequest } from "next/server";
import { UpdateServiceSchema } from "@/Schemas/Services/UpdateServiceSchema";
import { ServicesRepository } from "@/repository/ServicesRepository";
import { ok, fail, validationFail } from "@/helpers/http";

const repository = new ServicesRepository();

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (id == null) {
      return fail("ID do serviço é obrigatório", 400);
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return fail("ID do serviço inválido", 400);
    }

    const body = await req.json();
    const parsed = UpdateServiceSchema.safeParse(body);

    if (!parsed.success) {
      return validationFail(parsed.error);
    }

    const service = await repository.findById(idNumber);
    if (!service) {
      return fail("Serviço não encontrado", 404);
    }

    const updateService = await repository.update(idNumber, parsed.data);
    return ok(updateService);

  } catch (error) {
    return fail("Erro interno ao atualizar serviço", 500);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (id == null) {
      return fail("ID do serviço é obrigatório", 400);
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return fail("ID do serviço inválido", 400);
    }

    const service = await repository.findById(idNumber);
    if (!service) {
      return fail("Serviço não encontrado", 404);
    }

    await repository.delete(idNumber);
    return ok("Serviço deletado com sucesso");

  } catch (error) {
    return fail("Erro interno ao deletar serviço", 500);
  }
}
