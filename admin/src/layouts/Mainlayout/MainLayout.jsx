import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../modules/context/AuthContext';
import { Box, Container, useTheme } from '@mui/material'
import TopNav from './TopNav';
import { useIdleTimer } from 'react-idle-timer';
import { motion } from 'framer-motion';
import Nav from './Sidebar/Sidebar';
import MainCard from '../../components/Cards/MainCard';



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
        <TopNav />
        <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <Nav />
          <MainCard>
          <motion.div layout>
            <Container maxWidth={theme.palette.appSettings.stretch === 'true' ? 'xl' : 'xxl'}>
              <Outlet />
            </Container>
          </motion.div>
          </MainCard>
      </Box>
    </>
  )
}

export default MainLayout