import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './scss/app.scss';
import './scss/vendor.scss';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
