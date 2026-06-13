import { z } from "zod";

export const UpdateClientSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").optional(),
    password: z.string().min(4, "A senha deve ter pelo menos 4 caracteres").optional(),
    avatarUrl: z.string("Foto inválida").optional(),
})

export type UpdateClientDTO = z.infer<typeof UpdateClientSchema>;