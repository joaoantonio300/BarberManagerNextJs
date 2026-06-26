import prisma from "@/lib/prisma";
import { CreateServiceDTO } from "@/Schemas/Services/CreateServiceSchema";
import { UpdateServiceDTO } from "@/Schemas/Services/UpdateServiceSchema";

export class ServicesRepository {
  list() {
    return prisma.service.findMany({
      select: {
        id: true,
        name: true,
        duration: true,
        price: true,
        isActive: true,
      },
    });
  }

  create(data: CreateServiceDTO) {
    return prisma.service.create({
      data,
      select: {
        id: true,
        name: true,
        duration: true,
        price: true,
        isActive: true,
      },
    });
  }

  update(id: number, data: UpdateServiceDTO) {
    return prisma.service.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        duration: true,
        price: true,
        isActive: true,
      },
    });
  }

  delete(id: number) {
    return prisma.service.delete({ where: { id } });
  }

  findById(id: number) {
    return prisma.service.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        duration: true,
        price: true,
        isActive: true,
      },
    });
  }
}
