import { Stack, useTheme } from "@mui/material"
import OverView from "./Overview"
import AdminisTrative from "./Administrative";

const SidebarContainer = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ 
        display: 'flex',
        flexDirection: 'column'
    }}>
        <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.palette.appSettings.layout === 'collapsed' ? '3px' : '16px',
            paddingRight: theme.palette.appSettings.layout === 'collapsed' ? '3px' : '16px'
        }}>
            <OverView />
            <AdminisTrative />
        </Stack>
    </Stack>
  )
}

export default SidebarContainer