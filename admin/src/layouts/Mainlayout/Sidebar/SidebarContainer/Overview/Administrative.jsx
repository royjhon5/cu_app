import { useNavigate } from "react-router-dom"
import Collapsebtn from "../../../../../components/StyledListItemButton/CustomCollapseListButton/Collapsebtn"
import StyledCollapsedButton from "../../../../../components/StyledListItemButton/StyledCollpasedButton/StyledCollpasedButton"
import StyledPopover from "../../../../../components/StyledPopover"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useRef, useState } from "react"
import { useTheme } from "@emotion/react"
import ListBtn from "../../../../../components/StyledListItemButton/CustomCollapseListButton/ListBtn"


const AdministrativeList = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [openTwo, setOpenTwo] = useState(false);
  const [anchorV3, setAnchorV3] = useState(null);
  const popoverRef = useRef(null);
  const opensTwo = Boolean(anchorV3)
  const id = 'mouse-over-popover'
  const navigateUserRoles = () => {navigate('/dashboard/administrative/user-roles')}
  const navigateUserList = () => {navigate('/dashboard/administrative/user-list')}
  const navigateMessageInbox = () => {navigate('/dashboard/administrative/message-inbox')}
  
  const openCollapseV3 = () => {
        setOpenTwo(!openTwo)
  }
    
  const handleOpenCollapseV3 = (event) => {
        setAnchorV3(event.currentTarget)
  }

  const handleCloseCollapseV3 = () => {
    if (popoverRef.current && popoverRef.current.contains(event.relatedTarget)) {
        return;
    }
    setAnchorV3(null)
  }

  const blackFunc = () => {};
  return (
    <>
        <StyledCollapsedButton 
        id={id} 
        onClick={openCollapseV3} 
        IconChildren={<AdminPanelSettingsIcon fontSize="small" />} 
        CollpaseBtnLabels="Administrative" 
        handlePopoverOpen={theme.palette.appSettings.layout === 'vertical' ? blackFunc : handleOpenCollapseV3} 
        handlePopoverClose={handleCloseCollapseV3}
        >
            {openTwo ? 
             <ArrowDropDownTwoToneIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'flex'}} />:
             <ArrowRightIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'flex'}} />
            }
             <ArrowDropDownTwoToneIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'flex' : 'none'}} />
        </StyledCollapsedButton>
        <StyledPopover 
        id={id} 
        open={opensTwo} 
        anchorEl={anchorV3} 
        onMouseLeave={handleCloseCollapseV3} 
        onMouseEnter={openCollapseV3} 
        popoverRef={popoverRef}  />
        <Collapsebtn stateOpen={openTwo}>
          <ListBtn
          activePath="/dashboard/administrative/user-roles"
          onClick={navigateUserRoles}
          label="User Role"
           />
          <ListBtn 
          label="User List" 
          activePath="/dashboard/administrative/user-list"
          onClick={navigateUserList}
           />
          <ListBtn 
          label="Guest Chat Inbox" 
          activePath="/dashboard/administrative/message-inbox" 
          onClick={navigateMessageInbox}
          />         
        </Collapsebtn>
    </>
  )
}

export default AdministrativeList