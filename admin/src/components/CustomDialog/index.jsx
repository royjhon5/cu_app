import PropTypes from 'prop-types'
import { Dialog, DialogActions, DialogContent, DialogTitle, useTheme } from "@mui/material"

const CustomDialog = ({onClose, open, DialogTitles, DialogContents, DialogAction, maxWidth}) => {
  const theme = useTheme();
  return (
    <Dialog 
    maxWidth={maxWidth}
    fullWidth={true}
    onClose={onClose} 
    open={open} 
    BackdropProps={{
        sx: {
          backgroundColor: 'rgba(22, 28, 36, 0.8)',
        }
      }}
    sx={{
        overflowY: 'auto',
        boxShadow: theme.palette.appSettings.paletteMode === 'dark' ? 'rgba(0, 0, 0, 0.24) -40px 40px 80px -8px' : 'rgba(0, 0, 0, 0.24) -40px 40px 80px -8px'
    }}>
        <DialogTitle>{DialogTitles}</DialogTitle>
        <DialogContent 
            sx={{ 
                flex: '1 1 auto',
                overflowY: 'auto', 
                padding: '0px 24px'
            }}
        >{DialogContents}
        </DialogContent>
        <DialogActions 
            sx={{ 
                flex: '1 1 auto',
                overflowY: 'auto', 
                padding: '15px 24px'
            }}
        >
            {DialogAction}
        </DialogActions>
    </Dialog>
  )
}

CustomDialog.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    DialogTitles: PropTypes.string,
    DialogContents: PropTypes.node,
    DialogAction: PropTypes.node, 
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}


export default CustomDialog