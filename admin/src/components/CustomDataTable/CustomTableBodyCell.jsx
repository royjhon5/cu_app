import { TableCell } from '@mui/material'
import PropTypes from 'prop-types'

const CustomTableBodyCell = ({children, width, display, justifyContent, alignItems}) => {
  return (
    <TableCell sx={{ 
        border: '1px dashed rgb(46, 50, 54)', 
        width: width, 
        borderLeft: 'none', 
        borderRight: 'none', 
        textAlign: 'left', 
        padding: '16px', 
        display: display,
        justifyContent: justifyContent, 
        alignItems: alignItems
        }}>
        {children}
    </TableCell>
  )
}

CustomTableBodyCell.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
    display: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string
}

export default CustomTableBodyCell