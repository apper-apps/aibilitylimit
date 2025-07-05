import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { submitLead } from '@/store/leadsSlice'
import { toast } from 'react-toastify'
import Card from '@/components/molecules/Card'
import Button from '@/components/atoms/Button'
import FormField from '@/components/molecules/FormField'
import ApperIcon from '@/components/ApperIcon'

const Contact = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.leads)
  
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    newsletter: false
  })
  
  const [errors, setErrors] = useState({})
  
  const interestOptions = [
    { value: 'education', label: 'AI Education & Training' },
    { value: 'integration', label: 'AI Integration & Implementation' },
    { value: 'adoption', label: 'AI Adoption & Support' },
    { value: 'consulting', label: 'Strategic AI Consulting' },
    { value: 'custom', label: 'Custom AI Solutions' },
    { value: 'general', label: 'General Inquiry' }
  ]
  
  const handleInputChange = (value, name) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  const handleCheckboxChange = (e) => {
    setFormData(prev => ({
      ...prev,
      newsletter: e.target.checked
    }))
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.interest) {
      newErrors.interest = 'Please select your area of interest'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    try {
      await dispatch(submitLead({
        ...formData,
        timestamp: new Date().toISOString()
      })).unwrap()
      
      toast.success('Thank you for your interest! We\'ll be in touch within 24 hours.')
      
      // Reset form
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
        newsletter: false
      })
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    }
  }
  
  const contactMethods = [
    {
icon: 'Mail',
      title: 'Email',
      details: 'info@aibility.ca',
      description: 'Send us an email anytime'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      details: '+1 (416) 555-0123',
      description: 'Call us during business hours'
    },
    {
      icon: 'MapPin',
      title: 'Location',
      details: 'Toronto, ON, Canada',
      description: 'Visit our office or meet virtually'
    },
    {
      icon: 'Clock',
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'We respond to all inquiries quickly'
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
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Ready to transform your organization with AI? Let's discuss your needs and 
              explore how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Methods */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={method.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">{method.title}</h3>
                  <p className="text-primary font-medium mb-1">{method.details}</p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <h2 className="text-3xl font-bold text-secondary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      type="input"
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      error={errors.name}
                      required
                      placeholder="Enter your full name"
                    />
                    
                    <FormField
                      type="input"
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <FormField
                    type="input"
                    label="Organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    error={errors.organization}
                    required
                    placeholder="Your organization name"
                  />
                  
                  <FormField
                    type="input"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    required
                    placeholder="your.email@example.com"
                  />
                  
                  <FormField
                    type="select"
                    label="How can we help you?"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    options={interestOptions}
                    error={errors.interest}
                    required
                    placeholder="Select your area of interest"
                  />
                  
                  <FormField
                    type="textarea"
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your AI goals, challenges, and what you'd like to achieve..."
                    rows={5}
                  />
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Subscribe to our AI insights newsletter and stay updated on the latest trends
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    loading={loading}
                    disabled={loading}
                    className="w-full"
                  >
                    <ApperIcon name="Send" size={20} />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
            
            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
<Card>
                <h3 className="text-2xl font-bold text-secondary mb-4">Why Choose AiBility?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ApperIcon name="Award" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-secondary">Proven Expertise</h4>
                      <p className="text-sm text-gray-600">8+ years of AI implementation experience across diverse industries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ApperIcon name="Users" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-secondary">Trusted by 50+ Organizations</h4>
                      <p className="text-sm text-gray-600">From startups to large enterprises, we've delivered successful AI solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ApperIcon name="Zap" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-secondary">Comprehensive Approach</h4>
                      <p className="text-sm text-gray-600">From education to implementation and ongoing support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ApperIcon name="Shield" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-secondary">Ethical AI Focus</h4>
                      <p className="text-sm text-gray-600">We prioritize responsible AI implementation and transparency</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary to-accent text-white">
                <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
                <p className="text-lg opacity-90 mb-6">
                  Not sure where to start? Book a free 30-minute consultation to discuss your AI needs and get expert guidance.
                </p>
                <Button variant="white" size="lg" className="w-full">
                  <ApperIcon name="Calendar" size={20} />
                  Book Free Consultation
                </Button>
              </Card>
              
              <Card>
                <h3 className="text-xl font-bold text-secondary mb-4">Next Steps</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-sm text-gray-600">Schedule a free consultation call</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-sm text-gray-600">Receive a customized AI strategy proposal</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact