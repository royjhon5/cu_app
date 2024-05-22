import { Navigate } from "react-router-dom";
import ConfirmEmail from "../ConfirmEmail";
import Register from "../Register";
import SetPassword from "../SetPassword";
import MainLayout from "../layout/MainLayout";

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '', element: <Navigate to="/register" /> },
    {
      path: '/register',
      element: <Register  />
    },
    {
      path: '/verify-email',
      element: <ConfirmEmail  />
    },
    {
      path: '/set-password',
      element: <SetPassword  />
    },
  ]
}

export default MainRoutes