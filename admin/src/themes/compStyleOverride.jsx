export default function compStyleOverride(appSettings, radius) {
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
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          maxWidth: '100%',
          display: 'inline-block',
          verticalAlign: 'bottom',
        },
      },
    },
    MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            borderRadius: `${radius}px`
          }
        }
      },
      MuiPaper: {
          defaultProps: {
              elevation: 0
          },
          styleOverrides: {
              root: {
                  backgroundImage: 'none'
              },
              rounded: {
                borderRadius: `${radius}px`
              }
          }
      },
      MuiDrawer: {
          defaultProps: {
              elevation: 0
          },
          width: '100%',
          background: paperDrawerColor,
          backgroundImage: 'url(src/assets/images/cyan-blur.png), url(src/assets/images/red-blur.png)',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'right top, left bottom',
          backgroundSize: '50%, 50%',
          boxShadow: boxShadowDrawer
      },
      MuiCard: {
        styleOverrides: {
          root: {
            // boxShadow: theme.customShadows.card,
            // borderRadius: Number(theme.shape.borderRadius) * 2,
            position: 'relative',
            zIndex: 0, // Fix Safari overflow: hidden with border radius
          },
        },
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: { variant: 'h6' },
          subheaderTypographyProps: { variant: 'body2' },
        },
        styleOverrides: {
          root: {
            // padding: theme.spacing(3, 3, 0),
          },
        },
      },
  }
}
