import { z } from "zod";
import { editFormSchemaMorador } from "../schema/editMoradorFormSchema";

const defaultValueEditMorador: z.infer<typeof editFormSchemaMorador> = {
  id: "",
  nome: "",
  cpf: "",
  celular: "",
  email: "",
  dataNascimento: "",
  unidade: "",
  senha: "",
};

export { defaultValueEditMorador };
