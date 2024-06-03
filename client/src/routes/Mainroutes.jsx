import Loadable from '../component/Loadable/Loadable';
import { lazy } from "react"
const MainLayout = Loadable(lazy(() => import('../layout/MainLayout')));
const FrontLandingPage = Loadable(lazy(() => import('../views/Landing Page')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/main', element: <FrontLandingPage /> },

  ]
}

export default MainRoutes