import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import '@/app/styles/global.scss'

import '@/assets/css/index.css'

import App from './App.tsx'

const rootElement = document.getElementById('root')
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

if (!rootElement) {
  throw new Error('Root element was not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
