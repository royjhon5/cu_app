import { Box, Button, Typography } from "@mui/material"

const NavColor = () => {
  return (
    <Box>
        <Typography sx={{
            margin: '0px 0px 12px',
            lineHeight: 1.5,
            fontSize: '0.75rem',
            fontWeight: 600
        }}>
            Nav Color</Typography>
        <Box sx={{       
            gap: '12px 16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)'
        }}>
            <Button 
            sx={{
                height: '56px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
                background:'rgba(0, 167, 111, 0.08)',
                '&:hover': {
                    backgroundColor:'rgba(0, 167, 111, 0.08)',
                    color: 'inherit',
                }
            }}>
                <Box sx={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'rgb(0, 167, 111)',
                    transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    transform:'scale(2)'
                }}></Box>
            </Button>
            <Button 
            sx={{
                height: '56px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
                background:'rgba(7, 141, 238, 0.08)',
                '&:hover': {
                    backgroundColor:'rgba(7, 141, 238, 0.08)',
                    color: 'inherit',
                }
            }}>
                 <Box sx={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'rgb(7, 141, 238)',
                    transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    transform:'scale(2)'
                }}></Box>
            </Button>
            <Button 
            sx={{
                height: '56px',
                border: '1px solid rgba(145, 158, 171, 0.08)',
                background: 'rgba(118, 53, 220, 0.08)',
                '&:hover': {
                    backgroundColor: 'rgba(118, 53, 220, 0.08)',
                    color: 'inherit',
                }
            }}>
                <Box sx={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'rgb(118, 53, 220)',
                    transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    transform:'scale(2)'
                }}></Box>
            </Button>
        </Box>
    </Box>
  )
}

export default NavColor