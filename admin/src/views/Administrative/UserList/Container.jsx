import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Paper, Select, Stack, Tab, Tabs, TextField, useTheme } from "@mui/material"
import { useEffect, useState } from "react";
import BoxBadge from "./BoxBadge";
import http from "../../../../../client/src/api/http";
import { toast } from "sonner";

const Container = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [selectRole, setSelectRole] = useState([]);
  const [roleData, setRoleData] = useState([])
  const tabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectRole(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  

  useEffect(() => {
    const getRoles = async () => {
        http.get('/get-roles')
        .then((response) => {
            setRoleData(response.data)
        })
        .catch((err) => {
            toast.error(err, 'Cannot connect to the server!')
        })
      } 
    getRoles()
  }, [])

  console.log(roleData)


  return (
    <Paper>
        <Tabs 
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
        sx={{ 
            paddingLeft: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl:'0px'}, 
            paddingRight: { xs: '20px', sm: '20px', md: '0px', lg: '0px', xl:'0px'},
            '& .MuiTabs-indicator': { 
                backgroundColor: theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(255,255,255)' : 'rgb(33,43,54)' } 
            }} 
            value={tabValue} 
            onChange={tabChange}
            >
             <Tab 
             icon={<BoxBadge 
             color={theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(33,43,54)' : 'rgb(255,255,255)'}
             bgcolor={theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(255,255,255)' : 'rgb(33,43,54)'}>23</BoxBadge>} 
             iconPosition="end" 
             label="All" 
             disableRipple sx={{ minHeight: '48px', minWidth: '48px', marginRight: '40px', padding: 0, '&.Mui-selected': { color: 'inherit' }}} />
             <Tab 
             icon={<BoxBadge 
             color={tabValue === 1 ? theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(255,255,255)' : 'rgb(255,255,255)' : 'rgb(34, 197, 94)'}
             bgcolor={tabValue === 1 ? theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(34, 197, 94)' : 'rgb(34, 197, 94)' : 'rgba(34, 197, 94, 0.16)'}>23</BoxBadge>} 
             iconPosition="end"  label="Active" disableRipple 
             sx={{ minHeight: '48px', minWidth: '48px', marginRight: '40px', padding: 0, '&.Mui-selected': { color: 'inherit' }}} />
             <Tab 
             icon={<BoxBadge 
             color={tabValue === 2 ? theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(33, 43, 54)' : 'rgb(33, 43, 54)' : 'rgb(255, 214, 102)'}
             bgcolor={tabValue === 2 ? theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(255, 171, 0)' : 'rgb(255, 171, 0)' : 'rgba(255, 171, 0, 0.16)'}>23</BoxBadge>} 
             iconPosition="end" label="Pending" disableRipple sx={{ minHeight: '48px', minWidth: '48px', marginRight: '40px', padding: 0, '&.Mui-selected': { color: 'inherit' }}} />
             <Tab 
             icon={<BoxBadge 
             color={tabValue === 3 ? theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(255,255,255)' : 'rgb(255,255,255)' : 'rgb(255, 172, 130)'}
             bgcolor={tabValue === 3 ? theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(255, 86, 48)' : 'rgb(255, 86, 48)' : 'rgba(255, 86, 48, 0.16)'}>23</BoxBadge>} 
             iconPosition="end" label="Banned" disableRipple sx={{ minHeight: '48px', minWidth: '48px', marginRight: '40px', padding: 0, '&.Mui-selected': { color: 'inherit' }}} />
             <Tab 
             icon={<BoxBadge 
             color={tabValue === 4 ? theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(33, 43, 54)' : 'rgb(255, 255, 255)' : 'rgb(145, 158, 171)'}
             bgcolor={tabValue === 4 ? theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(33, 43, 54)' : 'rgba(145, 158, 171, 0.16)'}>23</BoxBadge>} 
             iconPosition="end" label="Rejected" disableRipple sx={{ minHeight: '48px', minWidth: '48px', marginRight: '40px', padding: 0, '&.Mui-selected': { color: 'inherit' }}} />
        </Tabs>
        <Stack sx={{ display: 'flex', flexDirection: {xl: 'row', lg: 'row', md: 'row', sm: 'column', xs: 'column'}, gap: '16px', padding: '20px'  }}>
                <FormControl sx={{width: { xl: '15%', lg:'15%', md: '30%', sm: '100%', xs: 'column' }}}>
                    <InputLabel id="demo-multiple-checkbox-label">Role</InputLabel>
                    <Select multiple
                    value={selectRole} 
                    onChange={handleSelectChange}
                    label="Role"
                    renderValue={(selected) => selected.join(', ')}
                    >
                        {roleData.map((name) => (
                            <MenuItem key={name.id} value={name.role}>
                            <Checkbox checked={selectRole.indexOf(name.role) > -1} />
                            <ListItemText primary={name.role} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField 
                    fullWidth
                    label="Search"
                />
        </Stack>
    </Paper>
  )
}

export default Container