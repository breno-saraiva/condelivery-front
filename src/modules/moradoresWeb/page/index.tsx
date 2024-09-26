import { Button } from "@/shared/components/ui/button";
import { ScrollArea, ScrollBar } from "@/shared/components/ui/scroll-area";
import { pedidos } from "../mocks/pedidos";
import { CardPedidos } from "../components/cardPedido";
import { CardFinalizado } from "../components/cardFinalizados";
import { Layout } from "@/shared/components/layout";
import { useState } from "react";
import { DialogConfirmaçãoEntrega } from "../components/dialogConfirmação";
import { DialogFormPedido } from "../components/dialogFormPedido";

function DashMoradores() {
  const [isOpenConfirmaçãoEntrega, setIsOpenConfirmaçãoEntrega] =
    useState(false);
  const [isOpenFormEntrega, setisOpenFormEntrega] = useState(false);

  return (
    <Layout>
      <div className="mx-10 py-24 px-2 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Pedidos em andamento</h1>
          <ScrollArea className="w-full whitespace-nowrap rounded-xl">
            <div className="flex w-max space-x-4 pb-4">
              {pedidos.map((item) => (
                <CardPedidos
                  isOpenConfirmaçãoEntrega={isOpenConfirmaçãoEntrega}
                  setIsOpenConfirmaçãoEntrega={setIsOpenConfirmaçãoEntrega}
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
      {isOpenConfirmaçãoEntrega && (
        <DialogConfirmaçãoEntrega
          isOpen={isOpenConfirmaçãoEntrega}
          onCLose={() => setIsOpenConfirmaçãoEntrega(false)}
        />
      )}
      {isOpenFormEntrega && (
        <DialogFormPedido
          isOpen={isOpenFormEntrega}
          onCLose={() => setisOpenFormEntrega(false)}
        />
      )}
    </Layout>
  );
}

export { DashMoradores };
