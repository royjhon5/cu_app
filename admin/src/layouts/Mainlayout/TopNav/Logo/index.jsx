import { Box, Stack, useTheme } from "@mui/material"
import CuLog from '../../../../assets/company-logo/cuLogo.png'

const TopNavLogo = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ 
        display:
        theme.palette.appSettings.layout === 'vertical' ? 'none'
        :
        theme.palette.appSettings.layout === 'horizontal' ? 'flex' 
        : 
        'none', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        mr: 3
        }}>
            <Box component="div"
                sx={{
                    width: 40,
                    height: 40,
                    display: 'inline-flex',
                }}
            >
                <img src={CuLog} />
            </Box>
    </Stack>
  )
}

export default TopNavLogo