import { ThemeProvider } from "@mui/material/styles"
import { AppSettingsContext, UseMode } from "./themes"
import { CssBaseline } from "@mui/material"
import RegistrationContainer from "./views/authentication/registration/container"
function App() {
  const [theme, appMode] = UseMode()
  return (
    <>
      <AppSettingsContext.Provider value={appMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <RegistrationContainer />
        </ThemeProvider>
      </AppSettingsContext.Provider>
    </>
  )
}

export default App
