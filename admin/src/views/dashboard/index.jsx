import { Box, Button, Grid, LinearProgress } from "@mui/material"
import WelcomeUser from "./WelcomeUser"
import { Helmet } from "react-helmet-async"
import InfoSlider from "./InfoSlider"
import { useEffect, useState } from "react"
import http from "../../api/http"
import { useAuth } from "../../modules/context/AuthContext"
  
  
const Dashboard = () => {
  const { accessToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState();
  const [oldImage, setOldImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get(`/user-profile?id_number=${accessToken.idNumber}`)
        setOldImage(response.data[0].profile_picture)
      } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error;
      }
    };
    fetchData();
  }, [accessToken.idNumber]);
  
  const fetchData = async () => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 50;
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

  const handleFiles = (e) => {
    const selectedFile = e.target.files[0];
    const maxSize = 3 * 1024 * 1024; 
    if (selectedFile && selectedFile.size > maxSize) {
      alert("File size exceeds the limit of 3MB. Please select a smaller file.");
      e.target.value = null;
    } else {
      setFile(selectedFile);
    }
  }

  const handleUpload = async () => {
    const formdata = new FormData();
    formdata.append('id_number', accessToken.idNumber);
    formdata.append('old_image', oldImage);
    formdata.append('image', file);
    http.post('/upload-profile', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
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
              <input type="file" onChange={handleFiles} />
              <Button onClick={handleUpload}>Upload</Button>
          </Grid>
      </Grid>
      )}   
    </>
  )
}

export default Dashboard