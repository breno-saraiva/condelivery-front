type PedidosMorador = {
  id: string;
  plataforma: string;
  descricao: string;
  previsaoChegada: string;
  localEntrega: string;
  status: string;
};

type ListPedidosMoradorOutput = {
  id: string;
  nome: string;
  cpf: string;
  celular: string;
  email: string;
  unidade: string;
  ehEntregador: string;
  senha: string;
  pedidos: PedidosMorador[];
};

export type { ListPedidosMoradorOutput, PedidosMorador };
