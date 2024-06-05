import { Navigate, Outlet } from "react-router-dom"
import { UseAuth } from "../../modules/context/AuthContext"
import CSRGuestMessage from "../../component/CSRGuestMessage";

const GuestLayout = () => {
  const { CleintAccessToken } = UseAuth();
  if (CleintAccessToken) return <Navigate to="/main" />;
  return (
    <>
    <Outlet />
    <CSRGuestMessage />
    </>
  )
}

export default GuestLayout