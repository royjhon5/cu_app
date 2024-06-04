import { Formik } from "formik";
import * as Yup from 'yup';
import { Box, Chip, FormHelperText, Grow, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import useScriptRef from "../../../../hooks/useScriptRef";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useLocation, useNavigate } from "react-router-dom";
import { WebSocket } from "../../../../main";
import http from "../../../../api/http";
import CustomLoadingButton from "../../../../component/CustomLoadingButton";
import XSDotFlash from "../../../../component/CustomDotFlash/xsDotFlash";
const SetPasswordForm = ({...others}) => {
  const scriptedRef = useScriptRef();
  const [ error, setError ] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const AppSocket = WebSocket();
  const location = useLocation();
  const id_number = location.state.data;
  const [isDisbled, setIsDisabled] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (values) => {
    setIsDisabled(true)
    const password = values.password
    try {
        await http.post('/set-password', {id_number, password});
        
        AppSocket.emit('SubmitNotif');
        AppSocket.emit('ShowNotif');
        AppSocket.emit('playNotifSound');
        AppSocket.emit('ToConfirmEmail');
        setIsDisabled(false)
        setError('Success'); 
        navigate('/user/registration/success', { replace: true })      
    } catch (error) {
        console.error(error)
        setIsDisabled(false)
        setError('Error')
    }
  };
  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb:1 }}>
      <Typography variant="h4">Set Password</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb:1, width: '100%' }}>
    {error && <Grow in={true}><Chip label={<Typography >{error}</Typography>} color="error" sx={{ borderRadius: 1, width: '100%' }} /></Grow>}
    </Box>
    <Formik 
      initialValues={{
        password: '',
        confirmPassword: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().max(255)
          .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:;<>,.?/~`[\]\\=-]).{6,}$/, 'Password must contain at least 1 letter, 1 number, and 1 special character, and be at least 6 characters long')
          .required('Password must contain at least 1 letter, 1 number, and 1 special character, and be at least 6 characters long'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
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
      {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
        <form noValidate onSubmit={handleSubmit} {...others}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mt: '10.5px'}}>
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
              {errors.submit && (
                <FormHelperText error>{errors.submit}</FormHelperText>
              )}
              <TextField
                fullWidth
                label="Confirm Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                helperText={touched.confirmPassword && errors.confirmPassword}
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
              {errors.submit && (
                <FormHelperText error>{errors.submit}</FormHelperText>
              )}
              <CustomLoadingButton
                isDisabled={isDisbled} 
                type="submit"
                btnVariant="contained"
                label={isDisbled ? <>Please wait <Box sx={{ml:1}}><XSDotFlash /></Box></> : 'Set Password'} 
                btnClick={handleSubmit}
              />
            </Box>
        </form>
      )}
    </Formik>
    </>
  )
}

export default SetPasswordForm