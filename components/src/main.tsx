import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DualLogin from './DualLogin'
import DualSignup from './DualSignup'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DualSignup />
  </StrictMode>,
)
