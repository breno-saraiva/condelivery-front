import { Layout } from "@/shared/components/layout";
import logo from "@/shared/assets/logo-red.png";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";

function Login() {
  return (
    <Layout>
      <div className="mx-10 pt-28">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={logo} />
          <div className="flex flex-col justify-start items-start gap-2">
            <Label className="font-semibold text-lg">Login:</Label>
            <Input className="w-64 bg-white" placeholder="Digite seu login" />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <Label className="font-semibold text-lg">Senha:</Label>
            <Input
              placeholder="Digite sua senha"
              type="password"
              className="w-64 bg-white"
            />
          </div>
          <div className="pt-4 flex flex-col gap-4">
            <Button className="w-60 text-white bg-red-500 hover:bg-red-400">
              Entrar
            </Button>
            <Button className="w-60" variant="outline">
              Cadastre-se
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export { Login };
