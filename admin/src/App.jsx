import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import themes from "./themes/index";
import { useDispatch, useSelector } from 'react-redux'
import { SET_THEME } from "./store/actions";
import NavigationScroll from "./layout/NavigationScroll";
import Customization from "./layout/Customization";
import { useEffect } from "react";
import Routes from './routes/index'

function App() {
  const customization = useSelector((state) => state.customization);
  const currentTheme = themes(customization, customization.theme);
  const dispatch  = useDispatch();

  const toggleTheme = (mode) => {
    dispatch({
      type: SET_THEME,
      theme: mode,
    });
    localStorage.setItem('theme', mode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch({
        type: SET_THEME,
        theme: savedTheme,
      });
    }
  }, [dispatch]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}>
      <CssBaseline />
        <NavigationScroll>
          <Routes  />
          <Customization toggleTheme={toggleTheme} />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
