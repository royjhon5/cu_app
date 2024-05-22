import { Box, Stack, Typography } from "@mui/material"
import CustomContainer from "../../../../component/CustomContainer"
import CustomPaper from "../../../../component/CustomPaper"
import { Checkmark } from 'react-checkmark'
import Confetti from 'react-confetti'

const SuccessRegistration = () => {
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
                <Typography variant='h5'>We have sent a confirmation email to your provided email address to verify your account.</Typography>
            </Stack>
        </CustomPaper>
    </CustomContainer>
  )
}

export default SuccessRegistration