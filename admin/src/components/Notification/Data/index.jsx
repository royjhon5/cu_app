import { Box, Button, ListItemText, Stack, Typography } from "@mui/material";
import NotifButton from "../NotifComponent";
import DataContainer from "../NotifComponent/Container";
import Identification from "../NotifComponent/Identification";
import ListAvatar from "../NotifComponent/ListAvatar";
import ListContainer from "../NotifComponent/ListContainer";
import { useEffect, useState } from "react";
import ReactTimeAgo from 'react-time-ago';
import http from "../../../api/http"
import { WebSocket } from "../../../main";
import { toast } from "sonner";

const NotificationData = () => {
  const [unRead, setUnread] = useState([]);
  const AppSocket = WebSocket();

  async function unreadNotify() {
    const response = await http.get('/unread-notify');
    const data = response.data;
    setUnread(data);
  }

  async function activateUser(useriDNumber) {
    try {
      await http.post(`/activate-client?id_number=${useriDNumber}`);
      unreadNotify();
      toast.success(`User ${unRead[0].first_name} has now been activated`)
    } catch (error) {
      console.error(error);
    }
  }
  

  useEffect(() => {  
    unreadNotify();
    AppSocket.on('containerNotif', () => {
      unreadNotify();
    })
    return () => {
      AppSocket.off('containerNotif');
    };
  }, [AppSocket]);

  return (
    <>
    {unRead.map((notificationData, index) => (
      <ListContainer key={index}>
      <NotifButton>
        {notificationData.notif_status === 1 ? '' : <Identification />}
          <ListAvatar />
          <DataContainer>
              <ListItemText sx={{
                flex: '1 1 auto',
                minWidth: 0,
                margin: 0
              }}>
                <Box sx={{ marginBottom: '4px'}}>
                    <Typography fontSize={15}>{notificationData.first_name} {notificationData.last_name} - {notificationData.id_number}</Typography>
                </Box>
                <Stack sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  lineHeight: 1.5,
                  fontSize: '0.75rem',
                  fontWeight: '400'
                }}>
                    <ReactTimeAgo date={new Date(notificationData.time_created).getTime()} /> 
                    <Box sx={{ width: '2px', height: '2px', backgroundColor: 'currentcolor', marginLeft: '4px', marginRight: '4px', borderRadius: '50%' }}></Box>
                    {notificationData.type_of_notification}
                </Stack>
              </ListItemText>
              <Stack sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                marginTop: '12px'
              }}>
                  {notificationData.notif_status === 1 ? '' 
                  :
                  <>
                  <Button variant="contained" color="primary" size="small" onClick={() => activateUser(notificationData.id_number)}>Accept</Button>
                  <Button variant="contained" color="error" size="small">Decline</Button>
                  </>
                  }
              </Stack>
          </DataContainer>
      </NotifButton>
  </ListContainer>
    ))}
    </>
  )
}

export default NotificationData