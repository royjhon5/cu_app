import { Box, Drawer, useTheme } from "@mui/material";
import { navColors, tokens } from "../../../themes/palette";
import ToggleNavButton from "./ToggleButton";

export default function Sidebar() {
  const theme = useTheme();
  const navColor = navColors(theme.palette.appSettings);
  const color = tokens(theme.palette.appSettings);
  return (
    <Box
      sx={{
        display: {
          xl: 'flex',
          lg: 'flex',
          md: 'none',
          sm: 'none',
          xs: 'none'
        },
        flexShrink: { lg: 0 },
        width: { 
          lg: theme.palette.appSettings.layout === 'vertical' ? 280 : theme.palette.appSettings.layout === 'horizontal' ? 0 : 88,
        },
      }}
    >
      <Drawer sx={{
            width: theme.palette.appSettings.layout === 'vertical' ? 280 : theme.palette.appSettings.layout === 'horizontal' ? 0 : 88,
            flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: theme.palette.appSettings.layout === 'vertical' ? 280 : theme.palette.appSettings.layout === 'horizontal' ? 0 : 88,
            boxSizing: 'border-box',
            background: `${navColor.navcolor[100]} !important`,
            borderRight: '1px dashed',
            borderColor: `${color.sidebarColor[200]} !important`,
            transition: 
            theme.palette.appSettings.layout === 'vertical' ? 
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }) 
            : 
            theme.palette.appSettings.layout === 'horizontal' ? '' 
            : 
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }) 
          },
        }}
        variant="permanent"
        anchor="left">
            <ToggleNavButton />
      </Drawer>
    </Box>
  );
}
