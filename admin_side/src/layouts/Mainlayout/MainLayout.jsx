import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../modules/authentication/AuthContext'
const MainLayout = () => {
  const { token } = useAuth();
  if (!token) return <Navigate to="/" />;

  return (
    <>
      <Outlet />
    </>
  )
}

export default MainLayout