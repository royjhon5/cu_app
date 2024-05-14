import { Box } from '@mui/material';
import PropTypes from 'prop-types';
const CustomTabPanel = ({ children, value, index, ...other }) => {
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ padding:0, mt: '40px' }}>
              {children}
            </Box>
          )}
        </div>
      );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default CustomTabPanel