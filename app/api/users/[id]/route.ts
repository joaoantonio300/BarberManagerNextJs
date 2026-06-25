import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { CreateUserSchema } from "@/Schemas/CreateUserSchema";
import { Prisma } from "@/app/generated/prisma/client";

export async function GET(req: NextRequest) {
  try {
  } catch (error) { }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await params;

    if (id == null) {
      return NextResponse.json({ error: "ID do usuário é obrigatório" }, { status: 400 });
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return NextResponse.json({ error: "ID do usuário inválido" }, { status: 400 });
    }

    const body = await req.json();
    const { avatarUrl, ...updateData } = body;

    const updateUser = await prisma.user.update({
      where: { id: idNumber },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
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
    if (id == null) {
      return NextResponse.json({ error: "ID do usuário é obrigatório" }, { status: 400 });
    }

    const idNumber = Number(id);
    if (isNaN(idNumber)) {
      return NextResponse.json({ error: "ID do usuário inválido" }, { status: 400 });
    }

    await prisma.user.delete({
      where: { id: idNumber },
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
