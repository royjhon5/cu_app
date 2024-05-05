import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from 'prop-types'; 
import http from '../../api/http';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [logoutMessage, setLogoutMessage] = useState(null);
  const [ updatePassMessage, setUpdatePassMessage ] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      const decoded = jwtDecode(storedToken);
      setAccessToken(decoded);
      setIsAuthenticated(true);
      checkTokenExpiration(decoded); 
    }
  }, []);

  useEffect(() => {
    let interval;
    if (accessToken) {
      interval = setInterval(() => {
        checkTokenExpiration(accessToken);
      }, 1000); 
    }
    return () => clearInterval(interval);
  }, [accessToken]);

  const checkTokenExpiration = (token) => {
    const currentTime = Date.now() / 1000;
    if (token.exp < currentTime) {
      tokenexpirationLogout(); 
    }
  };

  const login = async (id_number, password) => {
    try {
      const response = await http.post('/admin-login', { id_number, password });
      const decoded = jwtDecode(response.data.accessToken);
      localStorage.setItem('accessToken', response.data.accessToken);
      setAccessToken(decoded);
      setIsAuthenticated(true);
      checkTokenExpiration(decoded);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async () => {
    await http.delete('/admin-logout');
    localStorage.removeItem('accessToken');
    setAccessToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setLogoutMessage("Logout successful");
  };

  const userUpdatePassword = async (OTP, password) => {
    await http.get(`/update-password?OTP=${OTP}&newPassword=${password}`);
    setUpdatePassMessage('Password updated, please login your new password.');   
  }

  const tokenexpirationLogout = async () => {
    await http.delete('/admin-logout');
    localStorage.removeItem('accessToken');
    setAccessToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setLogoutMessage("Session expired. For security, inactive accounts auto-logout after 1 day. Please log in again. Thank you.");
  }

  const idleLogout = async () => {
    await http.delete('/admin-logout');
    localStorage.removeItem('accessToken');
    setAccessToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setLogoutMessage("Your session has expired due to 15 minutes of inactivity; you have been automatically logged out.");
  }

  const value = {
    isAuthenticated,
    user,
    accessToken,
    login,
    logout,
    logoutMessage,
    idleLogout,
    userUpdatePassword,
    updatePassMessage
  };
    
  return (
      <AuthContext.Provider value={value}>
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
