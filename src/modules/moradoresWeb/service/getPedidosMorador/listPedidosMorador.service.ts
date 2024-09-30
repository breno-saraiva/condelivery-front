import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { ListPedidosMoradorOutput } from "./ListPedidosMorador.Dto";

const id_usua = String(localStorage.getItem("@id_usua"));

class GetPedidosMoradoresService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(): Promise<ListPedidosMoradorOutput> {
    const result = await this.api.get(`/moradores/${id_usua}`);
    return result.data;
  }
}

const getPedidosMoradoresService = new GetPedidosMoradoresService(http);
export { getPedidosMoradoresService };
