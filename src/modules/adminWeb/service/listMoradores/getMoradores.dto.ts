type ListMoradoresOutput = {
  condominioId: string;
  id: string;
  nome: string;
  cpf: string;
  celular: string;
  email: string;
  dataNascimento: string;
  unidade: string;
  ehEntregador: true;
};

type ListMoradoresInput = {
  condominioId: string;
};

export type { ListMoradoresOutput, ListMoradoresInput };
