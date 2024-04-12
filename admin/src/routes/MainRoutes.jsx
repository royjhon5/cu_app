import { lazy } from 'react';
import MainLayout from '../layout/MainLayout/index';
import Loadable from '../components/Loadable';
const DashboardDefault = Loadable(lazy(() => import('../views/pages/dashboard/index')));
const ProductCategory = Loadable(lazy(() => import('../views/pages/products/product-category/ProductCategory.jsx')));
const ProductList = Loadable(lazy(() => import('../views/pages/products/product-list/index.jsx')));

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
      path: '/views/products/category',
      element: <ProductCategory />
    },
    {
      path: '/views/products/List',
      element: <ProductList />
    }
  ]
};

export default MainRoutes;
