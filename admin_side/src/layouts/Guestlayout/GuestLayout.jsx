import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../modules/authentication/AuthContext';


export default function GuestLayout() {
    const { token } = useAuth();
    if (token) return <Navigate to="/dashboard" />;
    return (
        <>
            <Outlet />
        </>
    );
}