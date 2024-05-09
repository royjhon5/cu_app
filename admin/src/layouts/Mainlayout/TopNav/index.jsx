import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import SearchIcon from '../../../components/svg-icons/SearchIcon'
import NotificationIcon from '../../../components/svg-icons/NotificationIcon'
import SettingsIcon from '../../../components/svg-icons/SettingsIcon'
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_NOTIF, SET_MENU } from '../../../store/actions'
import DrawerIndex from '../../../components/ui-settings/Drawer';
import AnimateButton from '../../../components/AnimatedButton';
import AccountPopover from './AccountPopOver';
import { useTheme } from '@emotion/react';
import { TopNavColor } from '../../../themes/palette';
import { useResponsive } from '../../../hooks/use-responsive';
import Iconify from '../../../components/iconify/Iconify';
import NotificationDrawer from '../../../components/Notification/Drawer';

const TopNav = () => {
  const theme = useTheme();
  const color = TopNavColor(theme.palette.appSettings)
  const OpenDrawer = useSelector((state) => state.customization.opened);
  const OpenNotif = useSelector((state) => state.customization.openNotif)
  const dispatch = useDispatch();
  const lgUp = useResponsive('up', 'lg');
  const handleRightDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !OpenDrawer });
  };

  const handleRightNotifDrawer = () => {
    dispatch({ type: OPEN_NOTIF, openNotif: !OpenNotif });
  };

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={handleRightDrawerToggle} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

        <SearchIcon />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton size="small" onClick={handleRightNotifDrawer}>
          <NotificationIcon />  
        </IconButton>  
        <AnimateButton type="rotate">
          <IconButton size="small" onClick={handleRightDrawerToggle}>
              <SettingsIcon />
          </IconButton>
        </AnimateButton> 
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar sx={{ 
      backdropFilter: 'blur(20px)',
      position: 'sticky', 
      boxShadow: 0, 
      zIndex: theme.zIndex.appBar + 1,
      height: '80px',
      transition: theme.transitions.create(['height'], {
        duration: theme.transitions.duration.shorter,
      }),
      backgroundColor: `${color.TopNavColors[100]}`
    }}>
        <Toolbar
          sx={{
            height: 1,
            px: { lg: 5 },
          }}
        >
          {renderContent}
          <DrawerIndex drawerOpen={OpenDrawer} drawerToggle={handleRightDrawerToggle} />
          <NotificationDrawer notifDrawerOpen={OpenNotif} notifdrawerToggle={handleRightNotifDrawer} />
        </Toolbar>
    </AppBar>
  )
}

export default TopNav