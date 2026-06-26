import { NextRequest } from "next/server";
import { CreateServiceSchema } from "@/Schemas/Services/CreateServiceSchema";
import { ok, fail, validationFail } from "@/helpers/http";
import { ServicesRepository } from "@/repository/ServicesRepository";

const repository = new ServicesRepository();

export async function GET() {
  try {
    const services = await repository.list();
    return ok(services);
  } catch (error) {
    return fail("Erro interno ao buscar serviços", 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = CreateServiceSchema.safeParse(body);

    if (!parsed.success) {
      return validationFail(parsed.error);
    }

    const service = await repository.create(parsed.data);

    return ok(service, 201);
  } catch (error: any) {
    return fail("Erro interno ao criar serviço", 500);
  }
}
