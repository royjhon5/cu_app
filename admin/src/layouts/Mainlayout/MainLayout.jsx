import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../modules/context/AuthContext';
import { Box, Container, useTheme } from '@mui/material'
import TopNav from './TopNav';
import { useIdleTimer } from 'react-idle-timer';
import { motion } from 'framer-motion';
import Nav from './Sidebar/Sidebar';
import MainCard from '../../components/Cards/MainCard';
import PageLoader from '../../components/Loaders/SteveBlox';
import { useEffect, useState } from 'react';
import ToastNotification from '../../components/ToastNotification';
import useSound from 'use-sound';
import notifSound from '../../assets/NotifSound/notifSound.mp3'
import { WebSocket } from '../../main';
import http from '../../api/http';



const MainLayout = () => {
  const theme = useTheme();
  const { accessToken, idleLogout } = useAuth();
  const [loading, setLoading] = useState(false);
  const AppSocket = WebSocket()
  const [play] = useSound(notifSound)
  const handleIdleTimeout = () => {
    idleLogout();
  };

  useEffect(() => {  
    const playSoundNotif = () => {
      play();
    };
    AppSocket.on('NotifSound', playSoundNotif);
    return () => {
      AppSocket.off('NotifSound');
    };
  }, [AppSocket, play]);

  const { start  } = useIdleTimer({
    timeout: 15 * 60 * 1000,
    onIdle: handleIdleTimeout,
  });

  const fetchData = async () => {
    setLoading(true);
    await http('/get-roles').then(() => {
    })
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (!accessToken) return <Navigate to="/" />;
  else start();

  
  return (
    <>  
      {loading ? ( <Box className="loading"><PageLoader /></Box>  ) : (
        <>
        <ToastNotification />
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
      )}

    </>
  )
}

export default MainLayout