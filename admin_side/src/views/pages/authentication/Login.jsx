
import { useState } from 'react';
import http from '../../../api/http'
import { useAuth } from '../../../modules/authentication/AuthContext';


const Login = () => {
  const [error, setError] = useState('');
  const { setToken } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    const { id_number, password } = e.target.elements;
    const body = {
      id_number: id_number.value,
      password: password.value
    }
    const response = await http.post('/admin-login', body)
    if (response.status === 200) {
      setToken(response.data.accessToken);
    } else if (error.response.status === 400) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id_number" placeholder="ID Number" id="id_number" />
        <input type="password" name="password" placeholder="Password" id="password" />
        <button type="submit">Login</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;