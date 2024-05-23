import { Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '', element: <Navigate to="/" /> },

  ]
}

export default MainRoutes