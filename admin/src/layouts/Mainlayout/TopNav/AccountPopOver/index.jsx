import { Avatar, Box, Divider, IconButton, MenuItem, Popover, Stack, Typography, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../modules/context/AuthContext';


// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
  },
  {
    label: 'Profile',
  },
  {
    label: 'Settings',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const theme = useTheme();
  const { logout, accessToken } = useContext(AuthContext);
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const logoutAccount = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error)
    }
  }

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          color: 'rgb(99, 115, 129)'
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            ml: 0.75,
            width: 200,
            background: theme.palette.appSettings.paletteMode === 'dark' ? 'rgba(33, 43, 54, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            backgroundImage: 'url(src/assets/images/cyan-blur.png), url(src/assets/images/red-blur.png)',
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundPosition: 'right top, left bottom',
            backgroundSize: '50%, 50%',
            boxShadow: theme.palette.appSettings.paletteMode === 'dark' ? 'rgba(0, 0, 0, 0.24) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) -20px 20px 40px -4px' : 'rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px',
            borderRadius: '10px',
          },
        }}
      >
        <Box component="span" style={{
            width: 14,
            height: 14,
            position: 'absolute',
            borderBottomLeftRadius: 3.5,
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            border: '1px solid rgba(145, 158, 171, 0.12)',
            backdropFilter: 'blur(6px)', 
            background: theme.palette.appSettings.paletteMode === 'dark' ? 'rgba(33, 43, 54, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            top: '-6.5px',
            transform: 'rotate(135deg)',
            right: '20px',
        }}></Box>
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {accessToken.fName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {accessToken.idNumber}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '8px'
        }}>
        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={handleClose} sx={{ borderRadius: '8px', fontSize: '13.5px', padding: 1}}>
            {option.label}
          </MenuItem> 
        ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        <Stack sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '8px'
        }}>
        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={logoutAccount}
          sx={{ color: 'error.main', fontSize: '14px', padding: '6px 8px', borderRadius: '8px' }}
        >
          Logout
        </MenuItem>
        </Stack>
      </Popover>
    </>
  );
}
