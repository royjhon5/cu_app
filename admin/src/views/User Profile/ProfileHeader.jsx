import { Avatar, Box, ListItemText, Paper, Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import http from "../../api/http";
import { AuthContext } from "../../modules/context/AuthContext";

const ProfileHeader = () => {
  const { accessToken } = useContext(AuthContext);
  const [profilePicture, setProfilePicture] = useState("");


  useEffect(() => {
   const fetchData = async () => {
    try {
      const response = await http.get(`/user-profile?id_number=${accessToken.idNumber}`)
      setProfilePicture(response.data[0].profile_picture)
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  }; 
    fetchData();
  }, [accessToken.idNumber]);


  return (
    <Paper sx={{
        height: '290px',
        mb: '24px',
        position: 'relative',
        backgroundImage: 'none', 
        overflow:'hidden',
        zIndex: 0,
    }}>
        <Box sx={{
            height: '100%',
            color: 'white',
            background: 'linear-gradient(rgba(0, 75, 80, 0.8), rgba(0, 75, 80, 0.8)) center center / cover no-repeat',
            backgroundPosition: 'center center'
        }}>
            <Stack sx={{
                display: 'flex',
                left: '24px',
                bottom: '24px',
                zIndex: 10,
                paddingto: 0,
                position: 'absolute', 
                flexDirection: 'row'
            }}>
                <Avatar 
                    sx={{
                        width: '128px',
                        height: '128px',
                        position: 'relative',
                        display: 'flex',
                        border: '2px solid rgb(255, 255, 255)',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1,
                        background: 'white'
                    }}
                    src={profilePicture ? `http://localhost:8000/admin-profile/${accessToken.idNumber}/` + profilePicture : ''}
                />
                <ListItemText sx={{
                    minWidth: 0,
                    margin: '24px 24px 0px',
                    flex: '1 1 auto',
                    textAlign: 'unset'
                }}>
                    <Typography sx={{ fontSize: '1.25rem'}}>{accessToken.fName}</Typography>
                    <Typography>{accessToken.idNumber}</Typography>
                </ListItemText>
            </Stack>
        </Box>
        <Box sx={{
            overflow: 'hidden',
            minHeight: '48px',
            display: 'flex',
            width: '100%',
            bottom: '0px',
            zIndex:9,
            position: 'absolute',
            background: 'rgb(33, 43, 54)'
        }}>
           
        </Box>
    </Paper>
  )
}

export default ProfileHeader