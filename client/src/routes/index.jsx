import { createBrowserRouter } from "react-router-dom";
import MainRoutes from "./Mainroutes";
import AuthenticationRoutes from "./AuthenticationRoutes";
const routes = createBrowserRouter([AuthenticationRoutes ,MainRoutes])
export default routes;