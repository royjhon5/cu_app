
import { Box, Button, FormControl, InputLabel, OutlinedInput, useTheme } from "@mui/material"
import AnimateButton from "../../../../../components/animatedButton/AnimatedButton";
import { useNavigate } from "react-router-dom";
import http from "../../../../../api/http";
import { useState } from "react";

const FindAccountForm = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [ idNumber, setIdnumber ] = useState('');
    const [ userData, setUserData ] = useState([]);

    const backToLogin = () => {
      navigate('/')
    }

    const searchAccount = async () => {
      try {
        const response = await http.get(`/find-user?id_number=${idNumber}`);
        setUserData(response.data);
        navigate(`/forgot-password/verify/sendOtp`)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    console.log(userData)
    
  return (
    <>
    <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
        <InputLabel>ID Number</InputLabel><InputLabel />
        <OutlinedInput 
            value={idNumber}
            onChange={(e) => {setIdnumber(e.target.value)}}
        />
    </FormControl>
    <Box>
    </Box>
    <Box sx={{ mt:2, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <AnimateButton>
          <Button variant="contained" sx={{ mr:1 }} onClick={backToLogin}>
              Cancel
          </Button>
        </AnimateButton>
        <AnimateButton>
        <Button variant="contained" color="secondary" onClick={searchAccount}>
              Search
          </Button>
        </AnimateButton>
    </Box>
    </>
  )
}

export default FindAccountForm