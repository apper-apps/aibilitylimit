import { motion } from 'framer-motion'
import Card from '@/components/molecules/Card'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Industries = () => {
  const industries = [
    {
      id: 1,
      name: 'Non-Profit Organizations',
      icon: 'Heart',
      description: 'Amplify your mission with AI-powered solutions that enhance donor engagement, optimize program delivery, and measure impact more effectively.',
      challenges: [
        'Limited resources for technology adoption',
        'Need for transparent impact measurement',
        'Donor engagement and retention',
        'Program efficiency optimization'
      ],
      solutions: [
        'Automated donor management systems',
        'AI-powered impact assessment tools',
        'Predictive analytics for fundraising',
        'Personalized donor communication'
      ],
      caseStudy: {
        title: 'Community Food Bank Network',
        result: '40% increase in donation efficiency',
        description: 'Implemented AI-driven donor segmentation and personalized outreach, resulting in significantly improved fundraising outcomes.'
      },
      stats: { organizations: '25+', impact: '40% efficiency increase' }
    },
    {
      id: 2,
      name: 'NGOs & International Development',
      icon: 'Globe',
      description: 'Scale your global impact with AI solutions designed for community development, crisis response, and sustainable program delivery.',
      challenges: [
        'Managing complex multi-country operations',
        'Rapid crisis response requirements',
        'Language and cultural barriers',
        'Limited field connectivity'
      ],
      solutions: [
        'Multi-language AI communication tools',
        'Crisis response automation systems',
        'Community needs assessment platforms',
        'Offline-capable mobile solutions'
      ],
      caseStudy: {
        title: 'International Relief Organization',
        result: '60% faster crisis response',
        description: 'Deployed AI-powered early warning systems and automated resource allocation, dramatically improving emergency response times.'
      },
      stats: { organizations: '15+', impact: '60% faster response time' }
    },
    {
      id: 3,
      name: 'Government & Public Sector',
      icon: 'Building',
      description: 'Enhance public service delivery with AI-powered citizen engagement, process automation, and evidence-based policy making.',
      challenges: [
        'Complex regulatory compliance',
        'Legacy system integration',
        'Citizen service accessibility',
        'Data privacy and security'
      ],
      solutions: [
        'Citizen service chatbots and portals',
        'Automated document processing',
        'Policy impact analysis tools',
        'Predictive maintenance systems'
      ],
      caseStudy: {
        title: 'Regional Municipal Authority',
        result: '50% reduction in processing time',
        description: 'Implemented AI-powered document processing and citizen service automation, significantly improving service delivery efficiency.'
      },
      stats: { organizations: '10+', impact: '50% reduction in processing time' }
    },
    {
      id: 4,
      name: 'Commercial Businesses',
      icon: 'Briefcase',
      description: 'Drive growth and competitive advantage with AI solutions for customer experience, operational efficiency, and strategic decision-making.',
      challenges: [
        'Increasing customer expectations',
        'Market volatility and uncertainty',
        'Operational inefficiencies',
        'Data-driven decision making'
      ],
      solutions: [
        'Customer service automation',
        'Predictive analytics for sales',
        'Supply chain optimization',
        'Market intelligence platforms'
      ],
      caseStudy: {
        title: 'Regional Manufacturing Company',
        result: '35% revenue increase',
        description: 'Implemented AI-driven demand forecasting and customer service automation, leading to improved efficiency and customer satisfaction.'
      },
      stats: { organizations: '20+', impact: '35% revenue increase' }
    }
  ]
  
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
              Industries We <span className="text-accent">Serve</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Specialized AI solutions tailored to the unique challenges and opportunities 
              across diverse sectors and organizational types.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Industries Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                      <ApperIcon name={industry.icon} size={32} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-secondary">{industry.name}</h2>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                        <span>{industry.stats.organizations} served</span>
                        <span>•</span>
                        <span>{industry.stats.impact}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-8">{industry.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Card>
                      <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
                        <ApperIcon name="AlertCircle" size={20} className="text-warning" />
                        Common Challenges
                      </h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <ApperIcon name="Minus" size={14} className="text-warning mt-1 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </Card>
                    
                    <Card>
                      <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
                        <ApperIcon name="CheckCircle" size={20} className="text-success" />
                        Our Solutions
                      </h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <ApperIcon name="Check" size={14} className="text-success mt-1 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <Card className="bg-gradient-to-br from-primary to-accent text-white">
                    <h3 className="text-xl font-bold mb-4">Success Story</h3>
                    <h4 className="text-lg font-semibold mb-2">{industry.caseStudy.title}</h4>
                    <p className="text-sm opacity-90 mb-4">{industry.caseStudy.description}</p>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <div className="text-2xl font-bold">{industry.caseStudy.result}</div>
                      <div className="text-sm opacity-90">Achieved Result</div>
                    </div>
                  </Card>
                  
                  <Card>
                    <h3 className="text-xl font-bold text-secondary mb-4">Ready to Transform?</h3>
                    <p className="text-gray-600 mb-6">
                      Let's discuss how AI can address your specific challenges and opportunities.
                    </p>
                    <div className="space-y-3">
                      <Button size="lg" className="w-full">
                        <ApperIcon name="Calendar" size={20} />
                        Schedule Consultation
                      </Button>
                      <Button size="lg" variant="outline" className="w-full">
                        <ApperIcon name="Download" size={20} />
                        Download Case Study
                      </Button>
                    </div>
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
              Your Industry, Our Expertise
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every sector has unique challenges. We bring deep industry knowledge and proven AI solutions 
              to help you achieve your specific goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <ApperIcon name="MessageCircle" size={20} />
                Discuss Your Needs
              </Button>
              <Button size="lg" variant="outline">
                <ApperIcon name="FileText" size={20} />
                View All Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Industries