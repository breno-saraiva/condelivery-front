import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { CreateCondominioInput } from "./createCondominios.Dto";

class CreateCondominioService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(params: CreateCondominioInput): Promise<void> {
    await this.api.post("/condominios", params);
  }
}

const createCondominio = new CreateCondominioService(http);

export { createCondominio };
