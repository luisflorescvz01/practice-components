import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlassMorphism from './GlassMorphism'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlassMorphism />
  </StrictMode>,
)
