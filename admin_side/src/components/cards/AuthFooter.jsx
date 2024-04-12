import { Link, Typography, Stack } from '@mui/material';

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2">
        CU Dashboard
    </Typography>
    <Typography variant="subtitle2" component={Link} href="https://roy-portfolio-livid.vercel.app/" target="_blank" underline="hover">
      &copy; RoyDev - https://roy-portfolio-livid.vercel.app/
    </Typography>
  </Stack>
);

export default AuthFooter;
