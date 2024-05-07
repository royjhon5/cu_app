import { Box, Button, Stack, Typography } from "@mui/material"

const Fonts = () => {
  return (
    <Box>
        <Typography sx={{
            margin: '0px 0px 12px',
            lineHeight: 1.5,
            fontSize: '0.75rem',
            fontWeight: 600
        }}>
            UI Fonts</Typography>
            <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        }}>
            <Button 
            sx={{
                width: '100%',
                height: '50px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
            }}>
                Roboto
            </Button>
            <Button 
            sx={{
                width: '100%',
                height: '50px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
            }}>
                Poppins
            </Button>
            <Button 
            sx={{
                width: '100%',
                height: '50px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
            }}>
                Public Sans
            </Button>
            <Button 
            sx={{
                width: '100%',
                height: '50px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
            }}>
                Inter
            </Button>
        </Stack>
    </Box>
  )
}

export default Fonts