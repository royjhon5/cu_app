import { Navigate } from "react-router-dom";
import App from "../App";
import ConfirmEmail from "../ConfirmEmail";
import Register from "../Register";
import SetPassword from "../SetPassword";

const MainRoutes = {
  path: '/',
  element: <App />,
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