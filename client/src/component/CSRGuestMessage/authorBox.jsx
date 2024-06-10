import { Grow, Stack, Typography } from "@mui/material"
import PropTypes from 'prop-types'
const AuthorBox = ({authorMessage, authorTime, id}) => {
  return (
    <Grow in={true}>
        <Stack id={id} sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: '40px',
        mr:1.5,
        mt:1
    }}>
        <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        }}>
            <Typography sx={{ fontSize: '0.75rem' }}>{authorTime}</Typography>
            <Stack sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative'
            }}>
                <Stack sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '12px',
                    minWidth: '48px',
                    maxWidth: '320px',
                    borderRadius:'8px',
                    background: 'rgb(200, 250, 214)',
                    color: 'rgb(33, 43, 54)',
                    fontSize: '0.875rem',
                }}>
                {authorMessage}
                </Stack>
            </Stack>
        </Stack>
    </Stack>
    </Grow>
  )
}

AuthorBox.propTypes = {
    authorTime: PropTypes.object,
    authorMessage: PropTypes.string,
    id: PropTypes.string,
}

export default AuthorBox