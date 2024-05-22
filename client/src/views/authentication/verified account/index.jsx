import { Box, Stack, Typography } from "@mui/material"
import CustomContainer from "../../../component/CustomContainer"
import CustomPaper from "../../../component/CustomPaper"
import { Checkmark } from 'react-checkmark'
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import http from "../../../api/http"

const VerifiedAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = new URLSearchParams(location.search).get('token');
        const response = await http.get(`/verify-email?token=${token}`);
        const data = response.data;
        setMessage("Account Verified");
        setInterval(() => {
            navigate('/set-password', {state: { data }})
        }, 1500);
      } catch (error) {
        console.error("Error verifying email:", error);
        setMessage('Invalid or expired token.');
      }
    }; 
    fetchData();
  }, [location.search, navigate]);
  return (
    <CustomContainer>
        <CustomPaper>
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
                <Typography variant='h4'>{message}</Typography>
            </Stack>
        </CustomPaper>
    </CustomContainer>
  )
}

export default VerifiedAccount