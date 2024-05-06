import { Box, Button, Stack, Typography, useTheme } from "@mui/material"
import LeftArrow from "../../svg-icons/StretchComponent/False/LeftArrow"
import RightArrow from "../../svg-icons/StretchComponent/False/RightArrow"
import { useContext } from "react"
import { AppSettingsContext } from "../../../themes"
import TrueLeftArrow from "../../svg-icons/StretchComponent/True/TrueLeftArrow"
import TrueRightArrow from "../../svg-icons/StretchComponent/True/TrueRightArrow"

const Stretch = () => {
  const theme = useTheme();
  const stretchMode = useContext(AppSettingsContext);
  return (
    <Box>
        <Typography sx={{
            margin: '0px 0px 12px',
            lineHeight: 1.5,
            fontSize: '0.75rem',
            fontWeight: 600
        }}>
            Stretch</Typography>
        <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px'
        }}>
            <Button 
            onClick={stretchMode.toggleStretch}
            sx={{
                width: '100%',
                height: '80px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
            }}>
                <Stack sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    WebkitBoxAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: theme.palette.appSettings.stretch ? '24%' : '50%',
                    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
                }}>
                    {theme.palette.appSettings.stretch ? <LeftArrow /> : <TrueLeftArrow /> }
                    <Box sx={{
                        WebkitBoxFlex: 1,
                        flexGrow: 1,
                        borderBottom: theme.palette.appSettings.stretch ? '1.5px dashed grey' : '1.5px dashed currentcolor'
                    }}></Box>
                    {theme.palette.appSettings.stretch ? <RightArrow /> : <TrueRightArrow /> }     
                </Stack>
            </Button>
        </Stack>
    </Box>
  )
}

export default Stretch