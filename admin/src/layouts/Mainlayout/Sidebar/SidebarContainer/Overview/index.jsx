import { List } from "@mui/material"
import ListSubHeaderStyle from "../../../../../components/StyledListItemButton/ListSubHeader";
import ListItemButtonStyle from "../../../../../components/StyledListItemButton/ListItemButton";
import { useNavigate } from "react-router-dom";


const OverView = () => {
  const navigate = useNavigate();
  const navigateDashboard = () => {
    navigate('/dashboard')
  }

  const navigateSample = () => {
    navigate('/dashboard/user/account-settings')
  }
  return (
    <List sx={{ background: 'none' }}>
        <ListSubHeaderStyle ListLabel="OVERVIEW" />
        <ListItemButtonStyle ListbtnLabel="Dashboard" activePath="/dashboard" MenuClick={navigateDashboard} />
        <ListItemButtonStyle ListbtnLabel="User Account" activePath="/dashboard/user/account-settings" MenuClick={navigateSample} />
        <ListItemButtonStyle ListbtnLabel="E-commerce" />
    </List>
  )
}

export default OverView