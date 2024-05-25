import { Fragment, useEffect, useState } from "react"
import { Box, Typography, Stack, Button, TextField } from '@mui/material'
import BreadCrumbs from "../../../components/BreadCrumbs"
import ContentData from "./ContentData"
import CustomDialog from "../../../components/CustomDialog"
import http from "../../../../../client/src/api/http"

const UserRoles = () => {
  const [open, setOpen] = useState(false);
  const [roleData, setRoleData] = useState('');
  const openDialog = () => {setOpen(true)}
  const closeDialog = () => {setOpen(false)}
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  
  const SaveNewRole = async () => {
    try {
        await http.post('/upload-roles', {role: roleData})
        getNewRoles();
    } catch (error) {
        console.error('Server Error', error);
        throw error;
    }
  }

  useEffect(() => {
    getNewRoles()
  }, [])

  const getNewRoles = () => {
    setLoading(true);
    http.get('/get-roles')
    .then((response) => {
        setData(response.data)
    })
    .catch((err) => {
        console.error(err)
    })
    .finally(() => {
        setLoading(false)
    })
  }

  

  return (
    <Fragment>
        <CustomDialog 
            open={open}
            maxWidth="sm"
            onClose={closeDialog}
            DialogTitles="Add New Roles"
            DialogContents={
                <TextField label="Role Description" fullWidth value={roleData} onChange={(e) => setRoleData(e.target.value)} sx={{ mt:1}}  />
            }
            DialogAction={
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <Button variant="contained" onClick={SaveNewRole}>Save</Button>
                    <Button variant="contained" color="error">Cancel</Button>
                </Box>
            }
        />
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
                    <Button variant="contained" onClick={openDialog}>
                        Add Role
                    </Button>
                </Box>
            </Stack>
        </Box>
        <ContentData roles={data} loading={loading} />
    </Fragment>
  )
}

export default UserRoles