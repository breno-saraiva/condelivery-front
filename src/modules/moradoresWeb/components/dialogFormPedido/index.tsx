import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormSchemaEmpresas } from "../../Schema/createPedidoFormSchema";
import { defaultValueFormPedido } from "../../mocks/defaltValueForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { createPedidoMorador } from "../../service/createPedidoMorador/createPedidoMorador.service";

type DiaLogProp = {
  isOpen: boolean;
  onCLose: () => void;
  setisOpenFormEntrega: React.Dispatch<React.SetStateAction<boolean>>;
};

const DialogFormPedido = ({
  isOpen,
  onCLose,
  setisOpenFormEntrega,
}: DiaLogProp) => {
  const form = useForm<z.infer<typeof createFormSchemaEmpresas>>({
    resolver: zodResolver(createFormSchemaEmpresas),
    defaultValues: defaultValueFormPedido,
  });

  const id_usua = localStorage.getItem("@id_usua");

  async function onSubmit(data: z.infer<typeof createFormSchemaEmpresas>) {
    const params = {
      plataforma: data.plataforma,
      descricao: data.descricao,
      previsaoChegada: new Date(
        Date.now() + Number(data.previsao_chegada) * 60 * 1000
      ),
      localEntrega: data.local_entrega,
    };
    try {
      if (id_usua) {
        await createPedidoMorador.execute(params, id_usua);
        setisOpenFormEntrega(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCLose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Pedido</DialogTitle>
          <DialogDescription>
            preencha o formulário com seu pedido
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <div>
                <div>
                  <Label>Plataforma</Label>
                </div>
                <FormField
                  control={form.control}
                  name="plataforma"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Digite a empresa que está entregando"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div>
                  <Label>Descrição</Label>
                </div>
                <FormField
                  control={form.control}
                  name="descricao"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Descreva seu pedido" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div>
                  <Label>Previsão de chegada</Label>
                </div>
                <FormField
                  control={form.control}
                  name="previsao_chegada"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="tempo estimado de entrega"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div>
                  <Label>Local de entrega</Label>
                </div>
                <FormField
                  control={form.control}
                  name="local_entrega"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Digite o Bloco e APTO da entrega"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className="bg-red-500 hover:bg-red-400 col-span-2 col-start-3"
                type="submit"
              >
                Criar
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { DialogFormPedido };
