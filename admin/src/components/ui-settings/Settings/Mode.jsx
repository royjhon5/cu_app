import { Box, Button, Stack, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { AppSettingsContext } from "../../../themes"
import SunIcon from "../../svg-icons/SunIcon";
import MoonIcon from "../../svg-icons/MoonIcon";

const Mode = () => {
  const setMode = useContext(AppSettingsContext);
  const [lightModeActive, setLightModeActive] = useState(false);
  const [darkModeActive, setDarkModeActive] = useState(false);

  const handleLightModeClick = () => {
    setMode.toggleLightMode();
    setLightModeActive(true);
    setDarkModeActive(false);
  };

  const handleDarkModeClick = () => {
    setMode.toggleDarkMode();
    setLightModeActive(false);
    setDarkModeActive(true);
  };

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
            onClick={handleLightModeClick}
            sx={{
                width: '100%',
                height: '80px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
                color: 'inherit',
                background: lightModeActive ? 'red' : 'none',
                '&:hover': {
                    backgroundColor: lightModeActive ? 'red' : 'transparent',
                    color: 'inherit',
                }
            }}>
                <SunIcon />
            </Button>
            <Button 
            onClick={handleDarkModeClick}
            sx={{
                width: '100%',
                height: '80px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
                color: 'inherit',
                background: darkModeActive ? 'blue' : 'none',
                '&:hover': {
                    backgroundColor: darkModeActive ? 'blue' : 'transparent',
                    color: 'inherit',
                }
            }}>
                <MoonIcon />
            </Button>
        </Stack>
    </Box>
  )
}

export default Mode;
