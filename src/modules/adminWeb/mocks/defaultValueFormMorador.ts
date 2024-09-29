import { z } from "zod";
import { createFormSchemaMorador } from "../schema/createMoradorFormSchema";

const defaultValueFormAddMorador: z.infer<typeof createFormSchemaMorador> = {
  nome: "",
  cpf: "",
  telefone: "",
  email: "",
  date_nasc: "",
  unidade: "",
};

export { defaultValueFormAddMorador };
