import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { CreatePedidoInput } from "./createPedidoMorador.Dto";

class CreatePedidoService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(params: CreatePedidoInput, id_usua: string): Promise<void> {
    await this.api.post(`/pedidos?moradorId=${id_usua}`, params);
  }
}

const createPedidoMorador = new CreatePedidoService(http);

export { createPedidoMorador };
