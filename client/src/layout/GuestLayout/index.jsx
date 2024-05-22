import { Navigate, Outlet } from "react-router-dom"
import { UseAuth } from "../../modules/context/AuthContext"

const GuestLayout = () => {
  const { accessToken } = UseAuth();
  if (accessToken) return <Navigate to="/dashboard" />;
  return (
    <>
    <Outlet />
    </>
  )
}

export default GuestLayout