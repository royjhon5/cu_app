
import GuestLayout from '../layouts/Guestlayout/GuestLayout'
import { lazy } from "react"
import Loadable from '../components/Loadable/Loadable'
const Login = Loadable(lazy(() => import('../views/pages/authentication/auth-container/AuthContainer')));
const ForgotPassword = Loadable(lazy(() => import('../views/pages/authentication/forgot-password/ForgotPassContainer')));

const AuthenticationRoutes = {
  path: '/',
  element: <GuestLayout />,
  children: [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    }
  ]
}

export default AuthenticationRoutes