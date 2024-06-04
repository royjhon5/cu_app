
import Loadable from '../component/Loadable/Loadable';
import { lazy } from "react"
import GuestLayout from '../layout/GuestLayout';
const Login = Loadable(lazy(() => import('../views/authentication/auth/container/index')));
const Register = Loadable(lazy(() => import('../views/authentication/registration/container/index')));
const Success = Loadable(lazy(() => import('../views/authentication/registration/SuccessRegistration/index')));
const Verified = Loadable(lazy(() => import('../views/authentication/verifiedaccount/index')));
const SetPasswordContainer = Loadable(lazy(() => import('../views/authentication/setpassword/container')));
const VerifyEmail = Loadable(lazy(() => import('../views/authentication/registration/Verify')));

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
      element: <SetPasswordContainer />
    },
    {
      path: '/user/registration/verification',
      element: <VerifyEmail />
    },
  ]
}

export default AuthenticationRoutes