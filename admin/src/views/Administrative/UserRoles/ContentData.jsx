import PropTypes from 'prop-types'
import { Box, CircularProgress, IconButton, Paper, Stack, TableCell, TableRow, TextField, Tooltip } from '@mui/material'
import CustomTable from '../../../components/CustomDataTable';
import TableHeader from '../../../components/CustomDataTable/TableHeader';
import CustomHeaderCell from '../../../components/CustomDataTable/CustomHeaderCell';
import CustomTableBody from '../../../components/CustomDataTable/TableBody';
import NoData from '../../../components/CustomDataTable/NoData';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Fragment } from 'react';
const ContentData = ({roles, loading}) => {
  return (
    <Paper>
        <Stack sx={{ display: 'flex', padding: '20px'}}>
            <TextField variant='outlined' label="Search" sx={{ width: { xl: '50%', lg: '50%' }}} />
        </Stack>
        <CustomTable>
            <TableHeader>
                <CustomHeaderCell>User Role</CustomHeaderCell>
                <CustomHeaderCell></CustomHeaderCell>
            </TableHeader>
            <CustomTableBody>
                {loading? (<TableRow>
                        <TableCell colSpan={1}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <CircularProgress color="inherit"/>
                            </Box>
                        </TableCell>
                    </TableRow>) : 
                    (
                    <>
                    {Array.isArray(roles) && roles.length > 0 ? (
                        roles.map((variable) => (
                            <Fragment key={variable.id}>
                                <TableRow hover >
                                    <TableCell sx={{ border: '1px dashed rgb(46, 50, 54)', width: '100%', borderLeft: 'none', borderRight: 'none' }}>{variable.role}</TableCell>
                                    <TableCell sx={{ border: '1px dashed rgb(46, 50, 54)', borderLeft: 'none', borderRight: 'none' }}>
                                        <Tooltip placement='left' title="Edit | Delete">
                                            <IconButton>
                                                <MoreVertIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            </Fragment>
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