import { Box, Button, Stack, Typography } from "@mui/material"
import { useContext } from "react"
import { AppSettingsContext } from "../../../themes"
import NormalContrast from "../../svg-icons/NormalContrast";
import BoldContrast from "../../svg-icons/BoldContrast";

const Contrast = () => {
  const setMode = useContext(AppSettingsContext);

  const ToggleNormalContrast = () => {
    setMode.toggleNormal();
  }

  const ToggleBoldContrast = () => {
    setMode.toggleHigh();
  }

  return (
    <Box>
        <Typography sx={{
            margin: '0px 0px 12px',
            lineHeight: 1.5,
            fontSize: '0.75rem',
            fontWeight: 600
        }}>
            Contrast</Typography>
        <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px'
        }}>
            <Button 
            onClick={ToggleNormalContrast}
            sx={{
                width: '100%',
                height: '80px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
            }}>
                <NormalContrast />
            </Button>
            <Button 
            onClick={ToggleBoldContrast}
            sx={{
                width: '100%',
                height: '80px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
            }}>
                <BoldContrast />
            </Button>
        </Stack>
    </Box>
  )
}

export default Contrast