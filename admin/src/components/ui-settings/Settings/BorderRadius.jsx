import { Box, Grid, Slider, Typography } from "@mui/material"

const BorderRadius = () => {
  return (
    <Box>
        <Typography sx={{
            margin: '0px 0px 12px',
            lineHeight: 1.5,
            fontSize: '0.75rem',
            fontWeight: 600
        }}>
            Border Radius</Typography>
        <Grid item xs={12} container spacing={2} alignItems="center">
            <Grid item>
                <Typography sx={{ fontSize: '0.68rem', }}>
                    4px
                </Typography>
            </Grid>
            <Grid item xs>
                <Slider 
                color="primary"
                step={2}
                min={4}
                max={24}
                sx={{
                    '& .MuiSlider-valueLabel': {
                      color: 'primary.main'
                    }
                }}
                />
            </Grid>
            <Grid item>
                <Typography sx={{ fontSize: '0.68rem', }}>
                    24px
                </Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default BorderRadius