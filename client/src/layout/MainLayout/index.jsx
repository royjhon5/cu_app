import { Navigate, Outlet } from 'react-router-dom'
import { UseAuth } from '../../modules/context/AuthContext'
import { Box, Container, useTheme } from '@mui/material'
import MainCard from '../../component/Cards/MainCard';
import { motion } from 'framer-motion';
import TopNavigation from './TopNav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import CustomPreLoader from '../../component/CustomPreLoader';

const MainLayout = () => {
  const { CleintAccessToken } = UseAuth();
  const [loading, setLoading] = useState(false);
  const theme = useTheme()

  useEffect(() => {
    setLoading(true)
    const getRoles = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(() => {
        })
        .catch((err) => {
          toast.error(err)
        })
        .finally(() => {
          setLoading(false)
        })
      } 
    getRoles()
  }, [])

  if (!CleintAccessToken) return <Navigate to="/" />;
  return (
    <>
      {loading ? ( <CustomPreLoader /> ) : (
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
      )}
    </>
    
  )
}

export default MainLayout