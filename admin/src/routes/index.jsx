import { createBrowserRouter } from "react-router-dom";
import AuthenticationRoutes from "./AuthenticationRoutes";
import MainRoutes from "./Mainroutes";
const routes = createBrowserRouter([AuthenticationRoutes, MainRoutes])
export default routes;