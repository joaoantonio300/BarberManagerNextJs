import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { UpdateAppointmentSchema } from "@/Schemas/Appointments/UpdateAppointmentSchema";
import { AppointmentsRepository } from "@/repository/AppointmentsRepository";
import { ok, fail, validationFail } from "@/helpers/http";

const repository = new AppointmentsRepository();

export async function PUT(
  req: NextRequest,
  { params } : { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (id == null) {
      return fail("ID do agendamento é obrigatório", 400);
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return fail("ID do agendamento inválido", 400);
    }

    const body = await req.json();
    const parsed = UpdateAppointmentSchema.safeParse(body);

    if (!parsed.success) {
      return validationFail(parsed.error);
    }

    const updated = await repository.update(idNumber, parsed.data);
    return ok(updated);

  } catch (error: any) {
    return fail("Erro interno ao atualizar agendamento", 500);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (id == null) {
      return fail("ID do agendamento é obrigatório", 400);
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return fail("ID do agendamento inválido", 400);
    }

    await repository.delete(idNumber);
    return ok("Agendamento excluído com sucesso");

  } catch (error: any) {
    return fail("Erro interno ao excluir agendamento", 500);
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { professional } = body;

    if (!id) {
      return fail("ID do agendamento é obrigatório", 400);
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return fail("ID do agendamento inválido", 400);
    }

    if (!professional) {
      return fail("Profissional é obrigatório", 400);
    }

    const user = await prisma.user.findFirst({
      where: {
        name: {
          equals: professional,
          mode: "insensitive"
        }
      }
    });

    if (!user) {
      return fail(`Profissional '${professional}' não encontrado`, 404);
    }

    const updated = await repository.update(idNumber, {
      userId: user.id
    });

    return ok(updated);

  } catch (error: any) {
    return fail(error.message || "Erro interno ao atualizar profissional do agendamento", 500);
  }
}
