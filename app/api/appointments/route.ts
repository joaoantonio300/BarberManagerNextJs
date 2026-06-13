import { NextRequest } from "next/server";
import { CreateAppointmentSchema } from "@/Schemas/Appointments/CreateAppointmentSchema";
import { AppointmentsRepository } from "@/repository/AppointmentsRepository";
import { AppointmentService } from "@/services/AppointmentService";
import { ok, fail } from "@/helpers/http";

const service = new AppointmentService();
const repository = new AppointmentsRepository();

export async function GET() {
  try {
    const appointments = await repository.list();

    if (appointments == null || appointments.length === 0) {
      return fail("Nenhum agendamento encontrado", 404);
    }

    return ok(appointments);
  } catch (error: any) {
    return fail(error.message || "Erro interno ao listar agendamentos", 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = CreateAppointmentSchema.safeParse(body);

    if (!parsed.success) {
      return fail(
        "Dados inválidos",
        400,
        parsed.error.flatten().fieldErrors
      );
    }

    const appointment = await service.create(parsed.data);
    return ok(appointment, 201);

  } catch (error: any) {
    return fail(error.message || "Erro interno ao criar agendamento", 500);
  }
}
