import { z } from "zod";

const editFormSchemaMorador = z.object({
  _id: z.string(),
  nome: z.string(),
  cpf: z.string(),
  celular: z.string(),
  email: z.string(),
  data_nascimento: z.string(),
  unidade: z.string(),
  senha: z.string(),
});

export { editFormSchemaMorador };
