import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { CreateMoradorInput } from "./createMorador.Dto";

class CreateMoradorService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(params: CreateMoradorInput): Promise<void> {
    await this.api.post("/condominios", params);
  }
}

const createMorador = new CreateMoradorService(http);

export { createMorador };
