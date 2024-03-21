import { createTheme } from '@mui/material/styles';
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
  if (mode === 'dark') {
    background = "#1A223F";
    heading = "#CCD1E2";
  } else {
    background = color.primaryLight;
    heading = color.grey900;
  }
  

  const themeOption = {
    colors: color,
    heading,
    paper: color.paper,
    backgroundDefault: color.paper,
    background,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
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
