import { Layout } from "@/shared/components/layout";
import logo from "@/shared/assets/logo-red.png";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../schema/loginSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValueLogin } from "../mock/defaultValueLogin";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form";
import { loginService } from "../service/login/login.service";
import { useUserDataContext } from "@/shared/context/usercontext";

function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultValueLogin,
  });

  const navigate = useNavigate();

  const { user } = useUserDataContext();

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    try {
      const response = await loginService.execute(data);
      if (response.tipo_usuario === "condominio") {
        navigate("/dashboard-adm");
      }
      if (response.tipo_usuario === "morador") {
        navigate("/dashboard-morador");
      }
      user.setValue(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="pt-32">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center items-center gap-4">
              <img src={logo} />
              <div className="flex flex-col justify-start items-start gap-2">
                <Label className="font-semibold text-lg">Login:</Label>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-white w-64"
                          placeholder="Digite seu e-mail"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <Label className="font-semibold text-lg">Senha:</Label>
                <FormField
                  control={form.control}
                  name="senha"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          className="bg-white w-64"
                          placeholder="Digite sua senha"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="pt-4 flex flex-col gap-4">
                <Button
                  type="submit"
                  className="w-60 text-white bg-red-500 hover:bg-red-400"
                >
                  Entrar
                </Button>
                <Link to="/cadastro-condominio">
                  <Button className="w-60" variant="outline">
                    Cadastre-se
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </Layout>
  );
}

export { Login };
