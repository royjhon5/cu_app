import { Box, Stack, Typography } from "@mui/material"
import CustomContainer from "../../../../component/CustomContainer"
import CustomPaper from "../../../../component/CustomPaper"
import cuLogo from '../../../../assets/images/cuLogo.png'
import SetPasswordForm from "../form"
const SetPasswordContainer = () => {
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
            <SetPasswordForm />
        </CustomPaper>
    </CustomContainer>
  )
}

export default SetPasswordContainer