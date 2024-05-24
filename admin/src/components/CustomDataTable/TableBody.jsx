import { TableBody, TableRow } from "@mui/material"
import PropTypes from 'prop-types'

const CustomTableBody = ({children}) => {
  return (
    <TableBody>
        <TableRow>
            {children}
        </TableRow>
    </TableBody>
  )
}

CustomTableBody.propTypes = {
    children: PropTypes.node
}

export default CustomTableBody