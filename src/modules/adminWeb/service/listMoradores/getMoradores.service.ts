import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { ListMoradoresInput, ListMoradoresOutput } from "./getMoradores.dto";

class GetMoradoresService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(params: ListMoradoresInput): Promise<ListMoradoresOutput[]> {
    const result = await this.api.get<ListMoradoresOutput[]>(`/moradores`, {
      params,
    });
    return result.data;
  }
}

const getMoradoresService = new GetMoradoresService(http);
export { getMoradoresService };
