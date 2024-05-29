import { Box, Stack, Typography } from "@mui/material"
import { Fragment } from "react"
import BreadCrumbs from "../../../components/BreadCrumbs"

const UserList = () => {
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
            </Stack>
        </Box>
    </Fragment>
  )
}

export default UserList