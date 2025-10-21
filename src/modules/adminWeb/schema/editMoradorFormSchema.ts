import { z } from "zod";

const editFormSchemaMorador = z.object({
  id: z.string(),
  nome: z.string(),
  cpf: z.string(),
  celular: z.string(),
  email: z.string(),
  dataNascimento: z.string(),
  unidade: z.string(),
  senha: z.string(),
});

export { editFormSchemaMorador };
