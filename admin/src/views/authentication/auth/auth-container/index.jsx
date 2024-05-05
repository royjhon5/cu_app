import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import loginImg from '../../../../assets/images/loginbg.png'
import AuthForm from "../auth-form";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

export default function SignInSide() {
  const isMobile = useMediaQuery('(max-width:900px)');
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  return (
    <Fragment>
        <Helmet>
          <title>CU Admin: Login</title>
        </Helmet>
        <Grid container component="main" sx={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
        <Grid 
          item
          xs={false}
          sm={false}
          md={6}
          lg={7.5}
          xl={9}
          sx={{
              display: 'flex', 
              flexDirection: 'column', 
              WebkitBoxFlex: 1, 
              flexGrow: 1, 
              gap: '80px',
              WebkitBoxAlign: 1, 
              alignItems: 'center',
              WebkitBoxPack: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center / cover no-repeat, url(src/assets/images/overlay_2.jpg)',
              backgroundPosition: 'center'
          }}
        >
           {!isMobile && (
              <>
                <Typography variant="h2">
                  Hi, Welcome Back
                </Typography>
                <img src={loginImg} alt="Login" style={{ maxWidth: isSmallScreen ? '80%' : '100%', height: 'auto',}} />
                <Box>
                <Typography variant="h5">
                  Copyright
                </Typography>
                </Box>
              </>
           )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4.5} xl={3}>
          <Box
            sx={{
              padding: '64px',
              my: 25,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              <AuthForm />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}