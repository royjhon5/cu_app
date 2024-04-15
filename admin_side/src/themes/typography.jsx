export default function themeTypography(){
    return {
        h6: {
            fontWeight: 500,
            color: 'black',
            fontSize: '0.75rem'
          },
          h5: {
            fontSize: '0.875rem',
            color: 'black',
            fontWeight: 500
          },
          h4: {
            fontSize: '1rem',
            color: 'black',
            fontWeight: 600
          },
          h3: {
            fontSize: '1.25rem',
            color: 'black',
            fontWeight: 600
          },
          h2: {
            fontSize: '1.5rem',
            color: 'black',
            fontWeight: 700
          },
          h1: {
            fontSize: '2.125rem',
            color: 'black',
            fontWeight: 700
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
            backgroundColor: 'grey',
            width: '100%',
            minHeight: 'calc(100vh - 88px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '88px',
            marginRight: '20px',
            borderRadius: `2px`
          },
    }
}