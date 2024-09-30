import { Button } from "@/shared/components/ui/button";
import { ScrollArea, ScrollBar } from "@/shared/components/ui/scroll-area";
import { CardPedidos } from "../components/cardPedido";
import { CardFinalizado } from "../components/cardFinalizados";
import { Layout } from "@/shared/components/layout";
import { useEffect, useState } from "react";
import { DialogFormPedido } from "../components/dialogFormPedido";
import { getPedidosMoradoresService } from "../service/getPedidosMorador/listPedidosMorador.service";
import { PedidosMorador } from "../service/getPedidosMorador/ListPedidosMorador.Dto";

function DashMoradores() {
  const [isOpenFormEntrega, setisOpenFormEntrega] = useState(false);
  const [listPedidosEntregues, setListPedidosEntregues] = useState<
    PedidosMorador[]
  >([]);
  const [listPedidosAndamento, setListPedidosAndamento] = useState<
    PedidosMorador[]
  >([]);

  async function loadPedidosMorador() {
    try {
      const response = await getPedidosMoradoresService.execute();
      response.pedidos.map((item) => {
        if (item.status === "entregue") {
          return setListPedidosEntregues((prev) => [...prev, item]);
        }
        return setListPedidosAndamento((prev) => [...prev, item]);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadPedidosMorador();
  }, []);

  return (
    <Layout usuario="Jamal">
      <div className="mx-10 py-24 px-2 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Pedidos em andamento</h1>
          <ScrollArea className="w-full whitespace-nowrap rounded-xl">
            <div className="flex w-max space-x-4 pb-4">
              {listPedidosAndamento.map((item) => (
                <CardPedidos
                  cardID={item._id}
                  descricao={item.descricao}
                  localEntrega={item.local_entrega}
                  pedidoOrigem={item.plataforma}
                  previsaoChegada={item.previsao_chegada}
                  status={item.status}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <Button
            onClick={() => setisOpenFormEntrega(true)}
            type="button"
            className="w-1/6 bg-red-500 hover:bg-red-400"
          >
            Adicionar pedido
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Pedidos Finalizados</h1>
          <ScrollArea className="w-full whitespace-nowrap rounded-xl ">
            <div className="flex w-max space-x-4 pb-4">
              {listPedidosEntregues.map((item) => (
                <CardFinalizado
                  cardID={item._id}
                  descricao={item.descricao}
                  localEntrega={item.local_entrega}
                  pedidoOrigem={item.plataforma}
                  previsaoChegada={item.previsao_chegada}
                  status={item.status}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>

      {isOpenFormEntrega && (
        <DialogFormPedido
          setisOpenFormEntrega={setisOpenFormEntrega}
          isOpen={isOpenFormEntrega}
          onCLose={() => setisOpenFormEntrega(false)}
        />
      )}
    </Layout>
  );
}

export { DashMoradores };
