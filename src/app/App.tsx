import '@/assets/css/App.css'

import { AppRouter } from './router/AppRouter'
import { createTheme, ThemeProvider } from './providers/theme'

const theme = createTheme({
  id: 'll-portfolio',
  label: 'Portfolio main theme',
  prefix: 'll',
})

function App() {
  return (
    <ThemeProvider mode={'system'} theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
