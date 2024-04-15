import { createTheme } from "@mui/material";
import componentStyleOverrides from "./compStyleOverride";
import themeTypography from "./typography";
import themePalette from "./palette";

export const theme = () => {

    const themeOption = {
      background: '#0B0F19'
    }

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
          toolbar: {
            minHeight: '48px',
            padding: '16px',
            '@media (min-width: 600px)': {
              minHeight: '48px'
            }
          }
        },
        typography: themeTypography()
      };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides();
    return themes;
};

export default theme;