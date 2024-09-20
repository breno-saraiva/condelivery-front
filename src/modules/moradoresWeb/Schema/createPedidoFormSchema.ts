import { z } from "zod";

const createFormSchemaEmpresas = z.object({
  prataform: z.string(),
  pedido: z.string(),
  pevisão: z.string(),
  endereço: z.string(),
});

export { createFormSchemaEmpresas };
