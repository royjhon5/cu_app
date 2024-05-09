import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../modules/context/AuthContext';
import SidebarContainer from './Sidebar';
import { Box, Container, useTheme } from '@mui/material'
import TopNav from './TopNav';
import { useIdleTimer } from 'react-idle-timer';


const MainLayout = () => {
  const theme = useTheme();
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
        <Box className='app'>
          <SidebarContainer /> 
            <Box className='content'>
              <TopNav />   
                <Box component="main" sx={{ flexGrow: 1 }}>
                  <Container component="main" maxWidth={theme.palette.appSettings.stretch === 'true' ? "lg" : 'xl'} sx={{ p:4, transition: 'all .2s ease-in-out' }}>
                    <Outlet /> 
                  </Container>  
                </Box>
            </Box>
        </Box>   
    </>
  )
}

export default MainLayout