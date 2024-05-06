export default function compStyleOverride(appSettings) {
  const paletteMode = appSettings && appSettings.paletteMode ? appSettings.paletteMode : 'light';
  const AppContrast = appSettings && appSettings.contrast ? appSettings.contrast : 'normal';

  let paperDrawerColor;
  if (paletteMode === 'dark') {
      paperDrawerColor = AppContrast === 'high' ? 'rgba(22, 28, 36, 0.9)' : 'rgba(22, 28, 36, 0.9)';
  } else {
      paperDrawerColor = AppContrast === 'high' ? 'rgba(244, 246, 248, 0.9)' : 'rgba(255, 255, 255, 0.9)';
  }

  return {
      MuiPaper: {
          defaultProps: {
              elevation: 0
          },
          styleOverrides: {
              root: {
                  backgroundImage: 'none'
              },
          }
      },
      MuiDrawer: {
          defaultProps: {
              elevation: 16
          },
          width: '100%',
          maxWidth: '280px',
          backgroundColor: paperDrawerColor,
          backgroundImage: 'url(src/assets/images/cyan-blur.png), url(src/assets/images/red-blur.png)',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'right top, left bottom',
          backgroundSize: '50%, 50%',
      },
  }
}
