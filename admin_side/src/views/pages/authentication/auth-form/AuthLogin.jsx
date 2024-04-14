import {Box, Chip, FormControl, FormHelperText, Grid, Grow, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography, useTheme} from '@mui/material'
import AnimateButton from '../../../../components/animatedButton/AnimatedButton'
import { Formik } from 'formik'
import * as Yup from 'yup';
import useScriptRef from '../../../../hooks/useScriptedRef'
import { useState } from 'react';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useAuth } from '../../../../modules/authentication/AuthContext';
import http from '../../../../api/http';
import { LoadingButton } from '@mui/lab';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { Link } from 'react-router-dom';
 
const AuthLogin = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const { setToken } = useAuth();
  const [error, setError] = useState('');
  const [ loginLdngBtn, setloginLdngBtn ] = useState(false);


  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (values) => {
    setloginLdngBtn(true);
    try {
        const response = await http.post('/admin-login', {
            id_number: values.id_number,
            password: values.password
        });
        if (response.status === 200) {
            setToken(response.data.accessToken);
            setloginLdngBtn(false);
        } else {
            throw new Error(response.data.error);
        }
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 400) {
            if (error.response.data.error === "Invalid Id Number") {
                setError("ID Number or password is incorrect.");
                setloginLdngBtn(false);
            } else if (error.response.data.error === "Invalid password!") {
                setError("ID Number or password is incorrect.");
                setloginLdngBtn(false);
            } else if (error.response.data.error === "User is already logged in on another device.") {
                setError("User is already logged in on another device.");
                setloginLdngBtn(false);
            } else if (error.response.data.error === "Account locked. Please contact support.") {
              setError("Account locked. Please contact support.");
              setloginLdngBtn(false);
            } else if (error.response.data.error === "Too many failed attempts. Account locked 10min") {
              setError("Too many failed attempts. Account locked 10min");
              setloginLdngBtn(false);
            }
        } else {
            setError("Server Error");
        }
    }
};

  
  return (
    <>
      <Grid container direction="column" justifyContent="center" sx={{ mb:3 }}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
            {error && <Grow in={true}><Chip icon={<ReportGmailerrorredIcon />} label={<Typography >{error}</Typography>} color="error" sx={{ borderRadius: 1 }} /></Grow>}
        </Grid>
      </Grid>
      <Formik
        initialValues={{
          id_number: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          id_number: Yup.number().typeError('ID Number must be a number').required('ID Number is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          handleSubmit(values);
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.id_number && errors.id_number)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">ID Number</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="id_number"
                value={values.id_number}
                name="id_number"
                onBlur={handleBlur}
                onChange={handleChange}
                label="ID Number"
                inputProps={{}}
              />
              {touched.id_number && errors.id_number && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.id_number}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              <Link to="/forgot-password">
              <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                Forgot Password?
              </Typography>
              </Link>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <LoadingButton disableElevation type="submit" startIcon={<LockOpenIcon size="small" />} disabled={isSubmitting} loading={loginLdngBtn} variant="contained" color="primary" loadingPosition="start" size="large" fullWidth>
                    {loginLdngBtn ? "Signing In ..." : "Sign In"}
                </LoadingButton>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  )
}

export default AuthLogin