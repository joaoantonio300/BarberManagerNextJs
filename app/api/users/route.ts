import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CreateUserSchema } from "@/Schemas/CreateUserSchema";
import { ok, fail, validationFail } from "@/helpers/http";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        isActive: true,
      },
    });

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
    
    const user = await prisma.user.create({
      data: userData,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      }
    });

    return ok(user, 201);

  } catch (error: any) {
    return fail("Erro interno ao criar usuário", 500);
  }
}
