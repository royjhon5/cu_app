import { Paper, Stack, TableCell, TextField } from '@mui/material'
import useFetch from '../../../hooks/useFetch';
import CustomTable from '../../../components/CustomDataTable';
import TableHeader from '../../../components/CustomDataTable/TableHeader';
import CustomHeaderCell from '../../../components/CustomDataTable/CustomHeaderCell';
import CustomTableBody from '../../../components/CustomDataTable/TableBody';
import NoData from '../../../components/CustomDataTable/NoData';
const ContentData = () => {
  const { data, loading, error } = useFetch('/get-roles');
  if(loading) return <h1>Loading ...</h1>
  if(error) console.log9error;
  console.log(data)
  return (
    <Paper>
        <Stack sx={{ display: 'flex', padding: '20px'}}>
            <TextField variant='outlined' label="Search" sx={{ width: { xl: '50%', lg: '50%' }}} />
        </Stack>
        <CustomTable>
            <TableHeader>
                <CustomHeaderCell>User</CustomHeaderCell>
            </TableHeader>
            <CustomTableBody>
                <TableCell><NoData/></TableCell>
            </CustomTableBody>
        </CustomTable>
    </Paper>
  )
}

export default ContentData