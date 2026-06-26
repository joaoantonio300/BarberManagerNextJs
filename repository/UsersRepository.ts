import prisma from "@/lib/prisma";
import { CreateUserDTO } from "@/Schemas/Users/CreateUserSchema";
import { UpdateUserDTO } from "@/Schemas/Users/UpdateUserSchema";

export class UsersRepository {
  list() {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        isActive: true,
      },
    });
  }

  create(data: CreateUserDTO) {
    return prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        isActive: true,
      },
    });
  }

  update(id: number, data: UpdateUserDTO) {
    return prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        isActive: true,
      },
    });
  }

  delete(id: number) {
    return prisma.user.delete({ where: { id } });
  }

  findById(id: number) {
    return prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        isActive: true,
      },
    });
  }

  findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }
}
