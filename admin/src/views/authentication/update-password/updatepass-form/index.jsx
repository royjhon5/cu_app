import { Box, Chip, CircularProgress, FormHelperText, Grow, IconButton, InputAdornment, Snackbar, TextField, Typography } from "@mui/material"
import { Formik } from "formik";
import * as Yup from 'yup';
import useScriptRef from "../../../../hooks/useScriptRef";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import http from "../../../../api/http";
import { useLocation, useNavigate } from "react-router-dom";
import { MuiOtpInput } from 'mui-one-time-password-input'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useEffect } from "react";
import { useAuth } from "../../../../modules/context/AuthContext";
import CustomLoadingButton from "../../../../components/CustomLoadingButton";

const UpdateFormPass = ({ ...others }) => {
  const scriptedRef = useScriptRef();
  const [ error, setError ] = useState('');
  const [ loadingBtn, setLoadingBtn ]  = useState(false);
  const navigate = useNavigate();
  const [OtpValue, setOtpValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const userData = location.state.data;
  const [ openToast, setOpenToast ] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { userUpdatePassword } = useAuth();

  const handleChangeOtp = (newValue) => {
    setOtpValue(newValue)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const storedCountdown = localStorage.getItem('countdown');
    if (storedCountdown) {
      setCountdown(parseInt(storedCountdown));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('countdown', countdown);
  }, [countdown]);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    return () => {
      localStorage.removeItem('countdown');
    };
  }, []);
  
  const handleSubmit = async (values) => {
    setError(null);
    setLoadingBtn(true);
    try {
      await userUpdatePassword(OtpValue, values.password)
      setLoadingBtn(false);
      navigate('/');     
    } catch (error) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.error === "Invalid OTP") {
            setError("OTP Is Invalid");
            setLoadingBtn(false);
        } else if (error.response.data.error === "Account locked. Please contact support.") {
          setError("Account locked. Please contact support.");
          setLoadingBtn(false);
        } 
      } else {
          setError("Server Error");
          setLoadingBtn(false);
      }
    }
  };

  const GoBackToSignIn = () => {
    navigate('/')
  }

  const closeToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToast(false);
  };


  const RequestResend = async () => {
    setResendLoading(true);
    try {
        const response = await http.get(`/find-user?id_number=${userData.id_number}`);
        const data = response.data;
        console.log(data)
        if (response.status === 200) {
            setOpenToast(true);
            setCountdown(60);
        } else {
          throw new Error(response.data.error)
        }
        setTimeout(() => {
          setOpenToast(true);
          setCountdown(60);
          setResendLoading(false);
        }, 1000);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.error === "Invalid Id Number") {
            setError("ID Number or password is incorrect.");
        } else if (error.response.data.error === "Account locked. Please contact support.") {
          setError("Account locked. Please contact support.");
        } 
      } else {
          setError("Server Error");
          setLoadingBtn(false);
      }
    }
  };

  return (
    <>
    <Snackbar open={openToast} autoHideDuration={6000} message="Request Sent Successfully" onClose={closeToast} />
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {error && <Grow in={true}><Chip label={<Typography >{error}</Typography>} color="error" sx={{ borderRadius: 1 }} /></Grow>}
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <TextField
                fullWidth
                label="ID Number"
                variant="outlined"
                value={userData.id_number}
              />
              <MuiOtpInput length={6} value={OtpValue} onChange={handleChangeOtp} />
              <TextField
                fullWidth
                label="New Password"
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
            </Box>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <CustomLoadingButton 
                btnClick={handleSubmit}
                isDisabled={loadingBtn}
                btnVariant="contained"
                label={loadingBtn ? 'Changing Password ...' : 'Change Password'}
                type="submit"
              />
            </Box>
          </form>
        )}
      </Formik>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Typography fontSize="14px">Don’t have a code?</Typography>
          {resendLoading ? (
            <CircularProgress size={14} sx={{ ml:2 }} />
          ) : (
            ''
          )}
          {!resendLoading && countdown === 0 && (
            <Typography onClick={RequestResend} fontSize="14px" color="primary" sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' }, ml: 0.5 }}>Resend code</Typography>
          )}
          {!resendLoading && countdown > 0 && (
            <Typography fontSize="14px" color="primary" ml={0.5}>{`Resend code in ${countdown} seconds`}</Typography>
          )}
        </Box>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <ArrowBackIosIcon sx={{ fontSize: '12px' }} /><Typography onClick={GoBackToSignIn} fontSize="14px" sx={{ '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>Return to sign in</Typography>
      </Box>
    </Box>
    </>
  )
}

export default UpdateFormPass