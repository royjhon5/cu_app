import { createBrowserRouter } from "react-router-dom";
import MainRoutes from "./Mainroutes.jsx";
import AuthenticationRoutes from "./AuthenticationRoutes.jsx";
const routes = createBrowserRouter([AuthenticationRoutes, MainRoutes])
export default routes;