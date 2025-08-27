import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Hollywood from './pages/Hollywood'
import Bollywood from './pages/Bollywood'
import Movies1980s from './pages/Movies1980s'
import Movies1990s from './pages/Movies1990s'
import Movies2000s from './pages/Movies2000s'
import MoviesRecent from './pages/MoviesRecent'
import { AuthProvider } from './contexts/AuthContext'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/movies/1980s" element={<Movies1980s />} />
            <Route path="/movies/1990s" element={<Movies1990s />} />
            <Route path="/movies/2000s" element={<Movies2000s />} />
            <Route path="/movies/recent" element={<MoviesRecent />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App

