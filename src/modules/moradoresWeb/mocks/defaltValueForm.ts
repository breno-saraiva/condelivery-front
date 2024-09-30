import { z } from "zod";
import { createFormSchemaEmpresas } from "../Schema/createPedidoFormSchema";

const defaultValueFormPedido: z.infer<typeof createFormSchemaEmpresas> = {
  plataforma: "",
  descricao: "",
  previsao_chegada: "",
  local_entrega: "",
};

export { defaultValueFormPedido };
