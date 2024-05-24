import PropTypes from 'prop-types'
import { Box, Paper, Stack, TableCell, TableRow, TextField } from '@mui/material'
import CustomTable from '../../../components/CustomDataTable';
import TableHeader from '../../../components/CustomDataTable/TableHeader';
import CustomHeaderCell from '../../../components/CustomDataTable/CustomHeaderCell';
import CustomTableBody from '../../../components/CustomDataTable/TableBody';
import NoData from '../../../components/CustomDataTable/NoData';
const ContentData = ({roles, loading}) => {
  return (
    <Paper>
        <Stack sx={{ display: 'flex', padding: '20px'}}>
            <TextField variant='outlined' label="Search" sx={{ width: { xl: '50%', lg: '50%' }}} />
        </Stack>
        <CustomTable>
            <TableHeader>
                <CustomHeaderCell>User Role</CustomHeaderCell>
            </TableHeader>
            <CustomTableBody>
                {loading? (<TableRow>
                        <TableCell colSpan={1}><h1>Loading ...</h1></TableCell>
                    </TableRow>) : 
                    (
                    <>
                    {Array.isArray(roles) && roles.length > 0 ? (
                        roles.map((variable) => (
                        <TableRow hover key={variable.id}>
                            <TableCell sx={{ border: '1px dashed rgb(46, 50, 54)' }}>{variable.role}</TableCell>
                        </TableRow>
                        ))
                        ) : (
                            <TableRow>
                                <TableCell sx={{ border: 'none'}}>
                                    <NoData />
                                </TableCell>
                             </TableRow>
                        )}  
                    </>
                    )
                } 
            </CustomTableBody>
        </CustomTable>
        <Box sx={{ padding: 5}}>

        </Box>
    </Paper>
  )
}

ContentData.propTypes = {
    roles: PropTypes.array,
    loading: PropTypes.bool
}

export default ContentData