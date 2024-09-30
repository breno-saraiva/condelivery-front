import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { ListMoradoresOutput } from "./getMoradores.dto";

const id_usua = String(localStorage.getItem("@id_usua"));

class GetMoradoresService {
  constructor(private readonly api: AxiosInstance) {}

  async execute(): Promise<ListMoradoresOutput> {
    const result = await this.api.get(`/condominios/${id_usua}`);
    return result.data;
  }
}

const getMoradoresService = new GetMoradoresService(http);
export { getMoradoresService };
