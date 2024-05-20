import { Navigate } from "react-router-dom";
import App from "../App";
import ConfirmEmail from "../ConfirmEmail";
import Register from "../Register";

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
  ]
}

export default MainRoutes