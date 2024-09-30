type PedidosMorador = {
  _id: string;
  plataforma: string;
  descricao: string;
  previsao_chegada: string;
  local_entrega: string;
  status: string;
};

type ListPedidosMoradorOutput = {
  _id: string;
  nome: string;
  cpf: string;
  celular: string;
  email: string;
  unidade: string;
  eh_entregador: string;
  senha: string;
  pedidos: PedidosMorador[];
};

export type { ListPedidosMoradorOutput, PedidosMorador };
