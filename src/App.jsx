import { useState } from 'react'
import './App.css'
import "./index.css"

import { LoadingScreen } from './components/LoadingScreen.jsx'
import { Navbar } from './components/Navbar.jsx'
import { MobileMenu } from './components/MobileMenu.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Contact } from './pages/Contact.jsx'
import { Blog } from './pages/Blog.jsx'
import { Footer } from './components/Footer.jsx'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return <>
    {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-[var(--quinary-color)] text-[--tertiary-color]`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home/>
      <About/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  </>;
}

export default App
