import { Box, Button, Stack, Typography } from "@mui/material"

const Contrast = () => {
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
            variant="outlined"
            sx={{
                width: '100%',
                height: '80px'
            }}>
                true
            </Button>
            <Button 
            variant="outlined"
            sx={{
                width: '100%',
                height: '80px'
            }}>
                false
            </Button>
        </Stack>
    </Box>
  )
}

export default Contrast