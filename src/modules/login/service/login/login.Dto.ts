interface LoginInput {
  email: string;
  senha: string;
}

interface LoginOutput {
  id_usuario: string;
  tipo_usuario: string;
  nome_usuario: string;
}

export type { LoginInput, LoginOutput };
