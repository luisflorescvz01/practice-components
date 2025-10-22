import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardCaroussel from './CardCaroussel'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardCaroussel />
  </StrictMode>,
)
