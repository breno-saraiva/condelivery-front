import { Layout } from "@/shared/components/layout";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { createCondominioSchema } from "../schema/createCondominioSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValueFormCreateCondominio } from "../mocks/defaultValueCond";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form";
import { z } from "zod";
import { createCondominio } from "../service/createCondominio/createCondominio.service";

function CadastroCondPage() {
  const form = useForm<z.infer<typeof createCondominioSchema>>({
    resolver: zodResolver(createCondominioSchema),
    defaultValues: defaultValueFormCreateCondominio,
  });
  const navigate = useNavigate();
  async function onSubmit(data: z.infer<typeof createCondominioSchema>) {
    const params = {
      nome: data.nome,
      cnpj: data.cnpj,
      nome_adm: data.nome_adm,
      cpf_adm: data.cpf_adm,
      email_adm: data.email_adm,
      celular_adm: data.celular_adm,
      senha_adm: data.senha_adm,
      bairro: data.bairro,
      cep: data.cep,
      complemento: data.complemento,
      estado: data.estado,
      logradouro: data.logradouro,
      municipio: data.municipio,
      numero: data.numero,
    };
    try {
      await createCondominio.execute(params);
      window.alert("cadastro realizado");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="py-28 px-10 flex flex-col gap-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <h1 className="font-bold text-2xl text-[#F48C06]">Cadastro</h1>
            <div>
              <div>
                <h1 className="font-semibold text-xl text-[#F48C06]">
                  Dados do Condomínio
                </h1>
                <div className="border border-[#F48C06]"></div>
              </div>
              <div className="mt-4 grid grid-cols-12 gap-2">
                <div className="col-span-4">
                  <Label>Nome</Label>
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o nome do responsavel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-4">
                  <Label>CNPJ</Label>
                  <FormField
                    control={form.control}
                    name="cnpj"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o CNPJ..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="row-start-2 col-span-4">
                  <Label>CEP</Label>
                  <FormField
                    control={form.control}
                    name="cep"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o CEP..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="row-start-3 col-span-4">
                  <Label>Endereço</Label>
                  <FormField
                    control={form.control}
                    name="logradouro"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o endereço"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="row-start-3 col-span-4">
                  <Label>Número</Label>
                  <FormField
                    control={form.control}
                    name="numero"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o telefone do Condomínio"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="row-start-3 col-span-4">
                  <Label>Complemento</Label>
                  <FormField
                    control={form.control}
                    name="complemento"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o complemento"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                </div>
                <div className="row-start-4 col-span-4">
                  <Label>Bairro</Label>
                  <FormField
                    control={form.control}
                    name="bairro"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o bairro"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="row-start-4 col-span-4">
                  <Label>Cidade</Label>
                  <FormField
                    control={form.control}
                    name="municipio"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite a cidade..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="row-start-4 col-span-4">
                  <Label>Estado</Label>
                  <FormField
                    control={form.control}
                    name="estado"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o estado"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="font-semibold text-xl text-[#F48C06]">
                  Dados do administrador
                </h1>
                <div className="border border-[#F48C06]"></div>
              </div>
              <div className="mt-4 grid grid-cols-12 gap-2">
                <div className="col-span-4">
                  <Label>Nome</Label>
                  <FormField
                    control={form.control}
                    name="nome_adm"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o nome do responsável"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-4">
                  <Label>CPF</Label>
                  <FormField
                    control={form.control}
                    name="cpf_adm"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o cpf do responsável"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-4">
                  <Label>e-mail</Label>
                  <FormField
                    control={form.control}
                    name="email_adm"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o email do responsável"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                </div>
                <div className="row-start-2 col-span-4">
                  <Label>Telefone</Label>
                  <FormField
                    control={form.control}
                    name="celular_adm"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite o telefone do responsável"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                </div>
                <div className="row-start-2 col-span-4">
                  <Label>Senha de Acesso</Label>
                  <FormField
                    control={form.control}
                    name="senha_adm"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white"
                            placeholder="Digite a Senha de acesso"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                </div>
                <div className="row-start-3 col-span-12 flex justify-end items-end gap-4">
                  <Link to="/">
                    <Button type="button" variant="outline">
                      Voltar
                    </Button>
                  </Link>
                  <Button type="submit" className="bg-red-500 hover:bg-red-400">
                    Cadastrar
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </Layout>
  );
}

export { CadastroCondPage };
