import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { EditMoradoresInput } from "./editMorador.dto";

class PutMoradoresService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(params: EditMoradoresInput, id: string): Promise<void> {
    await this.api.put(`/moradores/${id}`, params);
  }
}

const editMoradoresService = new PutMoradoresService(http);
export { editMoradoresService };
