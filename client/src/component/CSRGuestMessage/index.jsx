import { Box, Fab, IconButton, Popover, Typography, useMediaQuery } from '@mui/material'
import CSRICon from '../../assets/images/customer-service.png'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const CSRGuestMessage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box className="wrapper">
      <Fab sx={{ background: '#DC3545', '&:hover': { background: '#A22024', }, }} size="medium" aria-describedby={id} onClick={handleClick}>
        <img src={CSRICon} style={{ height: '75%', width: '75%' }}/>
      </Fab>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: matchesXs ? 'center' : 'left'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        PaperProps={{
            sx: {
                width: 380,
                height: 475,
                padding: 0,
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
            }
        }}
      >
        <Box sx={{
            backgroundColor: '#DC3545',
            padding: 1.5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'
        }}>
            <Typography sx={{ color: 'white'}}>Customer Service</Typography>
            <IconButton onClick={handleClose}><CloseIcon sx={{ color: 'white'}} /></IconButton>
        </Box>
      </Popover>
    </Box>
  )
}

export default CSRGuestMessage