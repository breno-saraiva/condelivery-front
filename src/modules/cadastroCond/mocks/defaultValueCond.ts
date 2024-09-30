import { z } from "zod";
import { createCondominioSchema } from "../schema/createCondominioSchema";

const defaultValueFormCreateCondominio: z.infer<typeof createCondominioSchema> =
  {
    nome: "",
    cnpj: "",
    nome_adm: "",
    cpf_adm: "",
    email_adm: "",
    celular_adm: "",
    senha_adm: "",
    bairro: "",
    cep: "",
    complemento: "",
    estado: "",
    logradouro: "",
    municipio: "",
    numero: "",
  };

export { defaultValueFormCreateCondominio };
