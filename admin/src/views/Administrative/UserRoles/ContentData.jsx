import { Paper, Stack, TextField, TableContainer, Table, TableHead, TableRow, TableCell, Box, TablePagination } from '@mui/material'
import PerfectScrollbar from 'react-perfect-scrollbar';
const ContentData = () => {
  return (
    <Paper>
        <Stack sx={{ display: 'flex', padding: '20px'}}>
            <TextField variant='outlined' label="Search" sx={{ width: { xl: '50%', lg: '50%' }}} />
        </Stack>
        <TableContainer>
            <PerfectScrollbar>
                <Table sx={{ display: 'table', width: '100%', borderCollapse: 'collapse', borderSpacing: '0px', minWidth: '960px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ backgroundColor: 'rgba(145, 158, 171, 0.12)' }}>
                                User role
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </PerfectScrollbar>
        </TableContainer>
        <Box sx={{ position: 'relative' }}>
            <TablePagination component="div" rowsPerPageOptions={[5, 10, 25]} />
        </Box>
    </Paper>
  )
}

export default ContentData