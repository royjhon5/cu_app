import CustomTable from "../../../../components/CustomDataTable"
import CustomHeaderCell from "../../../../components/CustomDataTable/CustomHeaderCell"
import TableHeader from "../../../../components/CustomDataTable/TableHeader"

const AllData = () => {
  return (
    <CustomTable>
        <TableHeader>
            <CustomHeaderCell>User Info.</CustomHeaderCell>
        </TableHeader>
    </CustomTable>
  )
}

export default AllData