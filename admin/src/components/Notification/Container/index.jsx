import { Box, Divider, IconButton, Stack, Typography } from "@mui/material"
import { Fragment } from "react";
import CloseIcon from "../../svg-icons/CloseIcon";
import PerfectScrollbar from 'react-perfect-scrollbar';
import NotificationData from "../Data";

const NotifDrawerContainer = () => {
  return (
    <Fragment>
        <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            WebkitBoxAlign: 'center',
            alignItems: 'center',
            WebkitBoxPack: 'justify',
            justifyContent: 'space-between', 
            padding: '16px 8px 16px 20px'
        }}>
            <Typography fontSize="18px">Notification</Typography>
            <IconButton size="medium"><CloseIcon /></IconButton>
        </Stack>
        <Divider sx={{
            margin:0,
            flexShrink: 0,
            borderWidth: '0px 0px thin',
            borderStyle: 'dashed'
         }} />
         <Box sx={{ 
            WebkitBoxFlex: 1,
            flexGrow: 1,
            height: '100%',
            overflow: 'hidden'
         }}>
            <PerfectScrollbar >
                <NotificationData />
            </PerfectScrollbar>
         </Box>
    </Fragment>
  )
}

export default NotifDrawerContainer