import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PatientAdmit from './components/PatientAdmit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PatientAdmit/>
  </StrictMode>,
)
