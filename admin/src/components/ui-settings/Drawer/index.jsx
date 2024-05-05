import PropTypes from 'prop-types';
import { Drawer } from "@mui/material";
import DrawerContainer from '../Container';


const DrawerIndex = ({drawerOpen, drawerToggle}) => {

  return (
    <Drawer
      sx={{ '& .MuiDrawer-paper': {backdropFilter: 'blur(20px)'} }}
      PaperProps={{ sx: 
        { 
         width: '100%',
         maxWidth: '280px', 
         backgroundColor: 'rgba(0, 0, 0, 0.3)', 
         backgroundImage: 'url(src/assets/images/cyan-blur.png), url(src/assets/images/red-blur.png)',
         backgroundRepeat: 'no-repeat, no-repeat',
         backgroundPosition: 'right top, left bottom',
         backgroundSize: '50%, 50%'
        } 
    }}
      open={drawerOpen}
      onClose={drawerToggle}
      BackdropProps={{ invisible: true  }}
      anchor="right"
      elevation={0}
    >
        <DrawerContainer />
    </Drawer>
  )
}

DrawerIndex.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default DrawerIndex