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
    <section className="relative min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            AI for{' '}
            <span className="font-normal text-google-blue">everyone</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Discover how artificial intelligence can transform your organization with practical solutions, 
            expert guidance, and comprehensive training programs.
          </p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-google-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Get started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="border-gray-300 text-gray-700 hover:border-gray-400 px-8 py-3 rounded-full font-medium"
            >
              Learn more
            </Button>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Organizations served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-1">95%</div>
              <div className="text-sm text-gray-600">Success rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-1">24h</div>
              <div className="text-sm text-gray-600">Response time</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero