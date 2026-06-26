import { z } from "zod";

export const CreateServiceSchema = z.object({
  name: z.string().min(3, "O nome do serviço deve ter pelo menos 3 caracteres"),
  duration: z.coerce.number().int("A duração deve ser um número inteiro").positive("A duração deve ser positiva"),
  price: z.coerce.number().positive("O preço deve ser positivo"),
});

export type CreateServiceDTO = z.infer<typeof CreateServiceSchema>;
