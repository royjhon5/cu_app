import { Divider, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import AuthWrapper from '../../AuthWrapper'
import MainCard from '../../../../../components/cards/MainCard';
import AuthFooter from '../../../../../components/cards/AuthFooter';
import FindAccountForm from './findAccountForm';
const ToSendOtp  = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'))
  return (
   <>
    <AuthWrapper>
    <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
          <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <MainCard 
              sx={{
                maxWidth: { xs: 400, lg: 475 },
                margin: { xs: 2.5, md: 3 },
                '& > *': {
                  flexGrow: 1,
                  flexBasis: '50%'
                }
              }}
              >
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item sx={{ mb: 1 }}>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction={matchDownSM ? 'column-reverse' : 'row'}>
                    <Grid item>
                      <Stack spacing={1}>
                        <Typography color={theme.palette.secondary.main} variant={matchDownSM ? 'h5' : 'h4'}>
                            Find Your Account
                        </Typography>
                        <Divider />
                        <Typography fontSize="16px" textAlign={matchDownSM ? 'inherit' : 'inherit'}>
                            Please enter your email address or mobile number to search for your account.
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <FindAccountForm />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </Grid>
              </MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
        <AuthFooter />
      </Grid>
    </Grid>
  </AuthWrapper>
   </>
  )
}

export default ToSendOtp