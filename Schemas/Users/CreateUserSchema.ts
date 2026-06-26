import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(4, "A senha deve ter pelo menos 4 caracteres"),
  phone: z.string().regex(/^\d+$/, "Apenas números são permitidos").min(9, "Telefone inválido"),
  avatarUrl: z.string("Foto inválida").optional(),
});


export type CreateUserDTO = z.infer<typeof CreateUserSchema>;

// i can use nao createuserdto.parse(data)
// the parsesafe can show me the message of sucessfuly or error
// i can use safeParseAsync too in the case of async validation
