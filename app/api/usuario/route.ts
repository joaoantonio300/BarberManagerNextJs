import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CreateUserSchema } from "@/Schemas/CreateUserSchema";
import { Prisma } from "@/app/generated/prisma/client";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        avatarUrl: true,
        role: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { errors: "Erro ao busca usuário" + error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {

  try {
    const body = await req.json();
    const validationResult = CreateUserSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Dados inválidos",
          error: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const validadedData = validationResult.data;
    const newUser = await prisma.user.create({
      data: validadedData as Prisma.UserCreateInput,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        avatarUrl: true,
      },
    });

    return NextResponse.json(newUser, { status: 201 });

  } catch (error: any) {

    return NextResponse.json(
      { error: "Ocorreu um erro ao criar seu usuário" },
      { status: 500 }
    );
  }
}
