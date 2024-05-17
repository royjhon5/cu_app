import PropTypes from 'prop-types'
import { Popover, Typography, useTheme } from "@mui/material"

const StyledPopover = ({ id, open, anchorEl, handlePopoverClose, onMouseLeave, onMouseEnter, popoverRef}) => {
  const theme = useTheme();
  return (
    <Popover
        id={id}
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: theme.palette.appSettings.layout === 'collapsed' ? 'top' : 'bottom',
            horizontal: theme.palette.appSettings.layout === 'collapsed' ? 'right' : 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        PaperProps={{
            onMouseEnter:onMouseEnter,
            onMouseLeave:onMouseLeave,
            ref: popoverRef,
            sx: {
              p: 4,
              width: 160,
              background: theme.palette.appSettings.paletteMode === 'dark' ? 'rgba(33, 43, 54, 0.9)' : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              backgroundImage: 'url(src/assets/images/cyan-blur.png), url(src/assets/images/red-blur.png)',
              backgroundRepeat: 'no-repeat, no-repeat',
              backgroundPosition: 'right top, left bottom',
              backgroundSize: '50%, 50%',
              boxShadow: theme.palette.appSettings.paletteMode === 'dark' ? 'rgba(0, 0, 0, 0.24) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) -20px 20px 40px -4px' : 'rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px',
              borderRadius: '10px',
              minHeight: '16px',
              maxWidth: 'calc(100% - 32px)',
              maxHeight: 'calc(100% - 32px)',
              minWidth: '160px',
              pointerEvents: 'auto',
          },
        }}      
      >
        <Typography sx={{ p: 4 }}>I use Popover.</Typography>
      </Popover>
  )
}


StyledPopover.propTypes = {
    id: PropTypes.string,
    open: PropTypes.bool,
    anchorEl: PropTypes.instanceOf(Element),
    handlePopoverClose: PropTypes.func,
    onMouseLeave: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    popoverRef: PropTypes.oneOfType([
      PropTypes.func, 
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
};


export default StyledPopover