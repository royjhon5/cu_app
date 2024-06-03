import { Formik } from "formik";
import * as Yup from 'yup';
import useScriptRef from "../../../../hooks/useScriptRef";
import { Box, Chip, FormHelperText, Grow, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import CustomLoadingButton from "../../../../component/CustomLoadingButton";
import { useContext, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import XSDotFlash from "../../../../component/CustomDotFlash/xsDotFlash";
import { AuthContext } from "../../../../modules/context/AuthContext";
import InfoIcon from '@mui/icons-material/Info';

const LoginForm = ({...others}) => {
  const scriptedRef = useScriptRef();
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, error, updatePassMessage } = useContext(AuthContext)


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (values) => {
    setIsDisabled(true)
    try {
      await login(values.id_number, values.password);
    } catch (error) {
      console.error(error)
    } finally {
      setIsDisabled(false)
    }
  };




  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb:1 }}>
      <Typography variant="h4">Sign In</Typography>
    </Box>
    {error ? (
        <Grow in={true}>
          <Chip
            icon={<InfoIcon />}
            label={<Typography textAlign="justify" sx={{ ml: 1 }}>{error}</Typography>}
            color="error"
            sx={{
              borderRadius: 1,
              height: 'auto',
              '& .MuiChip-label': {
                display: 'block',
                whiteSpace: 'normal',
                padding: 1
              }
            }}
          />
        </Grow>
      ) : updatePassMessage ? (
        <Grow in={true}>
          <Paper
            elevation={0}
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
      ) : ( '' )}
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
                label={isDisabled ? <>Please wait <Box sx={{ml:1}}><XSDotFlash /></Box></> : 'Login'} 
              />
            </Box>
            
        </form>
      )}
    </Formik>
    </>
  )
}

export default LoginForm