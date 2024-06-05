import PropTypes from 'prop-types'
import { Button, CircularProgress } from "@mui/material"
import { useTheme } from '@emotion/react'

const CustomLoadingButton = ( {isDisabled, label, btnSize, btnVariant, btnClick, type, backgroundColor, hoverColor} ) => {
  const theme = useTheme();
  return (
    <Button 
     onClick={btnClick}
     size={btnSize}
     startIcon={isDisabled ? <CircularProgress size={13} sx={{ color: theme.palette.appSettings.paletteMode === 'dark' ? 'white' : 'black' }} /> : ''}
     variant={btnVariant}
     disabled={isDisabled}
     type={type}
     sx={{
        backgroundColor: backgroundColor,
        '&:hover': { background: hoverColor, }
     }}
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
    backgroundColor: PropTypes.string,
    hoverColor: PropTypes.string,
};

export default CustomLoadingButton