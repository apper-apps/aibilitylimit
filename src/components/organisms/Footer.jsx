import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Courses', href: '/courses' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ]
  
  const services = [
    { name: 'AI Education', href: '/services#educate' },
    { name: 'AI Integration', href: '/services#integrate' },
    { name: 'AI Adoption', href: '/services#adopt' },
    { name: 'Consulting', href: '/contact' },
  ]
  
  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'GitHub', icon: 'Github', href: '#' },
    { name: 'Email', icon: 'Mail', href: 'mailto:info@aibility.pro' },
  ]
  
  return (
<footer className="bg-black text-white relative overflow-hidden">
      {/* Premium accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="text-center">
            <h3 className="text-3xl font-playfair font-bold mb-6">Stay Ahead of AI Innovation</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Receive exclusive insights on AI trends, implementation strategies, and industry breakthroughs 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-700 bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent backdrop-blur-sm"
              />
              <Button variant="premium" size="md" className="btn-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <ApperIcon name="Brain" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">AIbility Pro</span>
              </Link>
              <p className="text-gray-300 text-sm">
                Expert AI consultants helping organizations understand, integrate, and adopt AI solutions for sustainable growth and innovation.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  >
                    <ApperIcon name={link.icon} size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Mail" size={16} />
                  <span>info@aibility.pro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Phone" size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ApperIcon name="MapPin" size={16} />
                  <span>Toronto, ON, Canada</span>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  <ApperIcon name="Calendar" size={16} />
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 AIbility Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer