import { Button } from "@/shared/components/ui/button";
import { ScrollArea, ScrollBar } from "@/shared/components/ui/scroll-area";
import { pedidos } from "../mocks/pedidos";
import { CardPedidos } from "../components/cardPedido";
import { CardFinalizado } from "../components/cardFinalizados";

function DashMoradores() {
  return (
    <div className="m-10 p-2 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Pedidos em andamento</h1>
        <ScrollArea className="w-full whitespace-nowrap rounded-xl ">
          <div className="flex w-max space-x-4 pb-4">
            {pedidos.map((item) => (
              <CardPedidos
                cardID={item.id}
                descricao={item.descricao}
                localEntrega={item.localEntrega}
                pedidoOrigem={item.pedidoOrigem}
                previsaoChegada={item.previsaoChegada}
                status={item.status}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Button className="w-1/6 bg-red-500 hover:bg-red-400">
          Adicionar pedido
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Pedidos Finalizados</h1>
        <ScrollArea className="w-full whitespace-nowrap rounded-xl ">
          <div className="flex w-max space-x-4 pb-4">
            {pedidos.map((item) => (
              <CardFinalizado
                cardID={item.id}
                descricao={item.descricao}
                localEntrega={item.localEntrega}
                pedidoOrigem={item.pedidoOrigem}
                previsaoChegada={item.previsaoChegada}
                status={item.status}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

export { DashMoradores };
