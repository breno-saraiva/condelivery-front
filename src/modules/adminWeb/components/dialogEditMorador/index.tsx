import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createFormSchemaMorador } from "../../schema/createMoradorFormSchema";
import { defaultValueFormAddMorador } from "../../mocks/defaultValueFormMorador";
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
import { moradores } from "../../types/moradores";
// import { Switch } from "@/shared/components/ui/switch";

type DiaLogProp = {
  isOpen: boolean;
  onCLose: () => void;
  moradorSelected?: moradores;
};

const DialogEditMorador = ({
  isOpen,
  onCLose,
  moradorSelected,
}: DiaLogProp) => {
  const form = useForm<z.infer<typeof createFormSchemaMorador>>({
    resolver: zodResolver(createFormSchemaMorador),
    defaultValues: defaultValueFormAddMorador,
  });

  return (
    <Dialog open={isOpen} onOpenChange={onCLose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Dados do Morador</DialogTitle>
          <DialogDescription>
            Preencha os campos que deseja editar
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={(data) => console.log(data)}>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <div>
                  <Label>nome</Label>
                </div>
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={moradorSelected?.nome}
                          {...field}
                          defaultValue={moradorSelected?.nome}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <div>
                  <Label>CPF</Label>
                </div>
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={moradorSelected?.cpf}
                          {...field}
                          defaultValue={moradorSelected?.cpf}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <div>
                  <Label>Telefone</Label>
                </div>
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={moradorSelected?.telefone}
                          {...field}
                          defaultValue={moradorSelected?.telefone}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <div>
                  <Label>E-mail</Label>
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={moradorSelected?.email}
                          {...field}
                          defaultValue={moradorSelected?.email}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <div>
                  <Label>Data de nascimento</Label>
                </div>
                <FormField
                  control={form.control}
                  name="date_nasc"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={moradorSelected?.date_nasc}
                          {...field}
                          defaultValue={moradorSelected?.date_nasc}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <div>
                  <Label>Unidade (bloco,apto)</Label>
                </div>
                <FormField
                  control={form.control}
                  name="unidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={moradorSelected?.logradouro}
                          {...field}
                          defaultValue={moradorSelected?.logradouro}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <div className="col-span-3 flex justify-start items-center gap-4">
                <Label>Status: </Label>
                <Switch className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-[#F48C06]" />
              </div> */}
              <Button
                className="bg-red-500 hover:bg-red-400 col-span-2 col-start-5"
                type="submit"
              >
                Salvar
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { DialogEditMorador };
