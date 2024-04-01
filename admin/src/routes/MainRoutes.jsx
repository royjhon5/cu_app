import { lazy } from 'react';
import MainLayout from '../layout/MainLayout/index';
import Loadable from '../components/Loadable';
const DashboardDefault = Loadable(lazy(() => import('../views/pages/dashboard/index')));
const ProductCategory = Loadable(lazy(() => import('../views/pages/products/product-category/ProductCategory.jsx')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '/sample-page',
      element: <ProductCategory />
    }
  ]
};

export default MainRoutes;
