import { Stack, Typography } from "@mui/material"
import HeaderTitle from "../../../component/CustomHeaderTitle"


const AllCategory = () => {
  return (
    <>
        <HeaderTitle title={<Typography>Hello World</Typography>} />
        <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}>

        </Stack>
    </>
  )
}

export default AllCategory