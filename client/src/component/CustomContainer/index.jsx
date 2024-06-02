import PropTypes from 'prop-types'
import { Box } from "@mui/material"
import bgImage from '../../assets/images/culoginbg.png'

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
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        padding: 2
    }}>
        {children}
    </Box>
  )
}

CustomContainer.propTypes = {
    children: PropTypes.any
}

export default CustomContainer