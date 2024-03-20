import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import themes from "./themes/index";
import { useSelector } from 'react-redux'

import NavigationScroll from "./layout/NavigationScroll";
import ThemeRoutes from "./routes/index";

function App() {
  const customization = useSelector((state) => state.customization);
  const currentTheme = themes(customization, 'dark');
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <NavigationScroll>
        <ThemeRoutes />
      </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
