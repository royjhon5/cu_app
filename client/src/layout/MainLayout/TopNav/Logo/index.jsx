import { Box, Stack, Typography } from '@mui/material'
import CULogoIcon from '../../../../assets/images/cuLogo.png'
const CULogo = () => {
  return (
    <Stack sx={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    }}>
        <Box sx={{
            width: 60,
            height: 50,
            display: 'inline-flex',
        }}>
            <img src={CULogoIcon} />
        </Box>
        <Box 
        sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            WebkitBoxAlign: 'center', 
            alignItems: 'center', 
            WebkitBoxFlex: 1, 
            flexGrow: 1, 
            }}> 
            <Box sx={{ margin: '0px 0px 0px 16px' }}>
                <Box sx={{ flexGrow: 0.5 }}>
                    <Typography fontSize={17}>Capitol University</Typography>
                    <Typography fontSize={15}>Online Giftshop</Typography>
                </Box>
            </Box>   
        </Box>
    </Stack>
  )
}

export default CULogo