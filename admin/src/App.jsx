import { RouterProvider } from "react-router-dom"
import { AuthProvider } from "./modules/context/AuthContext"
import routes from "./routes"
import { AppSettingsContext, UseMode } from "./themes"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  const [theme, appMode] = UseMode();

  return (
    <AppSettingsContext.Provider value={appMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <RouterProvider router={routes} />
          </AuthProvider>
        </ThemeProvider>
    </AppSettingsContext.Provider>
  )
}

export default App