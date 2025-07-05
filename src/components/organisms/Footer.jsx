import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Contact from "@/components/pages/Contact";
import Services from "@/components/pages/Services";

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
<footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Stay updated</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI trends, implementation strategies, and industry developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-google-blue"
              />
              <Button className="bg-google-blue hover:bg-blue-600 text-white rounded-full px-6">
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
                <div className="w-8 h-8 bg-google-blue rounded-full flex items-center justify-center">
                  <ApperIcon name="Brain" size={20} className="text-white" />
                </div>
                <span className="text-xl font-medium text-gray-900">AiBility</span>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert AI consultants helping organizations understand, implement, and benefit from artificial intelligence across Canada.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                  >
                    <ApperIcon name={link.icon} size={18} className="text-gray-600" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
<h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
<h4 className="font-medium text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
<h4 className="font-medium text-gray-900 mb-4">Contact</h4>
<div className="flex items-center space-x-2">
                  <ApperIcon name="Mail" size={16} />
                  <span>info@aibility.ca</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Phone" size={16} />
                  <span>+1 (416) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ApperIcon name="MapPin" size={16} />
                  <span>Toronto, ON, Canada</span>
                </div>
              </div>
              <div className="mt-4">
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-gray-300 text-gray-700 hover:border-google-blue hover:text-google-blue rounded-full"
                >
                  <ApperIcon name="Calendar" size={16} />
                  Schedule call
                </Button>
              </div>
            </div>
          </div>
        </div>
        
{/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200">
<div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 AiBility. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
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