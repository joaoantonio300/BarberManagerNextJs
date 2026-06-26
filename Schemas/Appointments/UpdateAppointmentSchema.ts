import { z } from "zod";

export const UpdateAppointmentSchema = z.object({
  date: z.coerce.date({ message: "A data inserida é inválida" }).optional(),
  status: z.enum(["SCHEDULED", "COMPLETED", "COMPLETED_LATE", "CANCELED", "NO_SHOW"], { message: "status inválido" }).optional(),
  serviceId: z.coerce.number({ message: "ID de serviço inválido" }).int("ID de serviço inválido").optional(),
  userId: z.coerce.number({ message: "ID de usuário inválido" }).int("ID de usuário inválido").optional(),
  clientId: z.coerce.number({ message: "ID de cliente inválido" }).int("ID de cliente inválido").optional(),
});

export type UpdateAppointmentDTO = z.infer<typeof UpdateAppointmentSchema>;
