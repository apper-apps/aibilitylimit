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
    <section id="services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6">
            Our Core <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive AI solutions tailored to your organization's needs, 
            from initial education to full implementation and ongoing support.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.Id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ApperIcon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <ApperIcon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Button variant="outline" className="w-full">
                    <ApperIcon name="ArrowRight" size={16} />
                    {service.cta}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" onClick={() => {
            const element = document.getElementById('contact')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}>
            <ApperIcon name="MessageCircle" size={20} />
            Discuss Your AI Needs
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection