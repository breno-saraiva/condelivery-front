import { z } from "zod";
import { editFormSchemaMorador } from "../schema/editMoradorFormSchema";

const defaultValueEditMorador: z.infer<typeof editFormSchemaMorador> = {
  _id: "",
  nome: "",
  cpf: "",
  celular: "",
  email: "",
  data_nascimento: "",
  unidade: "",
  senha: "",
};

export { defaultValueEditMorador };
