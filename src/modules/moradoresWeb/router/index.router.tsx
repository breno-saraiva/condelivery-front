import { RouteObject } from "react-router-dom";
import { DashMoradores } from "../page";

const MoradorRouter: RouteObject[] = [
  {
    path: "/dashboardMorador",
    element: <DashMoradores />,
  },
];

export { MoradorRouter };
