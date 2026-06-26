import { z } from "zod";

export const CreateClientSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  password: z.string().min(4, "A senha deve ter pelo menos 4 caracteres"),
  phone: z.string().regex(/^\d+$/, "Apenas números são permitidos").min(9, "Telefone inválido"),
   avatarUrl: z.string("Foto inválida").optional(),
});

export type CreateClientDTO = z.infer<typeof CreateClientSchema>;

