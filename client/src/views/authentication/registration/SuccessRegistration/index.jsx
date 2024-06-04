import { Box, Stack, Typography } from "@mui/material"
import CustomContainer from "../../../../component/CustomContainer"
import CustomPaper from "../../../../component/CustomPaper"
import { Checkmark } from 'react-checkmark'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

const SuccessRegistration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  })
  
  return (
    <CustomContainer>
        <CustomPaper>
            <Confetti />
            <Box sx={{ padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Checkmark size='xxLarge' />
            </Box>   
            <Stack sx={{
                display: 'flex',
                textAlign: 'center',
                flexDirection: 'column',
                gap: '30px',
                marginTop: '14px',
                marginBottom: '20px'
            }}>
                <Typography variant='h4'>Registered Successfully!</Typography>
                <Typography variant='h5'>Note: Your account is currently pending for approval. We will notify you once it has been fully activated. Thank you for your patience.</Typography>
            </Stack>
        </CustomPaper>
    </CustomContainer>
  )
}

export default SuccessRegistration