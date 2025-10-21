interface LoginInput {
  email: string;
  senha: string;
}

interface LoginOutput {
  token: string;
  id_usuario: number;
  tipo_usuario: string;
  nome_usuario: string;
  email_usuario: string;
}

export type { LoginInput, LoginOutput };
