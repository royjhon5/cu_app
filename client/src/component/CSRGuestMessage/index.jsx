import {Box, Fab, IconButton, Popover, Stack, Typography, useMediaQuery } from '@mui/material'
import CSRICon from '../../assets/images/customer-service.png'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MessageContainer from './MessageContainer';

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
                height: '100%',
                maxHeight: 475,
                padding: 0,
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
                overflow: 'hidden',
                position: 'relative'
            }
        }}
      >
        <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
        }}>
            <Stack sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexShrink: 0,
                padding: '8px 8px 8px 10px',
                minHeight: '22px',
                background: '#DC3545',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
            }}>
                <Typography sx={{ color: 'white'}}>Customer Service</Typography>
                <Stack sx={{ display: 'flex', flexGrow: 1}}></Stack>
                <IconButton onClick={handleClose}><CloseIcon sx={{ color: 'white'}} /></IconButton>
            </Stack>
            <Stack sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                borderTop: '1px solid rgba(145, 158, 171, 0.2)'
            }}>
                <Stack sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}>
                    <MessageContainer />
                </Stack>
            </Stack>
        </Stack>
      </Popover>
    </Box>
  )
}

export default CSRGuestMessage