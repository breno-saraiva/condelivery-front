import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(6, "usuário precisa ter no mínimo 6 caracteres"),
  senha: z.string(),
});

export { loginSchema };
