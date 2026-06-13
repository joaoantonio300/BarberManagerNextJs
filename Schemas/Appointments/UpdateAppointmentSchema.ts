import { z } from "zod";

export const UpdateAppointmentSchema = z.object({
  date: z.coerce.date().optional(),
  status: z.enum(["SCHEDULED", "COMPLETED", "COMPLETED_LATE", "CANCELED", "NO_SHOW"]).optional(),
  serviceId: z.string().uuid("ID de serviço inválido").optional(),
  userId: z.string().uuid("ID de usuário inválido").optional(),
  clientId: z.string().uuid("ID de cliente inválido").optional(),
});

export type UpdateAppointmentDTO = z.infer<typeof UpdateAppointmentSchema>;
