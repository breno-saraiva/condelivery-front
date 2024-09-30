import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { LoginInput, LoginOutput } from "./login.Dto";

class LoginService {
  constructor(private readonly api: AxiosInstance) {}

  async execute({ email, senha }: LoginInput): Promise<void> {
    const result = await this.api.post<LoginOutput>("/login", {
      email,
      senha,
    });

    const { id_usuario, tipo_usuario, nome_usuario } = result.data;

    localStorage.setItem("@id_usua", id_usuario);
    localStorage.setItem("@tipo_usua", tipo_usuario);
    localStorage.setItem("@nome_usua", nome_usuario);
  }
}

const loginService = new LoginService(http);

export { loginService };
