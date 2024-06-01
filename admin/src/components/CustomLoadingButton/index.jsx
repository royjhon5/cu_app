import PropTypes from 'prop-types'
import { Button, CircularProgress } from "@mui/material"
import { useTheme } from '@emotion/react'

const CustomLoadingButton = ( {isDisabled, label, btnSize, btnVariant, btnClick, type, fullWidth} ) => {
  const theme = useTheme();
  return (
    <Button 
     type={type}
     onClick={btnClick}
     size={btnSize}
     startIcon={isDisabled ? <CircularProgress size={13} sx={{ color: theme.palette.appSettings.paletteMode === 'dark' ? 'white' : 'black', }} /> : ''}
     variant={btnVariant}
     disabled={isDisabled}
     fullWidth={fullWidth}
    >
        {label}
    </Button>
  )
}

CustomLoadingButton.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    label: PropTypes.any,
    btnSize: PropTypes.any,
    btnVariant: PropTypes.any,
    btnClick: PropTypes.any,
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
};

export default CustomLoadingButton