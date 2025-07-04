import { motion } from 'framer-motion'
import Card from '@/components/molecules/Card'
import ApperIcon from '@/components/ApperIcon'

const IndustriesSection = () => {
  const industries = [
    {
      id: 1,
      name: 'Non-Profit Organizations',
      icon: 'Heart',
      description: 'Amplify your mission with AI-powered donor management, program optimization, and impact measurement.',
      examples: [
        'Automated donor engagement systems',
        'Program outcome prediction models',
        'Resource allocation optimization',
        'Grant application assistance'
      ],
      stats: { organizations: '25+', impact: '40% efficiency increase' }
    },
    {
      id: 2,
      name: 'NGOs & International Development',
      icon: 'Globe',
      description: 'Scale your global impact with AI solutions for community development, crisis response, and program delivery.',
      examples: [
        'Crisis response automation',
        'Community needs assessment',
        'Program delivery optimization',
        'Multi-language communication tools'
      ],
      stats: { organizations: '15+', impact: '60% faster response time' }
    },
    {
      id: 3,
      name: 'Government & Public Sector',
      icon: 'Building',
      description: 'Enhance public service delivery with AI-powered citizen engagement, process automation, and data analysis.',
      examples: [
        'Citizen service automation',
        'Policy impact analysis',
        'Resource planning optimization',
        'Public consultation tools'
      ],
      stats: { organizations: '10+', impact: '50% reduction in processing time' }
    },
    {
      id: 4,
      name: 'Commercial Businesses',
      icon: 'Briefcase',
      description: 'Drive growth and efficiency with AI solutions for customer service, operations, and strategic decision-making.',
      examples: [
        'Customer service automation',
        'Predictive analytics for sales',
        'Supply chain optimization',
        'Market analysis tools'
      ],
      stats: { organizations: '20+', impact: '35% revenue increase' }
    }
  ]
  
  return (
    <section id="industries" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering AI solutions across diverse sectors, 
            understanding the unique challenges and opportunities each industry presents.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <ApperIcon name={industry.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary mb-2">{industry.name}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary mb-3">AI Implementation Examples:</h4>
                  <ul className="space-y-2">
                    {industry.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                        <ApperIcon name="Check" size={14} className="text-success mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <ApperIcon name="Building2" size={16} className="text-primary" />
                      <span className="text-gray-600">Served: <strong>{industry.stats.organizations}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ApperIcon name="TrendingUp" size={16} className="text-success" />
                      <span className="text-gray-600">Impact: <strong>{industry.stats.impact}</strong></span>
                    </div>
                  </div>
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
          className="text-center mt-12 p-8 bg-gradient-to-r from-primary to-accent rounded-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join the growing number of organizations leveraging AI for greater impact and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <ApperIcon name="MessageCircle" size={20} />
              Start Your AI Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustriesSection