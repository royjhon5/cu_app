import { Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material"
import { Fragment } from "react";
import CloseIcon from "../../svg-icons/CloseIcon";
import PerfectScrollbar from 'react-perfect-scrollbar';
import Mode from "../Settings/Mode";
import Contrast from "../Settings/Contast";
import Layout from "../Settings/Layout";
import Stretch from "../Settings/Stretch";
import Presets from "../Settings/Presets";

const DrawerContainer = () => {
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
            <Typography fontSize="18px">Settings</Typography>
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
            <PerfectScrollbar 
            component="div"
            style={{
                overflow: 'hidden',
                width: 'inherit',
                height: 'inherit',
                maxWidth: 'inherit',
                maxHeight: 'inherit'
            }}
            >
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    padding: '24px'
                }}>
                    <Mode />
                    <Contrast />
                    <Layout />
                    <Stretch />
                    <Presets />
                </Box>
            </PerfectScrollbar>
         </Box>
         <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="outlined" fullWidth>
                Fullscreen
            </Button>
         </Box>
    </Fragment>
  )
}

export default DrawerContainer