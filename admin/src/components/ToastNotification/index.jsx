import { useTheme } from '@mui/material';
import { Toaster } from 'sonner';

const ToastNotification = () => {
  const theme = useTheme();
  return (
    <Toaster 
        position='top-right'
        toastOptions={{
            style: { background: theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(33,43,54)' : 'rgb(255,255,255)', 
            border: 'none',
            color: theme.palette.appSettings.paletteMode === 'dark' ? 'rgb(255,255,255)' : 'rgb(22, 28, 36)',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 8px 16px 0px'
            },
        }}
    />
  )
}

export default ToastNotification