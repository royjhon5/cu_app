import { Box, IconButton, Stack, TextField, Tooltip, Typography } from "@mui/material"
import PerfectScrollbar from 'react-perfect-scrollbar';
import SendIcon from '@mui/icons-material/Send';

const MessageContainer = () => {
  return (
    <>
        <Box sx={{
            WebkitBoxFlex: 1, 
            flexGrow: 1,
            height: '100%',
            overflow: 'hidden',
            padding: 1.5,
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;'
        }}>
            <PerfectScrollbar>
                <Box>
                    {/* Admin Message */}

                    {/* Admin Message */}

                    {/* User Message */}
                        <Stack sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginBottom: '40px'
                        }}>
                            <Stack sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end'
                            }}>
                                <Typography sx={{ fontSize: '0.75rem' }}>2 hours ago</Typography>
                                <Stack sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    position: 'relative'
                                }}>
                                    <Stack sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '12px',
                                        minWidth: '48px',
                                        maxWidth: '320px',
                                        borderRadius:'8px',
                                        background: 'rgb(200, 250, 214)',
                                        color: 'rgb(33, 43, 54)'
                                    }}>
                                    The waves crashed against the shore, creating a soothing symphony of sound.
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    {/* User Message */}
                </Box>
            </PerfectScrollbar>
        </Box>
        <Box sx={{ padding: 1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: 1, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'}}>
            <TextField size="small" fullWidth variant="filled" label="Type a message" />
            <Tooltip tite="Send" placement="top">
            <IconButton size="medium">        
                    <SendIcon fontSize="small" color="primary" />
            </IconButton>
            </Tooltip>
        </Box>
    </>
  )
}

export default MessageContainer