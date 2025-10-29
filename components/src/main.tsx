import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DualLogin from './DualLS/DualLogin'
import DualSignup from './DualLS/DualSignup'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DualSignup />
  </StrictMode>,
)
