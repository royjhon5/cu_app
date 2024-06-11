import { Navigate, Outlet } from 'react-router-dom'
import { UseAuth } from '../../modules/context/AuthContext'
import { Box, Container, useTheme } from '@mui/material'
import TopNavigation from './TopNav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import CustomPreLoader from '../../component/CustomPreLoader';
import MainCard from '../../component/Cards/MainCard';
import Footer from '../../component/Cards/Footer';

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
          <div style={{height: '100%'}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
              }}
            >
              <TopNavigation />
              <MainCard>
                  <Container maxWidth={theme.palette.appSettings.stretch === 'true' ? 'lg' : 'xxl'} sx={{mb:'120px'}}>
                    <Outlet />
                  </Container>
              </MainCard>
              <Footer>
                fuck you bro
              </Footer>  
          </Box>  
          </div>
        </>
      )}
    </>
    
  )
}

export default MainLayout