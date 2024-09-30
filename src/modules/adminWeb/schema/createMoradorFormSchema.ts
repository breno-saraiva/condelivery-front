import { z } from "zod";

const createFormSchemaMorador = z.object({
  nome: z.string(),
  cpf: z.string(),
  telefone: z.string(),
  email: z.string(),
  date_nasc: z.string(),
  unidade: z.string(),
  senha: z.string(),
});

export { createFormSchemaMorador };
