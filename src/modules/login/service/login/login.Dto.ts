interface LoginInput {
  email: string;
  senha: string;
}

// type moradores = {
//   _id: string;
//   nome: string;
//   cpf: string;
//   celular: string;
//   email: string;
//   data_nascimento: string;
//   unidade: string;
//   eh_entregador: true;
//   senha: string;
// };
interface LoginOutput {
  id_usuario: string;
  tipo_usuario: string;
  nome_usuario: string;
}

export type { LoginInput, LoginOutput };
