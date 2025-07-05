import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { submitLead } from '@/store/leadsSlice'
import { toast } from 'react-toastify'
import Card from '@/components/molecules/Card'
import Button from '@/components/atoms/Button'
import FormField from '@/components/molecules/FormField'
import ApperIcon from '@/components/ApperIcon'

const ContactSection = () => {
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.leads)
  
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    interest: '',
    message: '',
    newsletter: false
  })
  
  const [errors, setErrors] = useState({})
  
  const interestOptions = [
    { value: 'education', label: 'AI Education & Training' },
    { value: 'integration', label: 'AI Integration & Implementation' },
    { value: 'adoption', label: 'AI Adoption & Support' },
    { value: 'general', label: 'General Consultation' }
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
        interest: '',
        message: '',
        newsletter: false
      })
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    }
  }
  
  return (
<section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Get in touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore how AI can transform your organization? 
            Let's discuss your needs and find the right solution.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
<Card className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  label="How can we help?"
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
                  placeholder="Tell us about your AI goals and challenges..."
                  rows={4}
                />
                
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-google-blue border-gray-300 rounded focus:ring-google-blue"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Subscribe to our AI insights newsletter
                  </label>
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  loading={loading}
                  disabled={loading}
                  className="w-full bg-google-blue hover:bg-blue-600 text-white rounded-full"
                >
                  <ApperIcon name="Send" size={20} />
                  Send message
                </Button>
              </form>
            </Card>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
<Card className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Contact information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <ApperIcon name="Mail" size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">info@aisolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <ApperIcon name="Phone" size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <ApperIcon name="MapPin" size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">Mountain View, CA</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <ApperIcon name="Clock" size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Response time</h4>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-google-blue text-white rounded-lg p-8">
              <h3 className="text-2xl font-medium mb-4">Free consultation</h3>
              <p className="text-lg opacity-90 mb-6">
                Book a free 30-minute consultation to discuss your AI needs and explore how we can help.
              </p>
              <Button variant="white" size="lg" className="w-full bg-white text-google-blue hover:bg-gray-50 rounded-full">
                <ApperIcon name="Calendar" size={20} />
                Schedule call
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection