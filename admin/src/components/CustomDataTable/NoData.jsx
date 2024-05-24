import { Stack, Typography } from "@mui/material"
import NoDataIcon from "../svg-icons/NoDataIcon"

const NoData = () => {
  return (
    <Stack sx={{
        display: 'flex',
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        height: '100%',
        borderRadius: '16px',
        border: '1px dashed rgba(145, 158, 171, 0.08)',
        backgroundColor: 'rgba(145, 158, 171, 0.04)',
        flexGrow: 1,
        color: 'rgb(99, 115, 129)'
    }}>
        <NoDataIcon />
        <Typography>No Data</Typography>
    </Stack>
  )
}

export default NoData