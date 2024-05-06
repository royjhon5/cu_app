  import { Sidebar, sidebarClasses } from 'react-pro-sidebar';
  import PerfectScrollBar  from 'react-perfect-scrollbar'; 
  import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
  import { navColors, tokens } from '../../../themes/palette';
  import SidebarBack from '../../../components/svg-icons/SidebarBack';
  import { useState } from 'react';
  import SidebarFront from '../../../components/svg-icons/SidebarFront';

  const SidebarContainer = () => {
    const theme = useTheme();
    const color = tokens(theme.palette.appSettings);
    const setNavColor = navColors(theme.palette.appSettings);
    const [sideBarCollapse, setSidebarCollapse] = useState(false);
    const displayNone = useMediaQuery(theme => theme.breakpoints.down('md'));
    return (
        <Box sx={{ position: 'sticky', display: 'flex', top: 0, bottom: 0, zIndex: 10000,  }}>
              <Sidebar collapsed={sideBarCollapse} transitionDuration={350} breakPoint='md' backgroundColor={setNavColor.navcolor[100]} width='280px' style={{ height: '100vh', borderRight: "none", fontSize: "12px" }} rootStyles={{
                  [`.${sidebarClasses.container}`]: {
                      borderRight: '1px dashed',
                      borderColor: `${color.sidebarColor[200]} !important`,
                  },
              }}>
                  <IconButton sx={{
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
                      top: '32px',
                      position: 'fixed',
                      left: sideBarCollapse ? '68px' : '268px',
                      zIndex: 1101,
                      border: `1px dashed ${color.sidebarColor[200]}`,
                      backdropFilter: 'blur(6px)',
                      transition: 'left 0.350s ease',
                  }}

                      onClick={() => setSidebarCollapse(!sideBarCollapse)}
                  >
                      {sideBarCollapse ? <SidebarFront /> : <SidebarBack />}
                  </IconButton>
                  <PerfectScrollBar component="div" 
                    style={{
                          overflow: 'hidden',
                          width: 'inherit',
                          height: 'inherit',
                          maxWidth: 'inherit',
                          maxHeight: 'inherit'
                      }}>
                    <Box sx={{ padding: 4.5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        
                    </Box>
                    <Box sx={{ paddingLeft: '16px', paddingRight: '16px', overflow: 'hidden' }}>
                        
                    </Box>   
                  </PerfectScrollBar>           
              </Sidebar> 
        </Box>
    )
  }

  export default SidebarContainer