import { lazy } from "react"
import Loadable from '../components/Loadable/Loadable'
const MainLayout = Loadable(lazy(() => import('../layouts/Mainlayout/MainLayout')));
const Dashboard = Loadable(lazy(() => import('../views/pages/dashboard/Dashboard.jsx')));

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