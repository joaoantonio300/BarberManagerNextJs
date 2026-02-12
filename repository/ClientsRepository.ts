import prisma from "@/lib/prisma";
import {UpdateClientDTO } from "@/Schemas/Clients/UpdateClientSchema";
import { CreateClientDTO } from "@/Schemas/Clients/CreateClientSchema";

export class ClientRepository {
  list() {
    return prisma.client.findMany({
      select: {
        id: true,
        name: true,
        phone: true,
        avatarUrl: true,
      },
    });
  }

  create(data: CreateClientDTO) {
    return prisma.client.create({
      data,
      select: {
        id: true,
        name: true,
        phone: true,
        avatarUrl: true,
      },
    });
  }

  update(id: string, data: UpdateClientDTO) {
    return prisma.client.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        phone: true,
        avatarUrl: true,
      },
    });
  }

  findById(id: string) {
    return prisma.client.findUnique({ where: { id } });
  }

  findByName(name: string) {
    return prisma.client.findMany({ where: { name } });
  }

  findByNumber(phone: string) {
    return prisma.client.findUnique({ where: { phone } });
  }
}
