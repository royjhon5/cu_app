import PropTypes from 'prop-types'
import { Popover, Typography } from '@mui/material'
const PopoverStyled = ({ opens, anchorElHere, ClosePopOver, popoverRef }) => {
  const id = opens ? 'simple-popover' : undefined;
  return (
        <Popover
          id={id}
          open={opens}
          anchorEl={anchorElHere}
          onClose={ClosePopOver}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          disableRestoreFocus
          PaperProps={{
            onMouseEnter: opens,
            onMouseLeave: ClosePopOver,
            ref: popoverRef,
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the popover.</Typography>
      </Popover>
  )
}

PopoverStyled.propTypes = {
    opens: PropTypes.bool,
    anchorElHere: PropTypes.bool,
    ClosePopOver: PropTypes.any,
    popoverRef: PropTypes.any,
};

export default PopoverStyled