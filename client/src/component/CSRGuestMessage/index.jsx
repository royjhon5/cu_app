import {Badge, Box, Fab, IconButton, Popover, Stack, Typography, useMediaQuery } from '@mui/material'
import CSRICon from '../../assets/images/customer-service.png'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MessageContainer from './MessageContainer';
import http from '../../api/http';
import { useEffect } from 'react';
import { WebSocket } from '../../main';

const CSRGuestMessage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [unreadData, setUnreadCountData] = useState([])
  const [room, setRoomData] = useState([]);
  const guestToken = localStorage.getItem('SkMvAnXuJKrczmx+awosRQ==')
  const AppSocket = WebSocket();


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    ReadAdminMessage();
  };

  const handleClose = () => {
    setAnchorEl(null);
    ReadAdminMessage();
  };

  const ReadAdminMessage = async () => {
    try {
      await http.post('/read-admin-messages' , {room})
      getNotif();
    } catch (error) {
      console.error(error)
    }
  }

  const getNotif = async () => {
    try {
        const response = await http.get('/unread-admin-messages');
        const data = response.data;
        const unreadCounts = data
        .filter(item => item.room === guestToken)
        .map(item => item.unread_count);
        const getRoomData = data.map(item => item.room)
        const unreadCount = unreadCounts.length > 0 ? unreadCounts[0] : 0;
        setUnreadCountData(unreadCount)
        setRoomData(getRoomData)
    } catch(error) {
        console.error(error)
    }
  }

  useEffect(() => {
    getNotif();
    AppSocket.on('GuestNotification', () => {
      getNotif();
    })
    return () => {
      AppSocket.off('GuestNotification');
    };
  }, [])

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box className="wrapper">
        <Badge badgeContent={open ? 0 : unreadData} color='error' anchorOrigin={{ vertical: 'top', horizontal: 'left'}}>
          <Fab sx={{ background: '#DC3545', '&:hover': { background: '#A22024', }, }} size="medium" aria-describedby={id} onClick={handleClick}>
            <img src={CSRICon} style={{ height: '75%', width: '75%' }}/>
          </Fab>
        </Badge>
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
                <Typography sx={{ color: 'white'}}>Administrator</Typography>
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