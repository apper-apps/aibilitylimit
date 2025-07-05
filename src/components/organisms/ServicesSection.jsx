import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchServices } from '@/store/servicesSlice'
import Card from '@/components/molecules/Card'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'

const ServicesSection = () => {
  const dispatch = useDispatch()
  const { services, loading, error } = useSelector(state => state.services)
  
  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])
  
  if (loading) {
    return (
      <section id="services" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 shimmer"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto shimmer"></div>
          </div>
          <Loading type="cards" className="grid md:grid-cols-3 gap-8" />
        </div>
      </section>
    )
  }
  
  if (error) {
    return (
      <section id="services" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Error message={error} onRetry={() => dispatch(fetchServices())} />
        </div>
      </section>
    )
  }
  
  return (
<section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to help organizations understand, 
            implement, and benefit from artificial intelligence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.Id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center p-8 border border-gray-200 rounded-lg card-hover">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-google-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={service.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <ApperIcon name="Check" size={16} className="text-google-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:border-google-blue hover:text-google-blue rounded-full"
                  >
                    {service.cta}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-google-blue hover:bg-blue-600 text-white rounded-full px-8"
          >
            Get started
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection