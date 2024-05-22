
import Loadable from '../component/Loadable/Loadable';
import { lazy } from "react"
import GuestLayout from '../layout/GuestLayout';
const Login = Loadable(lazy(() => import('../views/authentication/auth/container/index')));
const Register = Loadable(lazy(() => import('../views/authentication/registration/container')));
const Success = Loadable(lazy(() => import('../views/authentication/registration/success registration')));
const Verified = Loadable(lazy(() => import('../views/authentication/verified account')));
const SetPassword = Loadable(lazy(() => import('../views/authentication/set password/form')));

const AuthenticationRoutes = {
  path: '/',
  element: <GuestLayout />,
  children: [
    {
        path: '/',
        element: <Login />
    },
    {
      path: '/user/registration',
      element: <Register />
    },
    {
      path: '/user/registration/success',
      element: <Success />
    },
    {
      path: '/verify-email',
      element: <Verified />
    },
    {
      path: '/set-password',
      element: <SetPassword />
    },
  ]
}

export default AuthenticationRoutes