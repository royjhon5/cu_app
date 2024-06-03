import { Formik } from "formik";
import * as Yup from 'yup';
import useScriptRef from "../../../../hooks/useScriptRef";
import { Box, Chip, FormControl, FormHelperText, Grow, InputAdornment, InputLabel, ListItemText, MenuItem, Select, TextField, Typography } from "@mui/material";
import CustomLoadingButton from "../../../../component/CustomLoadingButton";
import { useEffect, useState } from "react";
import http from "../../../../api/http";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import XSDotFlash from "../../../../component/CustomDotFlash/xsDotFlash";
const RegistrationForm = ({ ...others }) => {
  const scriptedRef = useScriptRef();
  const [ error, setError ] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [roleData, setRoleData] = useState([]);
  const navigate = useNavigate();



  const handleSubmit = async (values) => {
    setError(null);
    setIsDisabled(true);
    try {
        const response = await http.post('/client-register', {
          id_number: values.id_number, 
          first_name: values.first_name,
          last_name: values.last_name, 
          email: values.email,
          contact_no: values.contact_no,
          type_id: values.role
        });
        if (response.status === 200) {
          setIsDisabled(false);
          navigate('/user/registration/success')
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

  useEffect(() => {
    const getRoles = async () => {
        await http.get('/get-roles')
        .then((response) => {
            setRoleData(response.data)
        })
        .catch((err) => {
            toast.error(err, 'Cannot connect to the server!')
        })
      } 
    getRoles()
  }, [])


  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb:1 }}>
      <Typography variant="h4">Sign Up</Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb:1, width: '100%' }}>
    {error && <Grow in={true}><Chip label={<Typography >{error}</Typography>} color="error" sx={{ borderRadius: 1, width: '100%' }} /></Grow>}
    </Box>
    <Formik 
      initialValues={{
        first_name: '',
        last_name: '',
        id_number: '',
        email: '',
        contact_no: '',
        role: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        first_name: Yup.string().typeError('Firstname is required').max(255).required('Firstname is required'),
        last_name: Yup.string().typeError('Lastname is required').max(255).required('Lastname is required'),
        id_number: Yup.number().typeError('ID Number must be a number').required('ID Number is required'),
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        contact_no: Yup.number().typeError('Contact must be a valid Contact Number').required('Contact Number is required'),
        role: Yup.string().required('Role is required')
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
                <TextField
                  fullWidth
                  label="Contact Number"
                  variant="outlined"
                  type="contact_no" 
                  value={values.contact_no}
                  name="contact_no"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.contact_no && Boolean(errors.contact_no)}
                  helperText={touched.contact_no && errors.contact_no}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">63+</InputAdornment>
                  }}
                />
                {errors.submit && (
                  <FormHelperText error>{errors.submit}</FormHelperText>
                )}
                <FormControl>
                  <InputLabel>Role</InputLabel>
                  <Select
                    label="Role"
                    variant="outlined"
                    type="role" 
                    value={values.role}
                    name="role"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={touched.role && Boolean(errors.role)}
                    helpertext={touched.role && errors.role}
                  >
                    {roleData.map((name) => (
                          <MenuItem key={name.id} value={name.id}>
                            <ListItemText primary={name.role} />
                          </MenuItem>
                      ))}
                  </Select>
                  {touched.role && errors.role && (
                  <FormHelperText error>{errors.role}</FormHelperText>
                  )}
                </FormControl>           
                <CustomLoadingButton 
                  btnClick={handleSubmit} 
                  isDisabled={isDisabled} 
                  btnVariant="contained" 
                  label={isDisabled ? <>Creating Account <Box sx={{ ml:1  }}><XSDotFlash /></Box></> : 'Create Account'} 
                  type="submit"
                />
            </Box>   
        </form>
      )}
    </Formik>
    </>
  )
}

export default RegistrationForm