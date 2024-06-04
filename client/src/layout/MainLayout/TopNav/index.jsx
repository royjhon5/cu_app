import { AppBar, Container, Toolbar, useTheme } from "@mui/material"
import { useEffect, useState } from "react";
import { TopNavColor } from "../../../themes/palette";

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
        backdropFilter:'blur(20px)',
        boxShadow: 0, 
        height: navBar ? '64px' : '80px',
        backgroundColor: `${color.TopNavColors[100]}`,
        transition: theme.transitions.create(['width', 'margin', 'height'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        color: 'black',
      }}>
          <Toolbar
            sx={{
              height: 1,
              px: { lg: 5 },
              
            }}
          >
            <Container maxWidth="lg">
              Hello world
            </Container>
          </Toolbar>
      </AppBar>
  )
}

export default TopNavigation