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
<section id="services" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-black mb-8 heading-premium">
            Premium <span className="gradient-text-accent">AI Solutions</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-accent-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Our bespoke approach ensures every AI solution is meticulously crafted to exceed your 
            organizational objectives, delivering unparalleled results through dedicated expertise and strategic excellence.
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
<Card className="h-full text-center group relative overflow-hidden" shadow="lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-blue to-accent-purple"></div>
                <div className="mb-8 pt-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-premium">
                    <ApperIcon name={service.icon} size={36} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-black mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-5 h-5 bg-gradient-to-r from-accent to-accent-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <ApperIcon name="Check" size={12} className="text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Button variant="outline" className="w-full group-hover:bg-black group-hover:text-white">
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