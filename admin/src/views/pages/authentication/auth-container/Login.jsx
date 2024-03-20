import { Divider, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import AuthWrapper from '../AuthWrapper'
import AuthLogin from '../auth-form/AuthLogin';
import MainCard from '../../../../components/MainCard';
import AuthFooter from '../../../../components/cards/AuthFooter';
import Customization from '../../../../layout/Customization/index'
const Login = () => {
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
                <Grid item sx={{ mb: 3 }}>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                    <Grid item>
                      <Stack alignItems="center" justifyContent="center" spacing={1}>
                        <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                          Hi, Welcome Back
                        </Typography>
                        <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                          Enter your credentials to continue
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <AuthLogin />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Grid item container direction="column" alignItems="center" xs={12}>
                    <Typography to="/pages/register/register3" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                      Don&apos;t have an account?
                    </Typography>
                  </Grid>
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
  <Customization />
   </>
  )
}

export default Login