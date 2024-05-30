import { Box, FormControlLabel, Switch } from "@mui/material"
import CustomTable from "../../../../components/CustomDataTable"
import CustomHeaderCell from "../../../../components/CustomDataTable/CustomHeaderCell"
import TableHeader from "../../../../components/CustomDataTable/TableHeader"
import { Fragment, useState } from "react"

const AllData = () => {
  const [dense, setDense] = useState(false);
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  return (
    <Fragment>
        <CustomTable size={dense ? 'small' : 'medium'}>
        <TableHeader>
            <CustomHeaderCell>Name</CustomHeaderCell>
        </TableHeader>
        </CustomTable>
        <Box sx={{ padding: 2}}>
          <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense"
          />
        </Box>
    </Fragment>
  )
}

export default AllData