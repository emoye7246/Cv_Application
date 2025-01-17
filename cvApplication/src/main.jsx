import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
