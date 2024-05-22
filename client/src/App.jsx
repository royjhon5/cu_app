import { ThemeProvider } from "@mui/material/styles"
import { AppSettingsContext, UseMode } from "./themes"
import { CssBaseline } from "@mui/material"
import { AuthProvider } from "./modules/context/AuthContext"
import { RouterProvider } from "react-router-dom"
import routes from "./routes"
function App() {
  const [theme, appMode] = UseMode()
  return (
    <>
      <AppSettingsContext.Provider value={appMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <AuthProvider>
                <RouterProvider router={routes} />
            </AuthProvider>
        </ThemeProvider>
      </AppSettingsContext.Provider>
    </>
  )
}

export default App
