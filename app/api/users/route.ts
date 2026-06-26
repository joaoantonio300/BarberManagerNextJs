import { NextRequest, NextResponse } from "next/server";
import { CreateUserSchema } from "@/Schemas/Users/CreateUserSchema";
import { ok, fail, validationFail } from "@/helpers/http";
import { UsersRepository } from "@/repository/UsersRepository";

const repository = new UsersRepository();

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
      return validationFail(parsed.error);
    }

    const userData = parsed.data;
    
    const existingEmail = await repository.findByEmail(userData.email);
    if (existingEmail) {
      return fail("Email já está em uso", 409);
    }

    const user = await repository.create(userData);

    return ok(user, 201);

  } catch (error: any) {
    return fail("Erro interno ao criar usuário", 500);
  }
}
