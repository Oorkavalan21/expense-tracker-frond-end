import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="nav-container">
          <nav className="nav-links">
            <NavLink to="/" className="nav-link" end>HOME</NavLink>
            <NavLink to="/about" className="nav-link">ABOUT US</NavLink>
            <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
            <NavLink to="/project" className="nav-link">PROJECT</NavLink>
          </nav>
        </div>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
