import { Box } from "@mui/material"
import PropTypes from 'prop-types'

const Footer = ({children}) => {
  return (
    <Box component="footer" sx={{
        position: 'relative',
        display: 'block'
      }}>
        {children}
    </Box>
  )
}

Footer.propTypes = { 
    children: PropTypes.node
}

export default Footer