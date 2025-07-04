import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Organization with
            <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Expert AI Consulting
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help non-profits, NGOs, government organizations, and businesses 
            <strong> understand, integrate, and adopt AI solutions</strong> that drive 
            real impact and sustainable growth.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="xl"
              variant="primary"
              onClick={scrollToContact}
              className="shadow-2xl hover:shadow-3xl"
            >
              <ApperIcon name="Calendar" size={20} />
              Book Free Consultation
            </Button>
            <Button
              size="xl"
              variant="white"
              onClick={scrollToServices}
              className="shadow-2xl hover:shadow-3xl"
            >
              <ApperIcon name="ArrowRight" size={20} />
              Explore Services
            </Button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <ApperIcon name="Users" size={20} className="text-accent" />
              <span className="text-sm font-medium">50+ Organizations Served</span>
            </div>
            <div className="flex items-center gap-2">
              <ApperIcon name="Award" size={20} className="text-accent" />
              <span className="text-sm font-medium">AI Implementation Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <ApperIcon name="Zap" size={20} className="text-accent" />
              <span className="text-sm font-medium">Proven Results</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ApperIcon name="ChevronDown" size={24} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero