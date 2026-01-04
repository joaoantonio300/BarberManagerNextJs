import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CreateUserSchema } from "@/Schemas/CreateUserSchema";
import { Prisma } from "@/app/generated/prisma/client";

export async function GET(req: NextRequest) {
  try {
  } catch (error) {}
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const updateUser = await prisma.user.update({
      where: { id: String(id) },
      data: body,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        avatarUrl: true,
      },
    });

    return NextResponse.json(updateUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Ocorrreu um erro ao atualizar o usuário" },
      { status: 500 }
    );
  }
}

// ------------------
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.user.delete({
      where: { id: String(id) },
    });

    return NextResponse.json(
      { message: "Usuário deletado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Ocorrreu um erro ao deletar o usuário" },
      { status: 500 }
    );
  }
}
