import { loginRouter } from "@/modules/login/router/index.router";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([...loginRouter]);

export { router };
