import CustomList from "../../../../../components/StyledListItemButton/CustomeList"
import ListItemButtonStyle from "../../../../../components/StyledListItemButton/ListItemButton"
import ListSubHeaderStyle from "../../../../../components/StyledListItemButton/ListSubHeader"
import { useNavigate } from 'react-router-dom'
const AdminisTrative = () => {
  const navigate = useNavigate();
  const navigateUserRoles = () => {navigate('/dashboard/user-roles')}
  return (
    <CustomList>
        <ListSubHeaderStyle ListLabel="ADMINSTRATIVE" />
        <ListItemButtonStyle ListbtnLabel="User Roles" activePath="/dashboard/user-roles" MenuClick={navigateUserRoles} />
    </CustomList>
  )
}

export default AdminisTrative