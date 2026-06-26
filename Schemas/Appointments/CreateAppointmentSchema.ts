import { z } from "zod";

export const CreateAppointmentSchema = z.object({
  date: z.coerce.date({ message: "A data inserida é inválida" }),
  status: z.enum(["SCHEDULED", "COMPLETED", "COMPLETED_LATE", "CANCELED", "NO_SHOW"], {message:"status inválido"}).default("SCHEDULED"),
  serviceId: z.coerce.number({ message: "ID de serviço inválido" }).int("ID de serviço inválido"),
  userId: z.coerce.number({ message: "ID de usuário inválido" }).int("ID de usuário inválido"),
  clientId: z.coerce.number({ message: "ID de cliente inválido" }).int("ID de cliente inválido"),
});

export type CreateAppointmentDTO = z.infer<typeof CreateAppointmentSchema>;
