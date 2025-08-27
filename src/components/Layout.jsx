import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Camera, Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, ExternalLink, User, LogOut, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from './AuthModal'

const Layout = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authModalMode, setAuthModalMode] = useState('signin')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const location = useLocation()
  const { user, logout, isAuthenticated } = useAuth()

  const isActive = (path) => location.pathname === path

  const handleSignIn = () => {
    setAuthModalMode('signin')
    setIsAuthModalOpen(true)
  }

  const handleSignUp = () => {
    setAuthModalMode('signup')
    setIsAuthModalOpen(true)
  }

  const handleLogout = async () => {
    try {
      await logout()
      setShowUserMenu(false)
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <Camera className="h-8 w-8 text-red-500 group-hover:rotate-12 transition-transform duration-300" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                BehindTheScenes.com
              </h1>
            </Link>

            <nav className="flex items-center justify-center space-x-8 flex-1">
              <Link 
                to="/" 
                className={`hover:text-red-400 transition-colors duration-300 ${isActive('/') ? 'text-red-400' : ''}`}
              >
                Home
              </Link>
              
              {/* Hollywood Menu */}
              <div className="relative group">
                <Link 
                  to="/hollywood"
                  className="hover:text-red-400 transition-colors duration-300 cursor-pointer flex items-center"
                >
                  Hollywood
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link 
                    to="/hollywood?decade=recent" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-red-400 transition-colors duration-300"
                  >
                    Recent
                  </Link>
                  <Link 
                    to="/hollywood?decade=2000s" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-red-400 transition-colors duration-300"
                  >
                    2000s
                  </Link>
                  <Link 
                    to="/hollywood?decade=90s" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-red-400 transition-colors duration-300"
                  >
                    90s
                  </Link>
                  <Link 
                    to="/hollywood?decade=80s" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-red-400 transition-colors duration-300"
                  >
                    80s
                  </Link>
                </div>
              </div>

              {/* Bollywood Menu */}
              <div className="relative group">
                <Link 
                  to="/bollywood"
                  className="hover:text-red-400 transition-colors duration-300 cursor-pointer flex items-center"
                >
                  Bollywood
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link 
                    to="/bollywood?decade=recent" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-red-400 transition-colors duration-300"
                  >
                    Recent
                  </Link>
                  <Link 
                    to="/bollywood?decade=2000s" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-red-400 transition-colors duration-300"
                  >
                    2000s
                  </Link>
                  <Link 
                    to="/bollywood?decade=90s" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-red-400 transition-colors duration-300"
                  >
                    90s
                  </Link>
                  <Link 
                    to="/bollywood?decade=80s" 
                    className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-red-400 transition-colors duration-300"
                  >
                    80s
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className={`hover:text-red-400 transition-colors duration-300 ${isActive('/about') ? 'text-red-400' : ''}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-red-400 transition-colors duration-300 ${isActive('/contact') ? 'text-red-400' : ''}`}
              >
                Contact
              </Link>
              <Link 
                to="/faq" 
                className={`hover:text-red-400 transition-colors duration-300 ${isActive('/faq') ? 'text-red-400' : ''}`}
              >
                FAQ
              </Link>
            </nav>

            {/* Auth Section */}
            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl">
                      <div className="py-2">
                        <div className="px-4 py-2 border-b border-gray-800">
                          <p className="text-sm text-gray-400">Signed in as</p>
                          <p className="text-sm text-white font-medium truncate">{user?.email}</p>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors flex items-center"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button
                    onClick={handleSignIn}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Sign In
                  </button>
                  <Button 
                    onClick={handleSignUp}
                    variant="outline" 
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Enhanced 4-Column Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Camera className="h-6 w-6 text-red-500" />
                <span className="text-lg font-semibold">BehindTheScenes.com</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your ultimate destination for exclusive behind-the-scenes content from Hollywood and Bollywood movies. Discover the magic behind your favorite films.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:scale-110 transform">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:scale-110 transform">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:scale-110 transform">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:scale-110 transform">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                    Hollywood Movies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                    Bollywood Movies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                    TV Shows
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                    Directors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                    Actors
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter & Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 text-sm"
                  />
                  <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-gray-400 text-xs">
                  Subscribe to get the latest behind-the-scenes content.
                </p>
              </div>
              
              <div className="space-y-2 pt-4 border-t border-gray-800">
                <h4 className="text-sm font-medium text-white">Legal</h4>
                <ul className="space-y-1">
                  <li>
                    <Link to="/privacy" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-xs">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-xs">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-xs">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 BehindTheScenes.com. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Delhi, India
              </span>
              <span className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                +91-11-XXXX-XXXX
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authModalMode}
      />

      {/* Click outside to close user menu */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </div>
  )
}

export default Layout

