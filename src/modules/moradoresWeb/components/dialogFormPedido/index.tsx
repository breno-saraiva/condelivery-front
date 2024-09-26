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

type DiaLogProp = {
  isOpen: boolean;
  onCLose: () => void;
};

const DialogFormPedido = ({ isOpen, onCLose }: DiaLogProp) => {
  const form = useForm<z.infer<typeof createFormSchemaEmpresas>>({
    resolver: zodResolver(createFormSchemaEmpresas),
    defaultValues: defaultValueFormPedido,
  });

  return (
    <Dialog open={isOpen} onOpenChange={onCLose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Pedido</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={(data) => console.log(data)}>
                <div>
                  <div>
                    <div>
                      <Label>Plataforma</Label>
                    </div>
                    <FormField
                      control={form.control}
                      name="prataform"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Digite o nome da empresa"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { DialogFormPedido };
