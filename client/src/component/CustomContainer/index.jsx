import PropTypes from 'prop-types'
import { Box } from "@mui/material"

const CustomContainer = ({children}) => {
  return (
    <Box component="main" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center', 
        backgroundImage: 'url(src/assets/images/culoginbg.png)',
        backgroundSize: 'cover',
    }}>
        {children}
    </Box>
  )
}

CustomContainer.propTypes = {
    children: PropTypes.any
}

export default CustomContainer