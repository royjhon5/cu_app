import { Sidebar, sidebarClasses } from 'react-pro-sidebar';
import PerfectScrollBar from 'react-perfect-scrollbar';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { navColors, tokens } from '../../../themes/palette';
import SidebarBack from '../../../components/svg-icons/SidebarBack';
import SidebarFront from '../../../components/svg-icons/SidebarFront';
import { useContext, useEffect, useState } from 'react';
import { AppSettingsContext } from '../../../themes';

const SidebarContainer = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.appSettings);
  const toggleBtn = useContext(AppSettingsContext);
  const setNavColor = navColors(theme.palette.appSettings);
  const displayNone = useMediaQuery(theme => theme.breakpoints.down('md'));
  const [collapsed, setCollapsed] = useState(() => {
    const savedCollapsed = localStorage.getItem('sidebarCollapsed');
    return savedCollapsed ? JSON.parse(savedCollapsed) : false;
  });

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(collapsed));
  }, [collapsed]);

  const handleToggle = () => {
    if (!collapsed) {
      toggleBtn.toggleCollapsed();
    } else {
      toggleBtn.toggleVertical();
    }
    setCollapsed(!collapsed);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        top: 0,
        bottom: 0,
        zIndex: 10000,
      }}
    >
      <Sidebar
        collapsed={theme.palette.appSettings.layout === 'collapsed' ? true : collapsed}
        transitionDuration={350}
        breakPoint='md'
        backgroundColor={setNavColor.navcolor[100]}
        width='280px'
        style={{ height: '100vh', borderRight: "none", fontSize: "12px"}}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            borderRight: '1px dashed',
            borderColor: `${color.sidebarColor[200]} !important`,
          },
        }}
      >
        <IconButton
          sx={{
            display: displayNone ? 'none' : 'flex',
            WebkitBoxAlign: 'center',
            alignItems: 'center',
            WebkitBoxPack: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            WebkitTapHighlightColor: 'transparent',
            outline: 0,
            margin: 0,
            verticalAlign: 'center',
            appearance: 'none',
            textDecoration: 'none',
            textAlign: 'center',
            fontSize: '1.125rem',
            padding: '4px',
            top: '27.5px',
            position: 'fixed',
            left: theme.palette.appSettings.layout === 'collapsed' ? '68px' : '268px',
            zIndex: 1101,
            border: `1px dashed ${color.sidebarColor[200]}`,
            backdropFilter: 'blur(6px)',
            transition: 'left 0.350s ease',
          }}
          onClick={handleToggle}
        >
          {theme.palette.appSettings.layout === 'collapsed' ? <SidebarFront /> : <SidebarBack />}
        </IconButton>
        <PerfectScrollBar>
          <Box sx={{ padding: 4.5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            
          </Box>
          <Box sx={{ paddingLeft: '16px', paddingRight: '16px', overflow: 'hidden' }}>

          </Box>
        </PerfectScrollBar>
      </Sidebar>
    </Box>
  )
}

export default SidebarContainer;
