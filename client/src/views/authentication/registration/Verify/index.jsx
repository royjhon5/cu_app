import { Box, Grow, Stack, Typography } from "@mui/material"
import CustomContainer from "../../../../component/CustomContainer"
import CustomPaper from "../../../../component/CustomPaper"
import EmailImage from '../../../../assets/images/mail.png'
import MDDotFlash from "../../../../component/CustomDotFlash/mdDotflash"
import { useEffect, useState } from "react"
import { Checkmark } from 'react-checkmark'
import { WebSocket } from "../../../../main"

const VerifyEmail = () => {
  const [isConfirm, setIsComfirm] = useState(false);
  const AppSocket = WebSocket();

  useEffect(() => {  
    AppSocket.on('EmailConfirmed', () => {
        setIsComfirm(true)
    })
    return () => {
      AppSocket.off('EmailConfirmed');
    };
  }, [AppSocket]);
  
  return (
    <CustomContainer>
        <CustomPaper>
            <Box sx={{ padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap :5}}>
                {isConfirm ? <Checkmark size='xxLarge' />
                :  
                <img src={EmailImage} style={{ height: '25%' , width: '25%'}} />
                }
            </Box>
            <Stack sx={{
                display: 'flex',
                textAlign: 'center',
                flexDirection: 'column',
                gap: isConfirm ? '5px' : '30px',
                marginTop: '14px',
                marginBottom: '20px'
            }}>
                {isConfirm ? 
                <>
                <Grow in="true"><Typography variant='h4'>Congratulations!</Typography></Grow>
                <Grow in="true"><Typography variant='h5'>Email verified</Typography></Grow>      
                </>
                :
                <>
                <Grow in="true"><Typography variant='h4'>Your almost there!</Typography></Grow>
                <Grow in="true"><Typography variant='h5'>We have sent a confirmation email to your provided email address to verify your account.</Typography></Grow>
                <Grow in="true"><Typography>Waiting for confirmation <MDDotFlash/></Typography></Grow>
                </>
                }
            </Stack>
        </CustomPaper>
    </CustomContainer>
  )
}

export default VerifyEmail