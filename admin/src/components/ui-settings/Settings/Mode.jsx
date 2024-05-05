import { Box, Button, Stack, Typography } from "@mui/material"
import { useContext } from "react"
import { AppSettingsContext } from "../../../themes"

const Mode = () => {
  const setMode = useContext(AppSettingsContext);
  return (
    <Box>
        <Typography sx={{
            margin: '0px 0px 12px',
            lineHeight: 1.5,
            fontSize: '0.75rem',
            fontWeight: 600
        }}>
            Mode</Typography>
        <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px'
        }}>
            <Button 
            onClick={setMode.toggleLightMode}
            variant="outlined"
            sx={{
                width: '100%',
                height: '80px'
            }}>
                light
            </Button>
            <Button 
            onClick={setMode.toggleDarkMode}
            variant="outlined"
            sx={{
                width: '100%',
                height: '80px'
            }}>
                dark
            </Button>
        </Stack>
    </Box>
  )
}

export default Mode