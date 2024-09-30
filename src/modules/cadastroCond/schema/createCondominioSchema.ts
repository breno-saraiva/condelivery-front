import { z } from "zod";

const createCondominioSchema = z.object({
  nome: z.string(),
  cnpj: z.string(),
  nome_adm: z.string(),
  cpf_adm: z.string(),
  email_adm: z.string(),
  celular_adm: z.string(),
  senha_adm: z.string(),
  bairro: z.string(),
  cep: z.string(),
  complemento: z.string(),
  estado: z.string(),
  logradouro: z.string(),
  municipio: z.string(),
  numero: z.string(),
});

export { createCondominioSchema };
