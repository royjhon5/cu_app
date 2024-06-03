import { Navigate, Outlet } from "react-router-dom"
import { UseAuth } from "../../modules/context/AuthContext"

const GuestLayout = () => {
  const { CleintAccessToken } = UseAuth();
  if (CleintAccessToken) return <Navigate to="/main" />;
  return (
    <>
    <Outlet />
    </>
  )
}

export default GuestLayout