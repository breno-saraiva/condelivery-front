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
import { createMorador } from "../../service/createMorador/createMorador.service";
import { Switch } from "@/shared/components/ui/switch";
import { useState } from "react";

type DiaLogProp = {
  isOpen: boolean;
  onCLose: () => void;
};

const DialogAddMorador = ({ isOpen, onCLose }: DiaLogProp) => {
  const form = useForm<z.infer<typeof createFormSchemaMorador>>({
    resolver: zodResolver(createFormSchemaMorador),
    defaultValues: defaultValueFormAddMorador,
  });

  const [statusMorador, setStatusMorador] = useState(false);

  async function onSubmit(data: z.infer<typeof createFormSchemaMorador>) {
    const params = {
      nome: data.nome,
      cpf: data.cpf,
      celular: data.telefone,
      email: data.email,
      data_nascimento: data.date_nasc,
      unidade: data.unidade,
      eh_entregador: statusMorador,
      senha: data.senha,
    };
    try {
      await createMorador.execute(params);
      window.alert("cadastro realizado");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCLose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Morador</DialogTitle>
          <DialogDescription>
            preencha o formulário com os dados do morador
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-6">
                <span>Tipo morador: </span>
                <Switch
                  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-[#F48C06]"
                  checked={statusMorador}
                  onCheckedChange={(status) => setStatusMorador(status)}
                />
                {statusMorador ? <span>morador</span> : <span>entregador</span>}
              </div>
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
                          placeholder="Digite o nome do Morador"
                          {...field}
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
                          placeholder="Digite o CPF do Morador"
                          {...field}
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
                        <Input placeholder="Digite o telefone" {...field} />
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
                          placeholder="Digite o e-mail do Morador"
                          {...field}
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
                          placeholder="Digite a data de nascimento do Morador"
                          {...field}
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
                          placeholder="Digite a data de nascimento do Morador"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <div>
                  <Label>Senha</Label>
                </div>
                <FormField
                  control={form.control}
                  name="senha"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Digite o nome do Morador"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className="bg-red-500 hover:bg-red-400 col-span-2 row-start-6 col-start-5"
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

export { DialogAddMorador };
