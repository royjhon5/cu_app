import { RouterProvider } from "react-router-dom"
import { AuthProvider } from "./modules/authentication/AuthContext"
import routes from './routes/index.jsx'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material"
import themes from './themes/index.jsx'

const App = () => {
  const currentTheme = themes();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={currentTheme}> 
        <CssBaseline />
          <AuthProvider>
              <RouterProvider router={routes}/>
          </AuthProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App