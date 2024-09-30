import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { EditPedido } from "./editStatus.Dto";

class PutPedidoService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(params: EditPedido): Promise<void> {
    await this.api.put(`/pedidos/${params._id}`, {
      status: params.status,
    });
  }
}

const editPedidoService = new PutPedidoService(http);
export { editPedidoService };
