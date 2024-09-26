import { Layout } from "@/shared/components/layout";
import logo from "@/shared/assets/logo-red.png";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Layout>
      <div className="pt-32">
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
            <Link to="/cadastro-condominio">
              <Button className="w-60" variant="outline">
                Cadastre-se
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export { Login };
