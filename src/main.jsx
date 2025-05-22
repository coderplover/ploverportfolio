import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/navbar.jsx'
import About from './component/about.jsx'
import Project from './component/project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='Container w-[70%] mx-auto text-zinc-50'>
      <Navbar/>
      <About />
      <Project/>
    </div>
  </StrictMode>,
)
