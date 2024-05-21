import { Box, Button, ListItemText, Stack, Typography } from "@mui/material"
import NotifButton from "../NotifComponent"
import DataContainer from "../NotifComponent/Container"
import Identification from "../NotifComponent/Identification"
import ListAvatar from "../NotifComponent/ListAvatar"
import ListContainer from "../NotifComponent/ListContainer"

const NotificationData = () => {
  return (
    <ListContainer>
        <NotifButton>
            <Identification />
            <ListAvatar />
            <DataContainer>
                <ListItemText sx={{
                  flex: '1 1 auto',
                  minWidth: 0,
                  margin: 0
                }}>
                  <Box sx={{ marginBottom: '4px'}}>
                      <Typography fontSize={15}>Roy jhon I. Cubillan</Typography>
                  </Box>
                  <Stack sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    lineHeight: 1.5,
                    fontSize: '0.75rem',
                    fontWeight: '400'
                  }}>
                      less than a minute ago 
                      <Box sx={{ width: '2px', height: '2px', backgroundColor: 'currentcolor', marginLeft: '4px', marginRight: '4px', borderRadius: '50%' }}></Box>
                      Communication
                  </Stack>
                </ListItemText>
                <Stack sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                  marginTop: '12px'
                }}>
                    <Button variant="contained" color="primary" size="small">Accept</Button>
                    <Button variant="contained" color="error" size="small">Decline</Button>
                </Stack>
            </DataContainer>
        </NotifButton>
    </ListContainer>
  )
}

export default NotificationData