import prisma from "@/lib/prisma";
import { UpdateAppointmentDTO } from "@/Schemas/Appointments/UpdateAppointmentSchema";
import { CreateAppointmentDTO } from "@/Schemas/Appointments/CreateAppointmentSchema";

export class AppointmentsRepository {
  list() {
    return prisma.appointment.findMany({
      where: { isActive: true },
      include: {
        service: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          }
        },
        client: true,
      },
    });
  }

  create(data: CreateAppointmentDTO) {
    return prisma.appointment.create({
      data: {
        date: data.date,
        status: data.status,
        serviceId: data.serviceId,
        userId: data.userId,
        clientId: data.clientId,
      },
      include: {
        service: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          }
        },
        client: true,
      },
    });
  }

  update(id: string, data: UpdateAppointmentDTO) {
    return prisma.appointment.update({
      where: { id },
      data,
      include: {
        service: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          }
        },
        client: true,
      },
    });
  }

  delete(id: string) {
    return prisma.appointment.delete({
      where: { id },
    });
  }

  findById(id: string) {
    return prisma.appointment.findUnique({
      where: { id },
      include: {
        service: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          }
        },
        client: true,
      },
    });
  }
}
