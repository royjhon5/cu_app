import { useState } from "react";
import { useLocation } from 'react-router-dom'
import http from "../../../client/src/api/http";


const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const id_number = location.state.data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await http.post('/set-password', { id_number, password });
        setMessage('Password set successfully.');
    } catch (error) {
        setMessage('Failed to set password.');
    }
  };
  return (
    <div>
        <h1>Set Password</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Set Password</button>
        </form>
        {message && <p>{message}</p>}
    </div>
  )
}

export default SetPassword