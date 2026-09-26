import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Inicio } from './pages/inicio.jsx'
import { Catalago } from './pages/catalogo.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={<Inicio />} />
        <Route path='/catalogo' element={<Catalago />} />
        <Route path='/demo' element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
