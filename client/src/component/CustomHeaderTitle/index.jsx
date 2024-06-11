import { Box } from '@mui/material'
import PropTypes from 'prop-types'
const HeaderTitle = ({title}) => {
  return (
    <Box sx={{
        marginTop: { 
            xs: '24px',
            md: '40px'
        },
        marginBottom: { 
            xs: '24px',
            md: '40px'
        }
    }}>
        {title}
    </Box>
  )
}

HeaderTitle.propTypes = {
    title: PropTypes.node
}


export default HeaderTitle