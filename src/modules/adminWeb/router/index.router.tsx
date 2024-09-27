import { RouteObject } from "react-router-dom";
import { AdministradorWebPage } from "../page";

const AdminDashRouter: RouteObject[] = [
  {
    path: "/dashboard-adm",
    element: <AdministradorWebPage />,
  },
];

export { AdminDashRouter };
