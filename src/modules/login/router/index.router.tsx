import { RouteObject } from "react-router-dom";
import { Login } from "../page";

const loginRouter: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
];

export { loginRouter };
