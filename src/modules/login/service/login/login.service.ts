import { http } from "@/shared/api/https";
import { AxiosInstance } from "axios";
import { LoginInput, LoginOutput } from "./login.Dto";

class LoginService {
  constructor(private readonly api: AxiosInstance) {}

  async execute({ email, senha }: LoginInput): Promise<LoginOutput> {
    const result = await this.api.post<LoginOutput>("/login", {
      email,
      senha,
    });

    const { tipo_usuario, nome_usuario, email_usuario, token, id_usuario } =
      result.data;

    localStorage.setItem("@id_usua", String(id_usuario));
    localStorage.setItem("@tipo_usua", tipo_usuario);
    localStorage.setItem("@nome_usua", nome_usuario);
    localStorage.setItem("@email_usua", email_usuario);
    localStorage.setItem("@token", token);

    return result.data;
  }
}

const loginService = new LoginService(http);

export { loginService };
