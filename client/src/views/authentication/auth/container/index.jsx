import { Box, Stack, Typography } from "@mui/material"
import CustomContainer from "../../../../component/CustomContainer"
import CustomPaper from "../../../../component/CustomPaper"
import cuLogo from '../../../../assets/images/cuLogo.png'
import LoginForm from "../form"
import { useNavigate } from "react-router-dom"
const LoginContainer = () => {
  const navigate = useNavigate();

  const createAccount = () => {
    navigate('/user/registration');
  }
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
                marginBottom: '60px'
            }}>
                <Typography variant='h4' color="#9f1e22">Capitol University</Typography>
                <Typography variant='h5' color="#9f1e22">Giftshop</Typography>
            </Stack>
            <LoginForm />
            <Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
            <Typography fontSize="14px">New User? </Typography>
            <Typography onClick={createAccount} fontSize="14px" color="primary" sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' }, ml: 0.5 }}>Create an Account</Typography>
            <Box sx={{ flexGrow: 1}}></Box>
            <Typography fontSize="14px" sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>Forgot password? </Typography>
            </Box>
            
      </CustomPaper>
    </CustomContainer>
  )
}

export default LoginContainer