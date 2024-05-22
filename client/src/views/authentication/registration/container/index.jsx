import { Box, Link, Stack, Typography } from '@mui/material'
import cuLogo from '../../../../assets/images/cuLogo.png'
import RegistrationForm from '../form'
import CustomContainer from '../../../../component/CustomContainer'
import CustomPaper from '../../../../component/CustomPaper'
const RegistrationContainer = () => {
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
                <RegistrationForm />
                <Typography fontSize="12px" sx={{ mt:1 }}>Already have an account? <span><Link>Sign In</Link></span></Typography>
        </CustomPaper>
    </CustomContainer>
  )
}

export default RegistrationContainer