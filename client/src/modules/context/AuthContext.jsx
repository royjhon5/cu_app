import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from 'prop-types'; 
import http from '../../api/http';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [ CleintAccessToken, setClientAccessToken ] = useState(null);
  const [ updatePassMessage, setUpdatePassMessage ] = useState(null);
  const [ error, setError ] = useState('');
  const [ loadingBtn, setLoadingBtn ]  = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('CleintAccessToken');
    if (storedToken) {
      const decoded = jwtDecode(storedToken);
      setClientAccessToken(decoded);
      setIsAuthenticated(true);
      checkTokenExpiration(decoded); 
    }
  }, []);

  useEffect(() => {
    let interval;
    if (CleintAccessToken) {
      interval = setInterval(() => {
        checkTokenExpiration(CleintAccessToken);
      }, 1000); 
    }
    return () => clearInterval(interval);
  }, [CleintAccessToken]);

  const checkTokenExpiration = (token) => {
    const currentTime = Date.now() / 1000;
    if (token.exp < currentTime) {
      tokenexpirationLogout(); 
    }
  };

  const login = async (id_number, password) => {
    setLoadingBtn(true);
    try {
      const response = await http.post('/client-login', { id_number, password });
      const decoded = jwtDecode(response.data.clientaccessToken);
      localStorage.setItem('CleintAccessToken', response.data.clientaccessToken);
      setClientAccessToken(decoded);
      setIsAuthenticated(true);
      checkTokenExpiration(decoded);
      setLoadingBtn(false);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        if (error.response.data.error === "Invalid Id Number") {
            setError("ID Number or password is incorrect.");
            setLoadingBtn(false);
        } else if (error.response.data.error === "Invalid password!") {
            setError("ID Number or password is incorrect.");
            setLoadingBtn(false);
        } else if (error.response.data.error === "User is already logged in on another device.") {
            setError("User is already logged in on another device.");
            setLoadingBtn(false);
        } else if (error.response.data.error === "Account locked. Please contact support.") {
          setError("Account locked. Please contact support.");
          setLoadingBtn(false);
        } else if (error.response.data.error === "Your account is currently pending for approval. Please contact the administrator to update your account status.") {
          setError("Your account is currently pending for approval. Please contact the administrator to update your account status.");
          setLoadingBtn(false);
        } else if (error.response.data.error === "Your account has been rejected. Please contact the administrator for further assistance.") {
          setError("Your account has been rejected. Please contact the administrator for further assistance.");
          setLoadingBtn(false);
        } else if (error.response.data.error === "Your account has been banned. Please contact the administrator to resolve this issue.") {
          setError("Your account has been banned. Please contact the administrator to resolve this issue.");
          setLoadingBtn(false);
        }
      } else {
          setError("Server Error");
          setLoadingBtn(false);
      }
    } finally { 
      setLoadingBtn(false);
    }
  };

  const logout = async () => {
    await http.delete('/admin-logout');
    localStorage.removeItem('CleintAccessToken');
    setClientAccessToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setError("Logout successful");
  };

  const userUpdatePassword = async (OTP, password) => {
    await http.get(`/update-password?OTP=${OTP}&newPassword=${password}`);
    setUpdatePassMessage('Password updated, please login your new password.');   
  }

  const tokenexpirationLogout = async () => {
    await http.delete('/admin-logout');
    localStorage.removeItem('CleintAccessToken');
    setClientAccessToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setError("Session expired. For security, inactive accounts auto-logout after 1 day. Please log in again. Thank you.");
  }

  const idleLogout = async () => {
    await http.delete('/admin-logout');
    localStorage.removeItem('CleintAccessToken');
    setClientAccessToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setError("Your session has expired due to 15 minutes of inactivity; you have been automatically logged out.");
  }

  const value = {
    isAuthenticated,
    user,
    CleintAccessToken,
    login,
    logout,
    idleLogout,
    userUpdatePassword,
    updatePassMessage,
    error,
    loadingBtn
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

export const UseAuth = () => {
  return useContext(AuthContext)
}
