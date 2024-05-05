import { Box, Button, Stack, Typography } from "@mui/material"

const Stretch = () => {
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
            variant="outlined"
            sx={{
                width: '100%',
                height: '80px'
            }}>
                light
            </Button>
        </Stack>
    </Box>
  )
}

export default Stretch