import { Box, Stack, Typography } from '@mui/material'
import cuLogo from '../../../../assets/images/cuLogo.png'
import RegistrationForm from '../form'
import CustomContainer from '../../../../component/CustomContainer'
import CustomPaper from '../../../../component/CustomPaper'
import { useNavigate } from 'react-router-dom'
const RegistrationContainer = () => {
  const navigate = useNavigate();
  const userLogin = () => {navigate('/')}


  return (
    <CustomContainer>
        <CustomPaper>
            
            <Box sx={{ padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={cuLogo} style={{ padding: 0, height: '30%', width: '30%' }} />
            </Box>
            <Stack sx={{
                display: 'flex',
                textAlign: 'center',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '14px',
                marginBottom: '45px'
            }}>
                <Typography variant='h3' color="#9f1e22">Capitol University</Typography>
                <Typography variant='h5' color="#9f1e22">Giftshop</Typography>
            </Stack>
                <RegistrationForm />
                <Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <Typography fontSize="14px">Already have an account? </Typography>
                    <Typography onClick={userLogin} fontSize="14px" color="primary" sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' }, ml: 0.5 }}>Sign In</Typography>
                </Box>
        </CustomPaper>
    </CustomContainer>
  )
}

export default RegistrationContainer