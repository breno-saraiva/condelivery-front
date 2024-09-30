import { z } from "zod";

const createFormSchemaEmpresas = z.object({
  plataforma: z.string(),
  descricao: z.string(),
  previsao_chegada: z.string(),
  local_entrega: z.string(),
});

export { createFormSchemaEmpresas };
