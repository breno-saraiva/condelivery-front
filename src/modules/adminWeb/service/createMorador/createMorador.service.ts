import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { CreateMoradorInput } from "./createMorador.Dto";

class CreateMoradorService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(params: CreateMoradorInput, id: string): Promise<void> {
    await this.api.post(`/moradores?condominioId=${id}`, params);
  }
}

const createMorador = new CreateMoradorService(http);

export { createMorador };
