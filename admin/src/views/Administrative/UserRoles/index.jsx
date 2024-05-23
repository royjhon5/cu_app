import { Fragment } from "react"
import { Box, Typography, Stack, Button } from '@mui/material'
import BreadCrumbs from "../../../components/BreadCrumbs"
import ContentData from "./ContentData"

const UserRoles = () => {
  return (
    <Fragment>
        <Box sx={{ mb: '40px' }}>
            <Stack sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Box sx={{ flexGrow: 1 , display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography variant="h4">User Role</Typography>
                    <BreadCrumbs />
                </Box>
                <Box sx={{ flexShrink: 0}}>
                    <Button variant="contained">
                        Add Role
                    </Button>
                </Box>
            </Stack>
        </Box>
        <ContentData />
    </Fragment>
  )
}

export default UserRoles