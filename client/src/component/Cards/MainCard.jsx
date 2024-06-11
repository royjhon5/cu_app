import { Box } from "@mui/material"
import PropTypes from 'prop-types';

const MainCard = ({ ...other }) => {
  return (
    <Box component="main" sx={{
      display: 'block',
      unicodeBidi: 'isolate',
      flexGrow: 1,
      paddingTop: '80px'
    }}
        {...other}
    >

    </Box>
  )
}

MainCard.propTypes = {
    sx: PropTypes.object,
};

export default MainCard