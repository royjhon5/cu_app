import { Navigate, Outlet } from 'react-router-dom'
import { UseAuth } from '../../modules/context/AuthContext'

const MainLayout = () => {
  const { accessToken } = UseAuth();
  if (!accessToken) return <Navigate to="/" />;
  return (
    <Outlet /> 
  )
}

export default MainLayout