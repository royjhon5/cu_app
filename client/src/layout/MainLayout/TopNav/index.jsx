import { AppBar, Box, Container, Stack, Toolbar, useTheme } from "@mui/material"
import { useEffect, useState } from "react";
import { TopNavColor } from "../../../themes/palette";
import CULogo from "./Logo";
import MenuListComponent from "./MenuList";

const TopNavigation = () => {
  const theme = useTheme();
  const [navBar, setNavbar] = useState(false);
  const color = TopNavColor(theme.palette.appSettings);
  useEffect(() => {
    const triggerHeight = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
    window.addEventListener('scroll', triggerHeight);
    return () => {
      window.removeEventListener('scroll', triggerHeight);
    };
  }, []);
  return (
    <AppBar sx={{ 
        flexDirection: 'column',
        boxSizing: 'border-box',
        backdropFilter:'blur(20px)',
        boxShadow: 0, 
        backgroundColor: `${color.TopNavColors[100]}`,
        transition: theme.transitions.create(['width', 'margin', 'height'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        color: 'black',
      }}>
          <Toolbar
            disableGutters
            variant="regular"
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              height: navBar ? '64px' : '80px',
              transition: 'height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
            }}
          >
            <Container maxWidth="lg" sx={{ 
              width: '100%',
              marginle:'auto',
              boxSizing: 'border-box',
              marginRight: 'auto',
              height: '100%',
              display: 'flex',
              alignItems: 'center'
            }}>
             <CULogo />
             <Box sx={{ flexGrow: 1}}></Box>   
             <Stack sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '40px',
              marginRight: '20px',
              height: '100%',
              justifyContent:'center',
              alignItems: 'center'
            }}>
              <MenuListComponent />
            </Stack>
            </Container>
          </Toolbar>
      </AppBar>
  )
}

export default TopNavigation