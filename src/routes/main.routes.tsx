import { AdminDashRouter } from "@/modules/adminWeb/router/index.router";
import { CadastroCondRouter } from "@/modules/cadastroCond/router/index.router";
import { loginRouter } from "@/modules/login/router/index.router";
import { MoradorRouter } from "@/modules/moradoresWeb/router/index.router";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  ...loginRouter,
  ...MoradorRouter,
  ...CadastroCondRouter,
  ...AdminDashRouter,
]);

export { router };
