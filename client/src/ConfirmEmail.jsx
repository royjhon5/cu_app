import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import http from "./api/http";

const ConfirmEmail = () => {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');

  useEffect(() => {
    const confirmEmail = async () => {
        try {
            await http.get(`/confirm-email?token=${token}`);
        } catch (err) {
            alert('Invalid or expired token');
        }
      };
    confirmEmail();
    }, [token]);
  return (
    <div>Confirming email...</div>
  )
}

export default ConfirmEmail