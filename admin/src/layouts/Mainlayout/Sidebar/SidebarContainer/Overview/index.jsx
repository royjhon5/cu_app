import ListSubHeaderStyle from "../../../../../components/StyledListItemButton/ListSubHeader";
import ListItemButtonStyle from "../../../../../components/StyledListItemButton/ListItemButton";
import { useNavigate } from "react-router-dom";
import CustomList from "../../../../../components/StyledListItemButton/CustomeList";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import { useState } from "react";
import { useTheme } from "@mui/material";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import CustomCollapseButton from "../../../../../components/StyledListItemButton/CustomCollapseListButton";
import Collapsebtn from "../../../../../components/StyledListItemButton/CustomCollapseListButton/Collapsebtn";
import PopoverStyled from "../../../../../components/Popover";

const OverView = () => {
  const theme = useTheme()
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorElHere, setanchorElHere] = useState(null);
  const opens = Boolean(anchorElHere);
  const navigateDashboard = () => {
    navigate('/dashboard'); 
  }

  const navigateSample = () => {
    navigate('/dashboard/user/account-settings')
  }

  const handleClick = (event) => {
    setOpen(!open);
    setanchorElHere(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setanchorElHere(null);
  };

  

  return (
    <CustomList >
        <ListSubHeaderStyle ListLabel="OVERVIEW" />
        <ListItemButtonStyle ListbtnLabel="Dashboard" activePath="/dashboard" MenuClick={navigateDashboard} />
        <ListItemButtonStyle ListbtnLabel="User Account" activePath="/dashboard/user/account-settings" MenuClick={navigateSample} />
        <ListItemButtonStyle ListbtnLabel="E-commerce" />
        <CustomCollapseButton CollpaseClick={handleClick} CollpaseBtnLabel="Collapsed" IconChildren={<ForwardToInboxTwoToneIcon />} >
           {open ? 
             <ArrowDropDownTwoToneIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'flex'}} />:
             <ArrowRightIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'none' : 'flex'}} />
           }
             <ArrowDropDownTwoToneIcon sx={{ display: theme.palette.appSettings.layout ==='collapsed' ? 'none' : theme.palette.appSettings.layout === 'horizontal' ? 'flex' : 'none'}} />
        </CustomCollapseButton>
        <PopoverStyled opens={opens} anchorElHere={anchorElHere} ClosePopOver={handlePopoverClose} />
        <Collapsebtn stateOpen={open} >
          <ListItemButtonStyle ListbtnLabel="E-commerce" />
          <ListItemButtonStyle ListbtnLabel="E-commerce" />
          <ListItemButtonStyle ListbtnLabel="E-commerce" />
          <ListItemButtonStyle ListbtnLabel="E-commerce" />
        </Collapsebtn>
        <ListItemButtonStyle ListbtnLabel="E-commerce" />
        
    </CustomList>
  )
}

export default OverView