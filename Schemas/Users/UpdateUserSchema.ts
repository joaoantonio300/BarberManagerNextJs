import { z } from "zod";

export const UpdateUserSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").optional(),
  email: z.string().email("Email inválido").optional(),
  password: z.string().min(4, "A senha deve ter pelo menos 4 caracteres").optional(),
  phone: z.string().regex(/^\d+$/, "Apenas números são permitidos").min(9, "Telefone inválido").optional(),
  avatarUrl: z.string("Foto inválida").optional(),
  isActive: z.boolean().optional(),
});

export type UpdateUserDTO = z.infer<typeof UpdateUserSchema>;
