import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { PedidosMorador } from "./ListPedidosMorador.Dto";

class GetPedidosMoradoresService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(id_usua: string): Promise<PedidosMorador[]> {
    const result = await this.api.get(`/pedidos/${id_usua}`);
    return result.data;
  }
}

const getPedidosMoradoresService = new GetPedidosMoradoresService(http);
export { getPedidosMoradoresService };
