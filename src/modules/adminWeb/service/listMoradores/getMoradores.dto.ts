type ListMoradores = {
  id: string;
  nome: string;
  cpf: string;
  celular: string;
  email: string;
  dataNascimento: string;
  unidade: string;
  ehEntregador: true;
  senha: string;
};

type ListMoradoresOutput = {
  _id: string;
  nome: string;
  cnpj: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  estado: string;
  municipio: string;
  cep: string;
  nome_adm: string;
  cpf_adm: string;
  email_adm: string;
  celular_adm: string;
  senha_adm: string;
  moradores: ListMoradores[];
};

type ListMoradoresInput = {
  id_usua: string;
};

export type { ListMoradoresOutput, ListMoradoresInput, ListMoradores };
