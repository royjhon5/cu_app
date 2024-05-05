import { Box, Button, Stack, Typography } from "@mui/material"

const Layout = () => {
  return (
    <Box>
        <Typography sx={{
            margin: '0px 0px 12px',
            lineHeight: 1.5,
            fontSize: '0.75rem',
            fontWeight: 600
        }}>
            Layout</Typography>
        <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px'
        }}>
            <Button 
            variant="outlined"
            sx={{
                width: '100%',
                height: '56px',
                padding: 0
            }}>
                <Stack sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    flexShrink: 0,
                    padding: '4px',
                    width: '28px',
                    height: '100%',
                    borderRight: '1px solid rgba(145, 158, 171, 0.08)'
                }}>
                    <Box sx={{
                        flexShrink: 0,
                        borderRadius: '4px',
                        width: '8px',
                        height: '8px',
                        background: 'linear-gradient(135deg, rgb(104, 205, 249) 0%, rgb(7, 141, 238) 100%)'
                    }}></Box>
                    <Box sx={{
                        flexShrink: 0,
                        borderRadius: '4px',
                        width: '100%',
                        height: '3px',
                        opacity: 0.48,
                        background: 'linear-gradient(135deg, rgb(104, 205, 249) 0%, rgb(7, 141, 238) 100%)'
                    }}></Box>
                    <Box sx={{
                        flexShrink: 0,
                        borderRadius: '4px',
                        width: '100%',
                        height: '3px',
                        maxWidth: '12px',
                        opacity: 0.24,
                        background: 'linear-gradient(135deg, rgb(104, 205, 249) 0%, rgb(7, 141, 238) 100%)'
                    }}></Box>
                </Stack>
                <Box sx={{
                    padding: '4px',
                    WebkitBoxFlex: 1,
                    flexGrow: 1,
                    height: '100%',
                    width: '100%'
                }}>
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        opacity: 0.24,
                        borderRadius: '4px',
                        background: 'linear-gradient(135deg, rgb(104, 205, 249) 0%, rgb(7, 141, 238) 100%)'
                    }}></Box>
                </Box>
            </Button>
            <Button 
            variant="outlined"
            sx={{
                display: 'inline-flex',
                width: '100%',
                height: '56px',
                padding: 0,
                flexDirection: 'column'
            }}>
                <Stack sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '4px',
                    flexShrink: 0,
                    padding: '4px',
                    width: '100%',
                    height: '16px',
                    borderRight: 'unset',
                    WebkitBoxAlign: 'center',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(145, 158, 171, 0.08)'
                }}>
                    <Box sx={{
                        flexShrink: 0,
                        borderRadius: '4px',
                        background: 'rgb(145, 158, 171)',
                        width: '8px',
                        height: '8px'
                    }}></Box>
                    <Box sx={{
                        flexShrink: 0,
                        borderRadius: '4px',
                        background: 'rgb(145, 158, 171)',
                        width:'12px',
                        height: '3px',
                        opacity: 0.48
                    }}></Box>
                    <Box sx={{
                        flexShrink: 0,
                        borderRadius: '4px',
                        background: 'rgb(145, 158, 171)',
                        width:'8px',
                        height: '3px',
                        maxWidth: '12px',
                        opacity: 0.48
                    }}></Box>
                </Stack>
                <Box sx={{
                    padding: '4px',
                    WebkitBoxFlex: 1,
                    flexGrow: 1,
                    height: '100%',
                    width: '100%'
                }}>
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        opacity: 0.08,
                        borderRadius: '4px',
                        background: 'rgb(145, 158, 171)'
                    }}></Box>
                </Box>
            </Button>
            <Button 
            variant="outlined"
            sx={{
                width: '100%',
                height: '56px'
            }}>
                false
            </Button>
        </Stack>
    </Box>
  )
}

export default Layout