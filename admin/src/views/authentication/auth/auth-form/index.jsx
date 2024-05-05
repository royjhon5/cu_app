import { Box, Checkbox, Chip, FormControlLabel, FormGroup, FormHelperText, Grow, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from "@mui/material"
import { Formik } from 'formik'
import * as Yup from 'yup';
import useScriptRef from "../../../../hooks/useScriptRef";
import { useContext, useEffect, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../modules/context/AuthContext";
import LoadingButton from '@mui/lab/LoadingButton';
import InfoIcon from '@mui/icons-material/Info';

const AuthForm = ({ ...others }) => {
  const scriptedRef = useScriptRef();
  const [showPassword, setShowPassword] = useState(false);
  const [ error, setError ] = useState('');
  const { login, logoutMessage, updatePassMessage } = useContext(AuthContext);
  const [ loadingBtn, setLoadingBtn ]  = useState(false);
  const [rememberUsername, setRememberUsername] = useState(false);
  const idNumber = localStorage.getItem('rememberedUsername') || '';
  
  const navigate = useNavigate();
  
  
  
  useEffect(() => {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
      setRememberUsername(true);
    }
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const forgotPassword = () => {
    navigate('/forgot-password');
  }

  const handleSubmit = async (values) => {
    setError(null);
    setLoadingBtn(true);
    try {
      await login(values.id_number, values.password);
      if (rememberUsername) {
        localStorage.setItem('rememberedUsername', values.id_number);
      } else {
        localStorage.removeItem('rememberedUsername');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.error === "Invalid Id Number") {
            setError("ID Number or password is incorrect.");
            setLoadingBtn(false);
        } else if (error.response.data.error === "Invalid password!") {
            setError("ID Number or password is incorrect.");
            setLoadingBtn(false);
        } else if (error.response.data.error === "User is already logged in on another device.") {
            setError("User is already logged in on another device.");
            setLoadingBtn(false);
        } else if (error.response.data.error === "Account locked. Please contact support.") {
          setError("Account locked. Please contact support.");
          setLoadingBtn(false);
        } else if (error.response.data.error === "Too many failed attempts. Account locked 10min") {
          setError("Too many failed attempts. Account locked 10min");
          setLoadingBtn(false);
        }
      } else {
          setError("Server Error");
          setLoadingBtn(false);
      }
    }
  };



  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h2">Sign In</Typography>
      {logoutMessage && ( <Grow in={true}><Paper elevation={0} 
      sx={{ 
        padding: 2, 
        borderRadius: 1, 
        background: '#F44336', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
        }}
        > 
            <Box><InfoIcon fontSize="medium" /></Box>
            <Typography textAlign="justify">{logoutMessage}</Typography>
        </Paper>
        </Grow>
      )}
      {updatePassMessage && ( <Grow in={true}><Paper elevation={0} 
      sx={{ 
        padding: 1.5, 
        borderRadius: 1, 
        background: '#66BB6A', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
        }}
        > 
            <Box><InfoIcon fontSize="medium" /></Box>
            <Typography textAlign="justify">{updatePassMessage}</Typography>
        </Paper>
        </Grow>
      )}
      {error && <Grow in={true}><Chip label={<Typography >{error}</Typography>} color="error" sx={{ borderRadius: 1 }} /></Grow>}
      <Formik
        initialValues={{
          id_number: idNumber,
          password: '',
          submit: null,
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <TextField
                fullWidth
                label="ID Number"
                variant="outlined"
                type="id_number" 
                value={values.id_number}
                name="id_number"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                }}
                error={touched.id_number && Boolean(errors.id_number)}
                helperText={touched.id_number && errors.id_number}
              />

              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
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
                  ),
                }}
              />
            </Box>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={rememberUsername} onChange={(event) => {
                    setRememberUsername(event.target.checked);
                    if (event.target.checked) {
                      localStorage.setItem('rememberedUsername', values.id_number);
                    } else {
                      localStorage.removeItem('rememberedUsername');
                    }
                  }} name="checked" color="primary" />} label={<Typography fontSize="14px" color="primary">Remember Me</Typography>} />
              </FormGroup>
              <Typography fontSize="14px" color="primary" sx={{ textDecoration: 'none', cursor: 'pointer' }} onClick={forgotPassword}>
                Forgot Password?
              </Typography>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <LoadingButton loading={loadingBtn} variant="contained" disabled={isSubmitting} onClick={handleSubmit} fullWidth size="large" type="submit" color="primary">
                  Login
              </LoadingButton>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default AuthForm;