import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import SearchIcon from '../../../components/svg-icons/SearchIcon'
import NotificationIcon from '../../../components/svg-icons/NotificationIcon'
import SettingsIcon from '../../../components/svg-icons/SettingsIcon'
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_NOTIF, SET_MENU, OPEN_SIDEBAR_MOBILE } from '../../../store/actions'
import DrawerIndex from '../../../components/ui-settings/Drawer';
import AnimateButton from '../../../components/AnimatedButton';
import AccountPopover from './AccountPopOver';
import { useTheme } from '@emotion/react';
import { HorizontalTopNav, TopNavColor } from '../../../themes/palette';
import { useResponsive } from '../../../hooks/use-responsive';
import Iconify from '../../../components/iconify/Iconify';
import NotificationDrawer from '../../../components/Notification/Drawer';
import {motion} from 'framer-motion'
import { useState } from 'react';
import SidebarMobileMode from '../Sidebar/SidebarMobileMode';


const TopNav = () => {
  const theme = useTheme();
  const color = TopNavColor(theme.palette.appSettings);
  const color2 = HorizontalTopNav(theme.palette.appSettings);
  const OpenDrawer = useSelector((state) => state.customization.opened);
  const OpenNotif = useSelector((state) => state.customization.openNotif);
  const OpenSidebar = useSelector((state) => state.customization.openSidebarMobile);
  const dispatch = useDispatch();
  const lgUp = useResponsive('up', 'lg');
  const [navBar, setNavbar] = useState(false)

  const triggerHeight = () => {
    if(window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', triggerHeight)

  const handleRightDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !OpenDrawer });
  };

  const handleRightNotifDrawer = () => {
    dispatch({ type: OPEN_NOTIF, openNotif: !OpenNotif });
  };

  const handleSidebarOpen = () => {
    dispatch({ type: OPEN_SIDEBAR_MOBILE, openSidebarMobile: !OpenSidebar });
  };

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={handleSidebarOpen} sx={{ mr: 1 }}>
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
<>
  <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}></motion.div>
    <AppBar sx={{ 
      width: 
        {
        xl: theme.palette.appSettings.layout === 'vertical' ? `calc(100% - ${280 + 1}px)` : theme.palette.appSettings.layout === 'horizontal' ? 'calc(100%)px' : `calc(100% - ${88 + 1}px)`,
        lg: theme.palette.appSettings.layout === 'vertical' ? `calc(100% - ${280 + 1}px)` : theme.palette.appSettings.layout === 'horizontal' ? 'calc(100%)px' : `calc(100% - ${88 + 1}px)`,
        md: theme.palette.appSettings.layout === 'vertical' ? 'calc(100%)px' : theme.palette.appSettings.layout === 'horizontal' ? 'calc(100%)px' : 'calc(100%)px',
        sm: theme.palette.appSettings.layout === 'vertical' ? 'calc(100%)px' : theme.palette.appSettings.layout === 'horizontal' ? 'calc(100%)px' : 'calc(100%)px',
        xs: theme.palette.appSettings.layout === 'vertical' ? 'calc(100%)px' : theme.palette.appSettings.layout === 'horizontal' ? 'calc(100%)px' : 'calc(100%)px'
        },
      display: theme.palette.appSettings.layout === 'vertical' ? 'block' : theme.palette.appSettings.layout === 'horizontal' ? 'block' : 'block',
      backdropFilter: theme.palette.appSettings.layout === 'vertical' ? 'blur(20px)' : theme.palette.appSettings.layout === 'horizontal' ? 'blur(0px)' : 'blur(20px)',
      boxShadow: 0, 
      zIndex: theme.zIndex.appBar + 1,
      height:
        {
        xl: navBar ? '64px' : theme.palette.appSettings.layout === 'vertical' ? '80px' : theme.palette.appSettings.layout === 'horizontal' ? '64px' : '80px',
        lg: theme.palette.appSettings.layout === 'vertical' ? '64px' : theme.palette.appSettings.layout === 'horizontal' ? '64px' : '64px',
        md: theme.palette.appSettings.layout === 'vertical' ? '64px' : theme.palette.appSettings.layout === 'horizontal' ? '64px' : '64px',
        sm: theme.palette.appSettings.layout === 'vertical' ? '64px' : theme.palette.appSettings.layout === 'horizontal' ? '64px' : '64px',
        xs: theme.palette.appSettings.layout === 'vertical' ? '64px' : theme.palette.appSettings.layout === 'horizontal' ? '64px' : '64px',
        },
      backgroundColor: theme.palette.appSettings.layout === 'vertical' ? `${color.TopNavColors[100]}` : theme.palette.appSettings === 'horizontal' ? `${color2.HorizontalNav[100]}` : `${color.TopNavColors[100]}`,
      transition:
      theme.palette.appSettings.layout === 'vertical' ? 
      theme.transitions.create(['width', 'margin', 'height'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }) 
      : 
      theme.palette.appSettings.layout === 'horizontal' ? '' 
      : 
      theme.transitions.create(['width', 'margin', 'height'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }) 
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
          <SidebarMobileMode sideBarMobileOpen={OpenSidebar} sideBarMobileToggle={handleSidebarOpen} />
        </Toolbar>
    </AppBar>
    <AppBar sx={{ 
      display: {
        xl: theme.palette.appSettings.layout === 'vertical' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'block' : 'none',
        lg: theme.palette.appSettings.layout === 'vertical' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'block' : 'none',
        md: theme.palette.appSettings.layout === 'vertical' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'none',
        sm: theme.palette.appSettings.layout === 'vertical' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'none',
        xs: theme.palette.appSettings.layout === 'vertical' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'none'
      },
      backdropFilter: theme.palette.appSettings.layout === 'vertical' ? 'blur(0px)' : theme.palette.appSettings.layout === 'horizontal' ? 'blur(20px)' : 'blur(0px)',
      position: 'sticky', 
      boxShadow: 0,
      top:theme.palette.appSettings.layout === 'vertical' ? '0px' : theme.palette.appSettings.layout === 'horizontal' ? '64px' : '0px', 
      zIndex: theme.zIndex.appBar + 1,
      height: theme.palette.appSettings.layout === 'vertical' ? '80px' : theme.palette.appSettings.layout === 'horizontal' ? '64px' : '80px',
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

        </Toolbar>
    </AppBar>
    
    <motion.div />
</>
  )
}

export default TopNav