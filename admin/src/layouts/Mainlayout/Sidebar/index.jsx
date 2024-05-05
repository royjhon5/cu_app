import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import PerfectScrollBar  from 'react-perfect-scrollbar'; 
import { Box } from '@mui/material';

const SidebarContainer = () => {
  return (
      <Box sx={{ position: 'sticky', display: 'flex', top: 0, bottom: 0, zIndex: 10000,  }}>
        <PerfectScrollBar component="div">
            <Sidebar breakPoint='md' width='280px' style={{ height: '100vh', borderColor: 'none'}}>
              <Box sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
                <Menu>
                    <MenuItem>Sample</MenuItem>
                </Menu>
              </Box>              
            </Sidebar>
        </PerfectScrollBar>
      </Box>
  )
}

export default SidebarContainer