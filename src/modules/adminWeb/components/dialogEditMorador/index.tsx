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
import { ListMoradores } from "../../service/listMoradores/getMoradores.dto";
import { Switch } from "@/shared/components/ui/switch";
import { editFormSchemaMorador } from "../../schema/editMoradorFormSchema";
import { defaultValueEditMorador } from "../../mocks/defaultValueEditFormMorador";
import { editMoradoresService } from "../../service/editMorador/editMorador.service";

type DiaLogProp = {
  isOpen: boolean;
  onCLose: () => void;
  moradorSelected: ListMoradores;
  statusMorador: boolean;
  setStatusMorador: React.Dispatch<React.SetStateAction<boolean>>;
};

const DialogEditMorador = ({
  isOpen,
  onCLose,
  moradorSelected,
  statusMorador,
  setStatusMorador,
}: DiaLogProp) => {
  const form = useForm<z.infer<typeof editFormSchemaMorador>>({
    resolver: zodResolver(editFormSchemaMorador),
    defaultValues: defaultValueEditMorador,
  });

  async function onSubmit(data: z.infer<typeof editFormSchemaMorador>) {
    const params = {
      nome: data.nome ? data.nome : moradorSelected.nome,
      cpf: data.cpf ? data.cpf : moradorSelected.cpf,
      celular: data.celular ? data.celular : moradorSelected.celular,
      email: data.email ? data.email : moradorSelected.email,
      dataNascimento: data.dataNascimento
        ? data.dataNascimento
        : moradorSelected.dataNascimento,
      unidade: data.unidade ? data.unidade : moradorSelected.unidade,
      ehEntregador: statusMorador,
      senha: data.senha ? data.senha : moradorSelected.senha,
    };
    try {
      await editMoradoresService.execute(params, moradorSelected.id);
    } catch (error) {
      console.log(error);
    }
  }

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
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                          placeholder={moradorSelected.nome}
                          {...field}
                          defaultValue={moradorSelected.nome}
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
                          placeholder={moradorSelected.cpf}
                          {...field}
                          defaultValue={moradorSelected.cpf}
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
                  name="celular"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={moradorSelected.celular}
                          {...field}
                          defaultValue={moradorSelected.celular}
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
                          placeholder={moradorSelected.email}
                          {...field}
                          defaultValue={moradorSelected.email}
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
                  name="dataNascimento"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={moradorSelected.dataNascimento}
                          {...field}
                          defaultValue={moradorSelected.dataNascimento}
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
                          placeholder={moradorSelected.unidade}
                          {...field}
                          defaultValue={moradorSelected.unidade}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3 flex justify-start items-center gap-4">
                <Label>Status: </Label>
                <div className="col-span-6 flex items-center gap-2">
                  <Switch
                    className="data-[state=checked]:bg-[#F48C06] data-[state=unchecked]:bg-green-500"
                    checked={statusMorador}
                    onCheckedChange={(status) => setStatusMorador(status)}
                  />
                  {!statusMorador ? (
                    <p className="font-semibold text-sm">morador</p>
                  ) : (
                    <p>entregador</p>
                  )}
                </div>
              </div>
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
