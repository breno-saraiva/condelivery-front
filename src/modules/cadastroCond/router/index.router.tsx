import { RouteObject } from "react-router-dom";
import { CadastroCondPage } from "../page";

const CadastroCondRouter: RouteObject[] = [
  {
    path: "/cadastro-condominio",
    element: <CadastroCondPage />,
  },
];

export { CadastroCondRouter };
