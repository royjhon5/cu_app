import PropTypes from 'prop-types'
import { TableCell, useTheme } from "@mui/material"

const CustomHeaderCell = ({children}) => {
  const theme = useTheme();
  return (
    <TableCell 
        sx={{ 
        backgroundColor: theme.palette.appSettings.paletteMode === 'dark' ? 'rgba(145, 158, 171, 0.12)' : '', 
        color: 'rgb(99, 115, 129)' ,
        borderBottom: theme.palette.appSettings.paletteMode === 'dark' ? '1px dashed rgb(46, 50, 54)' : '1px dashed rgb(241, 243, 244)',
        }}
        >
        {children}
    </TableCell>
  )
}

CustomHeaderCell.propTypes = {
    children: PropTypes.any
}

export default CustomHeaderCell