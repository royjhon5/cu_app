import { TableHead, TableRow } from '@mui/material'
import PropTypes from 'prop-types'

const TableHeader = ({children}) => {
  return (
    <TableHead>
        <TableRow>
                {children}
        </TableRow>
    </TableHead>
  )
}

TableHeader.propTypes = {
    children: PropTypes.any
}

export default TableHeader