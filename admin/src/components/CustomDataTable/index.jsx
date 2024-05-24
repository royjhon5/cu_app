import { Table, TableContainer } from '@mui/material'
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types'
const CustomTable = ({ children }) => {
  return (
    <TableContainer>
        <PerfectScrollbar>
            <Table sx={{ display: 'table', width: '100%', borderCollapse: 'collapse', borderSpacing: '0px', minWidth: '960px' }}>
                {children}
            </Table>
        </PerfectScrollbar>
    </TableContainer>
  )
}

CustomTable.propTypes = {
    children: PropTypes.node,
}

export default CustomTable