import { lazy } from "react"
import Loadable from '../components/Loadable/Loadable'
const MainLayout = Loadable(lazy(() => import('../layouts/Mainlayout/MainLayout')));
const Dashboard = Loadable(lazy(() => import('../views/dashboard/index')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
        path: '/dashboard',
        element: <Dashboard  />
    }
  ]
}

export default MainRoutes