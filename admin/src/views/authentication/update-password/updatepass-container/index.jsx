import { Grid, Typography, useTheme } from "@mui/material"
import UpdateFormPass from "../updatepass-form";
import SendIconSvg from '../../../../components/svg-icons/Sendicon'

const ForgetContainer = () => {
  const theme = useTheme();
  return (
        <Grid container component="main" sx={{ display: 'flex' , flexDirection: 'column', height: '100vh' }}>
            <Grid 
            item 
            xs={12} 
            sm={12} 
            md={12} 
            lg={12} 
            xl={12}
            sx={{
                display: 'flex', 
                flexDirection: 'column', 
                WebkitBoxFlex: 1, 
                flexGrow: 1, 
                WebkitBoxAlign: 1, 
                alignItems: 'center',
                WebkitBoxPack: 'center',
                justifyContent: 'center',
                background: theme.palette.appSettings.paletteMode === 'dark' ? 'linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center / cover no-repeat, url(src/assets/images/overlay_2.jpg)' : 'linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)) center center / cover no-repeat, url(src/assets/images/overlay_2.jpg)',
                backgroundPosition: 'center',
            }}
            >
                <Grid item xs={12} md={6} lg={6} xl={6} sx={{ marginLeft: '24px', marginRight: '24px', width: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                  <SendIconSvg />
                  <Typography variant="h3">Request sent successfully!</Typography>
                  <Typography fontSize="14px">We&apos;ve sent a 6-digit confirmation to your email.Please enter the code in below box to verify your email.</Typography>
                  <UpdateFormPass />
                </Grid>
            </Grid>
        </Grid>
  )
}

export default ForgetContainer