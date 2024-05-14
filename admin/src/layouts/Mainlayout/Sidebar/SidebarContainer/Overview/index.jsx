import ListSubHeaderStyle from "../../../../../components/StyledListItemButton/ListSubHeader";
import ListItemButtonStyle from "../../../../../components/StyledListItemButton/ListItemButton";
import { useNavigate } from "react-router-dom";
import CustomList from "../../../../../components/StyledListItemButton/CustomeList";


const OverView = () => {
  const navigate = useNavigate();
  const navigateDashboard = () => {
    navigate('/dashboard')
  }

  const navigateSample = () => {
    navigate('/dashboard/user/account-settings')
  }
  return (
    <CustomList >
        <ListSubHeaderStyle ListLabel="OVERVIEW" />
        <ListItemButtonStyle ListbtnLabel="Dashboard" activePath="/dashboard" MenuClick={navigateDashboard} />
        <ListItemButtonStyle ListbtnLabel="User Account" activePath="/dashboard/user/account-settings" MenuClick={navigateSample} />
        <ListItemButtonStyle ListbtnLabel="E-commerce" />
    </CustomList>
  )
}

export default OverView