import PropTypes from 'prop-types'
import { Paper } from '@mui/material'

const CustomPaper = ({children}) => {
  return (
    <Paper
        sx={{
            backgroundImage: 'none',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 0,
            padding: '30px 24px',
            width: '100%',
            maxWidth: '470px'
        }}
    >
        {children}
    </Paper>
  )
}

CustomPaper.propTypes = {
    children: PropTypes.any
}

export default CustomPaper