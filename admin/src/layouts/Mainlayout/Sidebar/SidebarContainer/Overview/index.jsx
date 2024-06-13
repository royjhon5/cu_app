import ListSubHeaderStyle from "../../../../../components/StyledListItemButton/ListSubHeader";
import ListItemButtonStyle from "../../../../../components/StyledListItemButton/ListItemButton";
import { useNavigate } from "react-router-dom";
import CustomList from "../../../../../components/StyledListItemButton/CustomeList";
import AdministrativeList from "./Administrative";
import InventoryList from "./Inventory";

const OverView = () => {
  const navigate = useNavigate();
  const navigateDashboard = () => {navigate('/dashboard'); }

  return (
    <CustomList >
        <ListSubHeaderStyle ListLabel="OVERVIEW" />
        <ListItemButtonStyle ListbtnLabel="Dashboard" activePath="/dashboard" MenuClick={navigateDashboard} />
        <InventoryList />
        <AdministrativeList />
    </CustomList>
  )
}

export default OverView