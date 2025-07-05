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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated accent lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
        <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent-blue to-transparent opacity-20"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent opacity-25"></div>
      </div>
      
      {/* Floating accent elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-32 bg-gradient-to-b from-accent to-transparent opacity-40 float-element"></div>
        <div className="absolute bottom-32 right-32 w-32 h-2 bg-gradient-to-r from-accent-blue to-transparent opacity-30 float-element"></div>
        <div className="absolute top-1/2 right-20 w-2 h-24 bg-gradient-to-t from-accent-purple to-transparent opacity-35 float-element"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-playfair font-bold text-white mb-8 leading-none tracking-tight text-premium"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            Premium AI Consulting
            <span className="block gradient-text-accent mt-4">
              For Visionary Leaders
            </span>
          </motion.h1>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent to-accent-blue mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          ></motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Transform your organization with <span className="text-white font-medium">bespoke AI solutions</span> 
            that deliver measurable impact. Our boutique approach ensures personalized attention and 
            <span className="text-white font-medium"> exceptional results</span>.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button
              size="xl"
              variant="premium"
              onClick={scrollToContact}
              className="btn-glow group"
            >
              <ApperIcon name="Calendar" size={20} />
              <span>Book Elite Consultation</span>
              <ApperIcon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="glass"
              onClick={scrollToServices}
              className="btn-glow-blue"
            >
              <ApperIcon name="Sparkles" size={20} />
              Explore Solutions
            </Button>
          </motion.div>
          
          {/* Premium trust indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ApperIcon name="Users" size={20} className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-400">Elite Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ApperIcon name="Award" size={20} className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-purple to-accent-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ApperIcon name="Zap" size={20} className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Premium scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Scroll to explore</div>
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent"></div>
          <ApperIcon name="ChevronDown" size={20} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero