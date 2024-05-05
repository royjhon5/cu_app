
export default function themeTypography(appSettings){
    const paletteMode = appSettings && appSettings.paletteMode ? appSettings.paletteMode : 'light'; // Default to 'light' if appSettings or paletteMode is not defined
    const textColor = paletteMode === 'dark' ? 'white' : 'black';
    return {
        fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
          h6: {
            fontWeight: 500,
            color: textColor,
            fontSize: '0.75rem'
          },
          h5: {
            fontSize: '0.875rem',
            color: textColor,
            fontWeight: 500
          },
          h4: {
            fontSize: '1rem',
            color: textColor,
            fontWeight: 600
          },
          h3: {
            fontSize: '1.25rem',
            color: textColor,
            fontWeight: 600
          },
          h2: {
            fontSize: '1.5rem',
            color: textColor,
            fontWeight: 700
          },
          h1: {
            fontSize: '2.125rem',
            color: textColor,
            fontWeight: 700
          },
          subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: textColor
          },
          subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: textColor
          },
          caption: {
            fontSize: '0.75rem',
            color: textColor,
            fontWeight: 400
          },
          body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.334em'
          },
          body2: {
            letterSpacing: '0em',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: textColor
          },
          button: {
            textTransform: 'capitalize'
          },
          customInput: {
            marginTop: 1,
            marginBottom: 1,
            '& > label': {
              top: 23,
              left: 0,
              color: 'inherit',
              '&[data-shrink="false"]': {
                top: 5
              }
            },
            '& > div > input': {
              padding: '30.5px 14px 11.5px !important'
            },
            '& legend': {
              display: 'none'
            },
            '& fieldset': {
              top: 0
            }
          },
          mainContent: {
            width: '100%',
            minHeight: 'calc(100vh - 88px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '88px',
            marginRight: '20px',
            borderRadius: `2px`,  
          },
          menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'black',
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px'
          },
          subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: 'black',
            textTransform: 'capitalize'
          },
          commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px'
          },
          smallAvatar: {
            width: '22px',
            height: '22px',
            fontSize: '1rem'
          },
          mediumAvatar: {
            width: '34px',
            height: '34px',
            fontSize: '1.2rem'
          },
          largeAvatar: {
            width: '44px',
            height: '44px',
            fontSize: '1.5rem'
          }
    }
}