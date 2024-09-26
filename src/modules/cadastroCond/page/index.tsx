import { Layout } from "@/shared/components/layout";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Link } from "react-router-dom";

function CadastroCondPage() {
  return (
    <Layout>
      <div className="py-28 px-10 flex flex-col gap-2">
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
              <Input className="bg-white" />
            </div>
            <div className="col-span-4">
              <Label>CNPJ</Label>
              <Input className="bg-white" />
            </div>
            <div className="row-start-2 col-span-4">
              <Label>CEP</Label>
              <Input className="bg-white" />
            </div>
            <div className="row-start-3 col-span-4">
              <Label>Endereço</Label>
              <Input className="bg-white" />
            </div>
            <div className="row-start-3 col-span-4">
              <Label>Número</Label>
              <Input className="bg-white" />
            </div>
            <div className="row-start-3 col-span-4">
              <Label>Complemento</Label>
              <Input className="bg-white" />
            </div>
            <div className="row-start-4 col-span-4">
              <Label>Bairro</Label>
              <Input className="bg-white" />
            </div>
            <div className="row-start-4 col-span-4">
              <Label>Cidade</Label>
              <Input className="bg-white" />
            </div>
            <div className="row-start-4 col-span-4">
              <Label>Estado</Label>
              <Input className="bg-white" />
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
              <Input className="bg-white" />
            </div>
            <div className="col-span-4">
              <Label>CPF</Label>
              <Input className="bg-white" />
            </div>
            <div className="col-span-4">
              <Label>e-mail</Label>
              <Input className="bg-white" />
            </div>
            <div className="row-start-2 col-span-4">
              <Label>Telefone</Label>
              <Input className="bg-white" />
            </div>
            <div className="row-start-3 col-span-12 flex justify-end items-end gap-4">
              <Link to="/">
                <Button type="button" variant="outline">
                  Voltar
                </Button>
              </Link>
              <Button className="bg-red-500 hover:bg-red-400">Cadastrar</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export { CadastroCondPage };
