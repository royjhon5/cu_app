import { Box, Button, Typography } from "@mui/material"

const Presets = () => {
  return (
    <Box>
        <Typography sx={{
            margin: '0px 0px 12px',
            lineHeight: 1.5,
            fontSize: '0.75rem',
            fontWeight: 600
        }}>
            Presets</Typography>
        <Box sx={{       
            gap: '12px 16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)'
        }}>
            <Button 
            variant="outlined"
            sx={{
                height: '56px'
            }}>
                1
            </Button>
            <Button 
            variant="outlined"
            sx={{
                height: '56px'
            }}>
                2
            </Button>
            <Button 
            variant="outlined"
            sx={{
                height: '56px'
            }}>
                3
            </Button>
            <Button 
            variant="outlined"
            sx={{
                height: '56px'
            }}>
                4
            </Button>
            <Button 
            variant="outlined"
            sx={{
                height: '56px'
            }}>
                5
            </Button>
            <Button 
            variant="outlined"
            sx={{
                height: '56px'
            }}>
                6
            </Button>
        </Box>
    </Box>
  )
}

export default Presets