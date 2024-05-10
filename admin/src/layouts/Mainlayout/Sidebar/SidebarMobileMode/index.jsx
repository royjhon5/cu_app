import PropTypes from 'prop-types';
import { Drawer, useTheme } from "@mui/material"

const SidebarMobileMode = ({sideBarMobileOpen, sideBarMobileToggle}) => {
  const theme = useTheme();
  return (
    <Drawer
      open={sideBarMobileOpen}
      onClose={sideBarMobileToggle}
      sx={{ '& .MuiDrawer-paper': {...theme.components.MuiDrawer, maxWidth: '280px', backdropFilter: 'blur(20px)'},
          display: {
            xl: 'none',
            lg: 'none'
          }
      }}
      BackdropProps={{ invisible: false  }}
      anchor="left"
    >
        
    </Drawer>
  )
}

SidebarMobileMode.propTypes = {
    sideBarMobileOpen: PropTypes.bool,
    sideBarMobileToggle: PropTypes.func,
    window: PropTypes.object
};

export default SidebarMobileMode