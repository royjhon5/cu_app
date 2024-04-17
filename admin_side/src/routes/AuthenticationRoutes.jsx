
import GuestLayout from '../layouts/Guestlayout/GuestLayout'
import { lazy } from "react"
import Loadable from '../components/Loadable/Loadable'
const Login = Loadable(lazy(() => import('../views/pages/authentication/auth-container/AuthContainer')));
const FindAccount = Loadable(lazy(() => import('../views/pages/authentication/forgot-password/find-account/findAccount')));

const AuthenticationRoutes = {
  path: '/',
  element: <GuestLayout />,
  children: [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/forgot-password/verify',
        element: <FindAccount />
    },
  ]
}

export default AuthenticationRoutes