import { Formik } from "formik";
import * as Yup from 'yup';
import useScriptRef from "../../../../hooks/useScriptRef";
import { Box, Chip, FormHelperText, Grow, TextField, Typography } from "@mui/material";
import CustomLoadingButton from "../../../../component/CustomLoadingButton";
import { useState } from "react";
import http from "../../../../api/http";
const RegistrationForm = ({ ...others }) => {
  const scriptedRef = useScriptRef();
  const [ error, setError ] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const SubmitRegistration = async (values) => {
    setError(null);
    setIsDisabled(true);
    try {
        const response = await http.post(`/client-register`, {
          first_name: values.first_name,
          last_name: values.last_name,
          id_number: values.id_number,
          email: values.email
        });
        if (response.status === 200) {
          setIsDisabled(false);
        } else {
          throw new Error(response.data.error)
        }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.error === "Invalid Id Number") {
          setIsDisabled(false);
            setError("ID Number or password is incorrect.");
        } else if (error.response.data.error === "Email already exist!") {
          setIsDisabled(false);
          setError("Email already exist!");
        } 
      } else {
          setIsDisabled(false);
          setError("Server Error");
      }
    }
  };


  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb:3 }}>
      <Typography variant="h4">Sign Up</Typography>
    </Box>
    {error && <Grow in={true}><Chip label={<Typography >{error}</Typography>} color="error" sx={{ borderRadius: 1 }} /></Grow>}
    <Formik 
      initialValues={{
        first_name: '',
        last_name: '',
        id_number: '',
        email: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        first_name: Yup.string().typeError('Firstname is required').max(255).required('Firstname is required'),
        last_name: Yup.string().typeError('Lastname is required').max(255).required('Lastname is required'),
        id_number: Yup.number().typeError('ID Number must be a number').required('ID Number is required'),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        SubmitRegistration(values);
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
            <Box sx={{ display: 
              'grid', 
              gap: '10px',
              gridTemplateColumns: {
                xl: 'repeat(2, 1fr)',
                lg: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
                sm: 'repeat(1, 1fr)', 
                xs: 'repeat(1, 1fr)'
              }  
              }}>
              <TextField
                fullWidth
                label="First name"
                variant="outlined"
                type="first_name" 
                value={values.first_name}
                name="first_name"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.first_name && Boolean(errors.first_name)}
                helperText={touched.first_name && errors.first_name}
              />
              {errors.submit && (
                <FormHelperText error>{errors.submit}</FormHelperText>
              )}
              <TextField
                fullWidth
                label="Last name"
                variant="outlined"
                type="last_name" 
                value={values.last_name}
                name="last_name"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.last_name && Boolean(errors.last_name)}
                helperText={touched.last_name && errors.last_name}
              />
              {errors.submit && (
                <FormHelperText error>{errors.submit}</FormHelperText>
              )}
            </Box>
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
                  label="Email address"
                  variant="outlined"
                  type="email" 
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                {errors.submit && (
                  <FormHelperText error>{errors.submit}</FormHelperText>
                )}
                <CustomLoadingButton 
                btnClick={SubmitRegistration} 
                isDisabled={isSubmitting} 
                btnVariant="contained" 
                label={isDisabled ? 'Creating Account...' : 'Create Account'} 
                />
            </Box>
            
        </form>
      )}
    </Formik>
    </>
  )
}

export default RegistrationForm