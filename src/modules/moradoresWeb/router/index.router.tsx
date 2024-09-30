import { RouteObject } from "react-router-dom";
import { DashMoradores } from "../page";

const MoradorRouter: RouteObject[] = [
  {
    path: "/dashboard-morador",
    element: <DashMoradores />,
  },
];

export { MoradorRouter };
