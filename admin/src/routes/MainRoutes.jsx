import { lazy } from "react"
import Loadable from '../components/Loadable/Loadable'
const MainLayout = Loadable(lazy(() => import('../layouts/Mainlayout/MainLayout')));
const Dashboard = Loadable(lazy(() => import('../views/dashboard/index')));
const AccountSettings = Loadable(lazy(() => import('../views/AccountSettings')));
const UserProfile = Loadable(lazy(() => import('../views/User Profile')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
        path: '/dashboard',
        element: <Dashboard  />
    },
    {
      path: '/dashboard/user',
      element: <UserProfile  />
    },
    {
        path: '/dashboard/user/account-settings',
        element: <AccountSettings  />
    },
  ]
}

export default MainRoutes