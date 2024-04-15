export default function componentStyleOverrides() {
    return {
        MuiButton: {
            styleOverrides: {
              root: {
                fontWeight: 500,
                borderRadius: '4px'
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
                borderRadius: `2px`
              }
            }
          },
          MuiCardHeader: {
            styleOverrides: {
              root: {
                color: 'white',
                padding: '24px'
              },
              title: {
                fontSize: '1.125rem'
              }
            }
          },
          MuiCardContent: {
            styleOverrides: {
              root: {
                padding: '24px'
              }
            }
          },
          MuiCardActions: {
            styleOverrides: {
              root: {
                padding: '24px'
              }
            }
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                background: 'inherit',
                borderRadius: "10px",
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: "black"
                },
                '&:hover $notchedOutline': {
                  borderColor: "black"
                },
                '&.MuiInputBase-multiline': {
                  padding: 1
                }
              },
              input: {
                fontWeight: 500,
                background: "inherit",
                padding: '15.5px 14px',
                borderRadius: "10px",
                '&.MuiInputBase-inputSizeSmall': {
                  padding: '10px 14px',
                  '&.MuiInputBase-inputAdornedStart': {
                    paddingLeft: 0
                  }
                }
              },
              inputAdornedStart: {
                paddingLeft: 4
              },
              notchedOutline: {
                borderRadius: "10px"
              }
            }
          },
          MuiInputBase: {
            styleOverrides: {
              input: {
                color: 'black ',
                '&::placeholder': {
                  color: 'black',
                  fontSize: '0.875rem'
                }
              }
            }
          },
          MuiDivider: {
            styleOverrides: {
              root: {
                borderColor: 'grey',
                opacity: 0.1
              }
            }
          },
    }
}