import ListSubHeaderStyle from "../../../../../components/StyledListItemButton/ListSubHeader";
import ListItemButtonStyle from "../../../../../components/StyledListItemButton/ListItemButton";
import { useNavigate } from "react-router-dom";
import CustomList from "../../../../../components/StyledListItemButton/CustomeList";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import { useRef, useState } from "react";
import { useTheme } from "@mui/material";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import Collapsebtn from "../../../../../components/StyledListItemButton/CustomCollapseListButton/Collapsebtn";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StyledCollapsedButton from "../../../../../components/StyledListItemButton/StyledCollpasedButton/StyledCollpasedButton";
import StyledPopover from "../../../../../components/StyledPopover";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const OverView = () => {
  const theme = useTheme()
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorV3, setAnchorV3] = useState(null);
  const popoverRef = useRef(null);
  const opens = Boolean(anchorEl);
  const opensTwo = Boolean(anchorV3)
  const id = opens ? 'mouse-over-popover' : undefined;
  const navigateDashboard = () => {navigate('/dashboard'); }
  const navigateSample = () => {navigate('/dashboard/user/account-settings')}
  const navigateUserRoles = () => {navigate('/dashboard/administrative/user-roles')}
  const navigateUserList = () => {navigate('/dashboard/administrative/user-list')}
  const navigateMessageInbox = () => {navigate('/dashboard/administrative/message-inbox')}

  // const handleClick = () => {
  //   setOpen(!open);
  // };

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

  // const handlePopoverOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handlePopoverClose = () => {
  //   if (popoverRef.current && popoverRef.current.contains(event.relatedTarget)) {
  //     return;
  //   }
  //   setAnchorEl(null);
  // };

  const blackFunc = () => {};

  return (
    <CustomList >
        <ListSubHeaderStyle ListLabel="OVERVIEW" />
        <ListItemButtonStyle ListbtnLabel="Dashboard" activePath="/dashboard" MenuClick={navigateDashboard} />
        <ListItemButtonStyle ListbtnLabel="User Account" activePath="/dashboard/user/account-settings" MenuClick={navigateSample}/>
        <ListItemButtonStyle ListbtnLabel="E-commerce"/>
        {/* <StyledCollapsedButton onClick={handleClick} id={id} CollpaseBtnLabels="Collapsed V2" IconChildren={<ForwardToInboxTwoToneIcon />} handlePopoverOpen={theme.palette.appSettings.layout === 'vertical' ? blackFunc : handlePopoverOpen} handlePopoverClose={handlePopoverClose} >
            {open ? 
             <ArrowDropDownTwoToneIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'flex'}} />:
             <ArrowRightIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'flex'}} />
            }
             <ArrowDropDownTwoToneIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'flex' : 'none'}} />
        </StyledCollapsedButton>
        <StyledPopover id={id} open={opens} anchorEl={anchorEl} onMouseLeave={handlePopoverClose}  onMouseEnter={handleClick} popoverRef={popoverRef} />
        <Collapsebtn stateOpen={open}>
          <ListItemButtonStyle ListbtnLabel="E-commerce" IconChildrens={<FiberManualRecordIcon sx={{ fontSize: '5px', transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', transform: 'scale(1)' }} />} />
          <ListItemButtonStyle ListbtnLabel="E-commerce" />
          <ListItemButtonStyle ListbtnLabel="E-commerce" />
          <ListItemButtonStyle ListbtnLabel="E-commerce" />
        </Collapsebtn> */}
        <StyledCollapsedButton id={id} onClick={openCollapseV3} IconChildren={<AdminPanelSettingsIcon />} CollpaseBtnLabels="Administrative" handlePopoverOpen={theme.palette.appSettings.layout === 'vertical' ? blackFunc : handleOpenCollapseV3} handlePopoverClose={handleCloseCollapseV3}>
            {openTwo ? 
             <ArrowDropDownTwoToneIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'flex'}} />:
             <ArrowRightIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'flex'}} />
            }
             <ArrowDropDownTwoToneIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'flex' : 'none'}} />
        </StyledCollapsedButton>
        <StyledPopover id={id} open={opensTwo} anchorEl={anchorV3} onMouseLeave={handleCloseCollapseV3} onMouseEnter={openCollapseV3} popoverRef={popoverRef}  />
        <Collapsebtn stateOpen={openTwo}>
          <ListItemButtonStyle 
          ListbtnLabel="User Role" 
          activePath="/dashboard/administrative/user-roles" 
          MenuClick={navigateUserRoles}
          IconChildrens={<FiberManualRecordIcon sx={{ fontSize: '5px', transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', transform: 'scale(1)' }} 
          />} />
          <ListItemButtonStyle 
          ListbtnLabel="User List" 
          activePath="/dashboard/administrative/user-list"
          MenuClick={navigateUserList}
           />
          <ListItemButtonStyle 
          ListbtnLabel="Guest Chat Inbox" 
          activePath="/dashboard/administrative/message-inbox" 
          MenuClick={navigateMessageInbox}
          />
        </Collapsebtn>
    </CustomList>
  )
}

export default OverView