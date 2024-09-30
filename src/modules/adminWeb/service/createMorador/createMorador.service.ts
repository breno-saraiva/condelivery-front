import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { CreateMoradorInput } from "./createMorador.Dto";

const id_usua = String(localStorage.getItem("@id_usua"));

class CreateMoradorService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(params: CreateMoradorInput): Promise<void> {
    await this.api.post(`/moradores?condominioId=${id_usua}`, params);
  }
}

const createMorador = new CreateMoradorService(http);

export { createMorador };
