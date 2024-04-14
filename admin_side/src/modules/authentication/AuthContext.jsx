import { createContext, useState, useContext, useEffect } from "react"
import PropTypes from 'prop-types'; 
import http from '../../api/http';
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext({
    token: null,
    setUser: () => {},
    csrfToken: () => {}
});
export const AuthProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);
  

  const refreshToken = async () => {
    try {
        const response = await http.get('/token');
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
    } catch (error) {
        if (error.response) {
          return
        }
    }
  }

  const axiosJWT = http.create();
  axiosJWT.interceptors.request.use(async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
          const response = await http.get('/token');
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwtDecode(response.data.accessToken);
          setName(decoded.name);
          setExpire(decoded.exp);
      }
      return config;
  }, (error) => {
      return Promise.reject(error);
  });

  const getUsers = async () => {
    const response = await axiosJWT.get('/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    setUsers(response.data);
  }
    
    return (
        <AuthContext.Provider value={{ token, setToken, name, users }}>
          {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useAuth = () => {
  return useContext(AuthContext)
}
