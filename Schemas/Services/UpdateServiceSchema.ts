import { z } from "zod";

export const UpdateServiceSchema = z.object({
  name: z.string().min(3, "O nome do serviço deve ter pelo menos 3 caracteres").optional(),
  duration: z.coerce.number().int("A duração deve ser um número inteiro").positive("A duração deve ser positiva").optional(),
  price: z.coerce.number().positive("O preço deve ser positivo").optional(),
  isActive: z.boolean().optional(),
});

export type UpdateServiceDTO = z.infer<typeof UpdateServiceSchema>;
