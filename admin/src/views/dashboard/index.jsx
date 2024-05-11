import { Box, Grid } from "@mui/material"
import WelcomeUser from "./WelcomeUser"
import { Helmet } from "react-helmet-async"
  
  
const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard: Overview</title>
      </Helmet>
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
    </>
  )
}

export default Dashboard