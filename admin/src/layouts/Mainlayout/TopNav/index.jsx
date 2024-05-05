import { Box, IconButton } from '@mui/material';
import SearchIcon from '../../../components/svg-icons/SearchIcon'
import NotificationIcon from '../../../components/svg-icons/NotificationIcon'
import SettingsIcon from '../../../components/svg-icons/SettingsIcon'
import { useDispatch, useSelector } from 'react-redux';
import { SET_MENU } from '../../../store/actions'
import DrawerIndex from '../../../components/ui-settings/Drawer';

const TopNav = () => {
  const OpenDrawer = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleRightDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !OpenDrawer });
  };
  return (
    <Box p={2} display='flex' flexDirection="row" justifyContent='space-between' sx={{ backdropFilter: 'blur(6px)', position: 'sticky', top: 0, paddingLeft: '40px', paddingRight: '40px' }}>
        <Box>
            <IconButton size="small">
                <SearchIcon />
            </IconButton>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            <IconButton size="small">
                <NotificationIcon />
            </IconButton>
            <IconButton size="small" onClick={handleRightDrawerToggle}>
                <SettingsIcon />
            </IconButton>
            <DrawerIndex drawerOpen={OpenDrawer} drawerToggle={handleRightDrawerToggle} />
        </Box>
    </Box>
  )
}

export default TopNav