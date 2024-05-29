import CustomList from "../../../../../components/StyledListItemButton/CustomeList"
import ListItemButtonStyle from "../../../../../components/StyledListItemButton/ListItemButton"
import ListSubHeaderStyle from "../../../../../components/StyledListItemButton/ListSubHeader"
import { useNavigate } from 'react-router-dom'
const AdminisTrative = () => {
  const navigate = useNavigate();
  const navigateUserRoles = () => {navigate('/dashboard/administrative/user-roles')}
  const navigateUserList = () => {navigate('/dashboard/administrative/user-list')}
  return (
    <CustomList>
        <ListSubHeaderStyle ListLabel="ADMINSTRATIVE" />
        <ListItemButtonStyle ListbtnLabel="User Roles" activePath="/dashboard/administrative/user-roles" MenuClick={navigateUserRoles} />
        <ListItemButtonStyle ListbtnLabel="User List" activePath="/dashboard/administrative/user-list" MenuClick={navigateUserList} />
    </CustomList>
  )
}

export default AdminisTrative