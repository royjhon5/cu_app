import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../modules/context/AuthContext';



export default function GuestLayout() {
    const { accessToken } = useAuth();
    if (accessToken) return <Navigate to="/dashboard" />;
    return (
        <>
            <Outlet />
        </>
    );
}