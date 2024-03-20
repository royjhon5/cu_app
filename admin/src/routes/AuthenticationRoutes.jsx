
import {lazy} from 'react'
import Loadable from '../components/Loadable';
import MinimalLayout from '../components/MinimalLayout/index'
import MainLayout from '../layout/MainLayout/index'

const AuthLogin = Loadable(lazy(() => import('../views/pages/authentication/auth-container/Login')));

const AuthenticationRoutes  = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <AuthLogin />
        },
        {
            path: 'login',
            children: [
              {
                path: 'default',
                element: <AuthLogin />
              }
            ]
          },
    ]
}

export default AuthenticationRoutes