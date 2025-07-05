import { motion } from 'framer-motion'
import Card from '@/components/molecules/Card'
import ApperIcon from '@/components/ApperIcon'

const AboutSection = () => {
  const stats = [
    { label: 'Organizations Served', value: '50+', icon: 'Building2' },
    { label: 'AI Projects Completed', value: '120+', icon: 'Cpu' },
    { label: 'Years of Experience', value: '8+', icon: 'Calendar' },
    { label: 'Success Rate', value: '95%', icon: 'Target' }
  ]
  
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Strategist',
      expertise: 'Machine Learning, Natural Language Processing',
      icon: 'User'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Implementation Director',
      expertise: 'Systems Integration, Process Automation',
      icon: 'User'
    },
    {
      name: 'Emily Watson',
      role: 'Education Lead',
      expertise: 'AI Training, Change Management',
      icon: 'User'
    }
  ]
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
<h2 className="text-4xl md:text-5xl font-black text-secondary mb-6">
            About <span className="gradient-text">AIbility Pro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a boutique consultancy of AI specialists providing personalized guidance and 
            hands-on expertise to help organizations successfully navigate their AI transformation journey.
          </p>
        </motion.div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={stat.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
<h3 className="text-3xl font-bold text-secondary mb-6">Our Boutique Approach</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2018, AIbility Pro emerged as a boutique consultancy focused on delivering 
                personalized AI solutions. We believe that successful AI adoption requires more than 
                technology—it requires deep understanding of your unique organizational context.
              </p>
              <p>
                Our small, expert team works closely with each client to develop customized strategies 
                that align AI capabilities with business objectives. We prioritize quality over quantity, 
                ensuring every engagement receives our full attention and expertise.
              </p>
              <p>
                This boutique approach allows us to build lasting partnerships with our clients, 
                providing ongoing strategic guidance as AI technology continues to evolve and mature.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
<Card className="bg-gradient-to-br from-primary to-accent text-white">
              <h4 className="text-xl font-bold mb-4">Our Mission</h4>
              <p className="text-lg opacity-90 mb-6">
                To provide exceptional, personalized AI consulting that empowers organizations 
                to confidently embrace artificial intelligence and achieve transformational results.
              </p>
              <div className="flex items-center gap-3">
                <ApperIcon name="Target" size={20} />
                <span className="font-medium">Excellence in every engagement</span>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-secondary mb-6">Meet Our Team</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of AI specialists, implementation experts, and educators 
            brings together decades of experience in AI and organizational development.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={member.icon} size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-2">{member.name}</h4>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.expertise}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection