import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchServices } from '@/store/servicesSlice'
import Card from '@/components/molecules/Card'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'

const Services = () => {
  const dispatch = useDispatch()
  const { services, loading, error } = useSelector(state => state.services)
  
  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Loading type="cards" />
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Error message={error} onRetry={() => dispatch(fetchServices())} />
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Our AI <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your organization through 
              education, implementation, and ongoing support.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.Id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                        <ApperIcon name={service.icon} size={32} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-secondary">{service.name}</h2>
                        <p className="text-primary font-medium">Transform your organization</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <ApperIcon name="Check" size={16} className="text-success flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="bg-gradient-to-br from-primary to-accent text-white">
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-lg opacity-90 mb-6">
                      Let's discuss how our {service.name.toLowerCase()} service can benefit your organization.
                    </p>
                    <Button variant="white" size="lg" className="w-full">
                      <ApperIcon name="MessageCircle" size={20} />
                      {service.cta}
                    </Button>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Transform Your Organization with AI
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our comprehensive approach ensures successful AI adoption from education to implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}>
                <ApperIcon name="Calendar" size={20} />
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                window.location.href = '/contact'
              }}>
                <ApperIcon name="Mail" size={20} />
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services