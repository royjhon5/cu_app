import { Navigate, Outlet } from 'react-router-dom'
import { UseAuth } from '../../modules/context/AuthContext'
import { Box, Container, useTheme } from '@mui/material'
import MainCard from '../../component/Cards/MainCard';
import { motion } from 'framer-motion';
import TopNavigation from './TopNav';

const MainLayout = () => {
  const { CleintAccessToken } = UseAuth();
  const theme = useTheme()
  if (!CleintAccessToken) return <Navigate to="/" />;
  return (
    <>
      <TopNavigation />
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
      <MainCard>
        <motion.div layout>
          <Container maxWidth={theme.palette.appSettings.stretch === 'true' ? 'lg' : 'xl'}>
            <Outlet />
          </Container>
        </motion.div>
      </MainCard>  
      </Box>  
    </>
    
  )
}

export default MainLayout