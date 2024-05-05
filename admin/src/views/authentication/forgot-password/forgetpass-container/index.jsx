import { Grid, Typography } from "@mui/material"
import ForgetpassForm from "../forgetpass-form";
import Forgotpassowrdicon from "../../../../components/svg-icons/Forgotpassowrdicon";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

const ForgetContainer = () => {
  return (
      <Fragment>
        <Helmet>
          <title>CU Admin: Forgot Password</title>
        </Helmet>
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
                background: 'linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center / cover no-repeat, url(src/assets/images/overlay_2.jpg)',
                backgroundPosition: 'center',
            }}
            >
                <Grid item xs={12} md={6} lg={6} xl={6} sx={{ marginLeft: '24px', marginRight: '24px', width: '400px', textAlign: 'center', marginTop: '70px', marginBottom: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                  <Forgotpassowrdicon />
                  <Typography variant="h4" sx={{ color: 'white' }}>Forgot your password?</Typography>
                  <Typography fontSize="14px" sx={{ color: 'white' }}>Please enter the ID Number associated with your account and We will email you a link to reset your password.</Typography>
                  <ForgetpassForm />
                </Grid>
            </Grid>
        </Grid>
      </Fragment>
  )
}

export default ForgetContainer