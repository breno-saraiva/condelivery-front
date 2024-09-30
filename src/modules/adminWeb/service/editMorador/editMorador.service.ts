import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { EditMoradoresInput } from "./editMorador.dto";

class PutMoradoresService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(params: EditMoradoresInput): Promise<void> {
    await this.api.put(`/moradores/${params._id}`, {
      nome: params.nome,
      cpf: params.cpf,
      celular: params.celular,
      email: params.email,
      data_nascimento: params.data_nascimento,
      unidade: params.unidade,
      eh_entregador: params.eh_entregador,
      senha: params.senha,
    });
  }
}

const editMoradoresService = new PutMoradoresService(http);
export { editMoradoresService };
