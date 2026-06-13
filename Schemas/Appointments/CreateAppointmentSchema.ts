import { z } from "zod";

export const CreateAppointmentSchema = z.object({
  date: z.coerce.date({ message: "A data inserida é inválida" }),
  status: z.enum(["SCHEDULED", "COMPLETED", "COMPLETED_LATE", "CANCELED", "NO_SHOW"]).default("SCHEDULED"),
  serviceId: z.string().uuid("ID de serviço inválido"),
  userId: z.string().uuid("ID de usuário inválido"),
  clientId: z.string().uuid("ID de cliente inválido"),
});

export type CreateAppointmentDTO = z.infer<typeof CreateAppointmentSchema>;
