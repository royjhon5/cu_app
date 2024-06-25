import ListSubHeaderStyle from "../../../../../components/StyledListItemButton/ListSubHeader";
import ListItemButtonStyle from "../../../../../components/StyledListItemButton/ListItemButton";
import { useNavigate } from "react-router-dom";
import CustomList from "../../../../../components/StyledListItemButton/CustomeList";
import AdministrativeList from "./Administrative";
import InventoryList from "./Inventory";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingSection from "./Settings";

const OverView = () => {
  const navigate = useNavigate();
  const navigateDashboard = () => {navigate('/dashboard'); }

  return (
    <CustomList >
        <ListSubHeaderStyle ListLabel="OVERVIEW" />
        <ListItemButtonStyle ListbtnLabel="Dashboard" activePath="/dashboard" MenuClick={navigateDashboard} IconChildrens={<DashboardIcon fontSize="small" />} />
        <InventoryList />
        <AdministrativeList />
        <ListItemButtonStyle ListbtnLabel="Orders" IconChildrens={<ShoppingCartIcon fontSize="small" />} />
        {/* <SettingSection /> */}
    </CustomList>
  )
}

export default OverView