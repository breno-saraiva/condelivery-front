import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";

class DeleteMoradoresService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(_id: string): Promise<void> {
    await this.api.delete(`/moradores/${_id}`);
  }
}

const deleteMoradoresService = new DeleteMoradoresService(http);
export { deleteMoradoresService };
