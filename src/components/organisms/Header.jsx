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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-effect shadow-premium' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <ApperIcon name="Brain" size={28} className="text-white" />
            </div>
            <span className="text-2xl font-playfair font-bold text-black">AIbility Pro</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.href ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Book Consultation
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