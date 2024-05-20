import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import http from "./api/http";

const ConfirmEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = new URLSearchParams(location.search).get('token');
        const response = await http.get(`/verify-email?token=${token}`);
        const data = response.data;
        setMessage("Email Verified");
        navigate('/set-password', {state: { data }})
      } catch (error) {
        console.error("Error verifying email:", error);
        setMessage('Invalid or expired token.');
      }
    }; 
    fetchData();
  }, [location.search, navigate]);
  return (
    <div>
    <h1>Email Verification</h1>
    {message && <p>{message}</p>}
    </div>     
  )
}

export default ConfirmEmail