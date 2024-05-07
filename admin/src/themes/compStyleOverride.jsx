export default function compStyleOverride(appSettings) {
  const paletteMode = appSettings && appSettings.paletteMode ? appSettings.paletteMode : 'light';
  const AppContrast = appSettings && appSettings.contrast ? appSettings.contrast : 'normal';
  const boxShadowDrawer = paletteMode === 'dark' ? 'rgba(0, 0, 0, 0.24) -40px 40px 80px -8px' : 'rgba(145, 158, 171, 0.24) -40px 40px 80px -8px'

  let paperDrawerColor;
  if (paletteMode === 'dark') {
      paperDrawerColor = AppContrast === 'bold' ? 'rgba(22, 28, 36, 0.9)' : 'rgba(22, 28, 36, 0.9)';
  } else {
      paperDrawerColor = AppContrast === 'bold' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.9)';
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
              elevation: 0
          },
          width: '100%',
          maxWidth: '280px',
          background: paperDrawerColor,
          backgroundImage: 'url(src/assets/images/cyan-blur.png), url(src/assets/images/red-blur.png)',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'right top, left bottom',
          backgroundSize: '50%, 50%',
          boxShadow: boxShadowDrawer
      },
  }
}
