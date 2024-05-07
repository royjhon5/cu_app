import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../modules/context/AuthContext';
import SidebarContainer from './Sidebar';
import { Box, Container, useTheme } from '@mui/material'
import TopNav from './TopNav';
import { useIdleTimer } from 'react-idle-timer'


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

  console.log("\x1b[31m" + `
  ███████   ███████ 
  ██    ██       ██  
  ███████        ██ 
  ██  ██   ██    ██
  ██    ██   ██████
  ` +"\x1b[0m");
  return (
    <>
      <Box sx={{ display: 'flex'}}>   
        <SidebarContainer />     
          <Box sx={{ flexGrow: 1 }}>
            <TopNav />   
            <Container component="main" maxWidth={theme.palette.appSettings.stretch === 'true' ? "lg" : 'xl'} sx={{ p:4, transition: 'all .2s ease-in-out' }}>
              <Outlet /> 
            </Container>  
          </Box>
      </Box>  
    </>
  )
}

export default MainLayout