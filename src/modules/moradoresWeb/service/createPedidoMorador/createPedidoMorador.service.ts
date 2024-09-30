import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { CreatePedidoInput } from "./createPedidoMorador.Dto";

const id_usua = localStorage.getItem("@id_usua");
class CreatePedidoService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(params: CreatePedidoInput): Promise<void> {
    await this.api.post(`/pedidos?moradorId=${id_usua}`, params);
  }
}

const createPedidoMorador = new CreatePedidoService(http);

export { createPedidoMorador };
