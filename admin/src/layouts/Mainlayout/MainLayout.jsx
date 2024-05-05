import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../modules/context/AuthContext';
import SidebarContainer from './Sidebar';
import { Box, Container } from '@mui/material'
import TopNav from './TopNav';
import { useIdleTimer } from 'react-idle-timer'


const MainLayout = () => {
  const { accessToken, idleLogout } = useAuth();
  const handleIdleTimeout = () => {
    idleLogout();
  };

  const { start  } = useIdleTimer({
    timeout: 15 * 60 * 1000,
    onIdle: handleIdleTimeout,
  });


  if (!accessToken) return <Navigate to="/" />;
  else start();


  return (
    <>
      <Box sx={{ display: 'flex'}}>   
        <SidebarContainer />     
          <Box sx={{ flexGrow: 1 }}>
            <TopNav />   
            <Container component="main" maxWidth="xl" sx={{ p:4 }}>
              <Outlet /> 
            </Container>  
          </Box>
      </Box>  
    </>
  )
}

export default MainLayout