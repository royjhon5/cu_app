import { Box, Grid, LinearProgress} from "@mui/material"
import WelcomeUser from "./WelcomeUser"
import { Helmet } from "react-helmet-async"
import InfoSlider from "./InfoSlider"
import { useEffect, useState } from "react"
  
const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fetchData = async () => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    await fetch('https://jsonplaceholder.typicode.com/posts/1').then(() => {
    })
    setLoading(false);
    return () => {
      clearInterval(timer);
    };
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <Helmet>
        <title>Dashboard: Overview</title>
      </Helmet>
      {loading ? ( <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center', height: '75vh'}}><LinearProgress variant="determinate" value={progress} sx={{width: '30%', background: 'rgb(99, 115, 129)'}} /></Box>  ) : (
        <Grid container direction="row" spacing={3}>
          <Grid item xs={12} md={8}>
              <WelcomeUser />
          </Grid>
          <Grid item xs={12} md={4}>
              <InfoSlider />
          </Grid>
          <Grid item xs={12} md={12}>
            fuck you
          </Grid>
      </Grid>
      )}   
    </>
  )
}

export default Dashboard