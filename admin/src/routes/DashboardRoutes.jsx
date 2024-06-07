import { lazy } from "react"
import Loadable from '../components/Loadable/Loadable'
import UserList from "../views/Administrative/UserList";
const MainLayout = Loadable(lazy(() => import('../layouts/Mainlayout/MainLayout')));
const Dashboard = Loadable(lazy(() => import('../views/dashboard/index')));
const AccountSettings = Loadable(lazy(() => import('../views/AccountSettings')));
const UserProfile = Loadable(lazy(() => import('../views/User Profile')));
const UserRoles = Loadable(lazy(() => import('../views/Administrative/UserRoles')));
const GuestChatBox = Loadable(lazy(() => import('../views/Administrative/GuestChatBox')));

const DashboardRoutes = {
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
    {
      path: '/dashboard/administrative/user-roles',
      element: <UserRoles />
    },
    {
      path: '/dashboard/administrative/user-list',
      element: <UserList />
    },
    {
      path: '/dashboard/administrative/message-inbox',
      element: <GuestChatBox />
    }
  ]
}

export default DashboardRoutes