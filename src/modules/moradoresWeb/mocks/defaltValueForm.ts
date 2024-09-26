import { z } from "zod";
import { createFormSchemaEmpresas } from "../Schema/createPedidoFormSchema";

const defaultValueFormPedido: z.infer<typeof createFormSchemaEmpresas> = {
  prataform: "",
  pedido: "",
  pevisão: "",
  endereço: "",
};

export { defaultValueFormPedido };
