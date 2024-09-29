type CreateCondominioInput = {
  nome: string;
  cnpj: string;
  nome_adm: string;
  cpf_adm: string;
  email_adm: string;
  celular_adm: string;
  senha_adm: string;
  bairro: string;
  cep: string;
  complemento?: string;
  estado: string;
  logradouro: string;
  municipio: string;
  numero: string;
};

export type { CreateCondominioInput };
