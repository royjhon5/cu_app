import { Box, Typography } from "@mui/material"
import { Fragment } from "react"
import BreadCrumbs from "../../components/BreadCrumbs"
import ProfileHeader from "./ProfileHeader"

const UserProfile = () => {

  return (
    <Fragment>
        <Box sx={{ mb: '40px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h4">User Profile</Typography>
            <BreadCrumbs />
        </Box>
        <ProfileHeader />
    </Fragment>
  )
}

export default UserProfile