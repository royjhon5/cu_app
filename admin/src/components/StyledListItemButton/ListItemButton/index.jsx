import PropTypes from 'prop-types'
import { useTheme } from "@emotion/react"
import { ListItemButton } from "@mui/material"
import { useLocation } from 'react-router-dom'
import { SvgIconColors } from '../../../themes/palette'

const ListItemButtonStyle = ({ListbtnLabel, activePath, MenuClick}) => {
  const theme = useTheme();
  const sideActiveColor = SvgIconColors(theme.palette.appSettings)
  const location = useLocation();
  const isActive = location.pathname === activePath;
  return (
    <ListItemButton 
        sx={{ 
            margin: '0px 0px 4px',
            display: 'flex',
            justifyContent: theme.palette.appSettings.layout === 'collapsed' ? 'center' : 'flex-start',
            flexDirection: theme.palette.appSettings.layout === 'collapsed' ? 'column' : 'row',
            borderRadius: theme.palette.appSettings.layout === 'collapsed' ? '6px' : '8px',
            minHeight: '44px',
            fontSize: theme.palette.appSettings.layout === 'collapsed' ? '10px' : '0.875rem',
            textAlign: 'center',
            background: isActive ? `${sideActiveColor.svgcolor[600]}` : 'none',
            '&:hover': {
              backgroundColor: isActive ? `${sideActiveColor.svgcolor[600]}` : 'none',
            },
            color: isActive ? `${sideActiveColor.svgcolor[100]}` : '#637381'
        }}
        onClick={MenuClick}
    >
        {ListbtnLabel}
    </ListItemButton>
  )
}

ListItemButtonStyle.propTypes = {
    ListbtnLabel: PropTypes.any,
    activePath: PropTypes.string,
    MenuClick: PropTypes.any,
};

export default ListItemButtonStyle