import { Formik } from "formik";
import * as Yup from 'yup';
import useScriptRef from "../../../../hooks/useScriptRef";
import { Box, Chip, FormHelperText, Grow, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import CustomLoadingButton from "../../../../component/CustomLoadingButton";
import { useState } from "react";
import http from "../../../../api/http";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginForm = ({...others}) => {
  const scriptedRef = useScriptRef();
  const [ error, setError ] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (values) => {
    setError(null);
    setIsDisabled(true);
    try {
        const response = await http.post('/client-register', {
          id_number: values.id_number, 
          first_name: values.first_name,
          last_name: values.last_name, 
          email: values.email
        });
        if (response.status === 200) {
          setIsDisabled(false);
          clearData();
        } else {
          throw new Error(response.data.error)
        }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.error === "ID Number already exist!") {
          setIsDisabled(false);
            setError("ID Number already exist!");
        } else if (error.response.data.error === "Email address already exist!") {
          setIsDisabled(false);
          setError("Email address already exist!");
        } 
      } else {
          setIsDisabled(false);
          setError("Server lost connection");
      }
    }
  };

  const clearData = (values) => {
    values.first_name = ''
    values.last_name = ''
    values.id_number = ''
    values.email = ''
  }


  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb:1 }}>
      <Typography variant="h4">Sign In</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb:1, width: '100%' }}>
    {error && <Grow in={true}><Chip label={<Typography >{error}</Typography>} color="error" sx={{ borderRadius: 1, width: '100%' }} /></Grow>}
    </Box>
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
      {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
        <form noValidate onSubmit={handleSubmit} {...others}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', mt: '10.5px'}}>
              <TextField
                  fullWidth
                  label="ID Number (Student, Faculty, Staff)"
                  variant="outlined"
                  type="id_number" 
                  value={values.id_number}
                  name="id_number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.id_number && Boolean(errors.id_number)}
                  helperText={touched.id_number && errors.id_number}
                />
                {errors.submit && (
                  <FormHelperText error>{errors.submit}</FormHelperText>
                )}
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
              <CustomLoadingButton 
                btnClick={handleSubmit} 
                isDisabled={isDisabled} 
                btnVariant="contained" 
                label={isDisabled ? 'Logging In...' : 'Login'} 
              />
            </Box>
            
        </form>
      )}
    </Formik>
    </>
  )
}

export default LoginForm