import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Courses', href: '/courses' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ]
  
  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }
  
  return (
<motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-white'
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-google-blue rounded-full flex items-center justify-center">
              <ApperIcon name="Brain" size={20} className="text-white" />
            </div>
            <span className="text-xl font-normal text-gray-900">AiBility</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
<Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gray-900 ${
                  location.pathname === item.href ? 'text-gray-900' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="border-gray-300 text-gray-700 hover:border-gray-400 rounded-full px-4 py-2"
            >
              Get Started
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="bg-google-blue hover:bg-blue-600 text-white rounded-full px-4 py-2"
            >
              Contact us
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <ApperIcon 
              name={isMobileMenuOpen ? 'X' : 'Menu'} 
              size={24} 
              className="text-gray-700" 
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg border-t"
        >
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary bg-primary bg-opacity-10'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
              <Button
                size="sm"
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header