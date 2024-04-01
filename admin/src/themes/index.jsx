import { createTheme } from '@mui/material';
import colors from '../assets/scss/_themes-vars.module.scss';
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * @param {JsonObject} customization
 */

export const theme = (customization, mode) => {
  const color = colors;


  let background;
  let heading;
  let darkTextPrimary;
  if (mode === 'dark') {
    background = "#1A223F";
    heading = "#CCD1E2";
    darkTextPrimary = "#D7D4D6";
  } else {
    background = color.primaryLight;
    heading = color.grey900;
    darkTextPrimary = "#121926";
  }
  

  const themeOption = { 
    colors: color,
    heading,
    paper: color.paper,
    backgroundDefault: color.paper,
    background,
    darkTextPrimary,
    darkTextSecondary: color.grey700,
    textDark: 'red',
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: "#D7D4D6",
    customization
  };

  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption, mode),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography(themeOption)
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);
  return themes;
};

export default theme;
