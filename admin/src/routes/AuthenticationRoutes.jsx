import { lazy } from 'react';
import Loadable from '../components/Loadable';
import MinimalLayout from '../layout/MinimalLayout/index';
const AuthLogin3 = Loadable(lazy(() => import('../views/pages/authentication/auth-container/Login')));


const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/pages/login/login3',
      element: <AuthLogin3 />
    },
  ]
};

export default AuthenticationRoutes;
