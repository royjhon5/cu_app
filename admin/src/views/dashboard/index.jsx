import { Box, Grid } from "@mui/material"
import WelcomeUser from "./WelcomeUser"
  
  
const Dashboard = () => {
  return (
    <Grid container direction="row" spacing={3}>
        <Grid item xs={12} md={8}>
            <WelcomeUser />
        </Grid>
        <Grid item xs={12} md={12}>
            <Box sx={{
              height: '1000px'
            }}>

            </Box>
        </Grid>
    </Grid>
  )
}

export default Dashboard