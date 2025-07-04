import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Select = forwardRef(({ 
  label, 
  error, 
  options = [], 
  placeholder = 'Select an option',
  className = '',
  required = false,
  ...props 
}, ref) => {
  const selectClasses = `
    w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 font-medium
    focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
    disabled:opacity-50 disabled:cursor-not-allowed appearance-none
    ${error ? 'border-error focus:border-error focus:ring-error' : 'border-gray-300 hover:border-gray-400'}
    ${className}
  `
  
  return (
    <motion.div 
      className="space-y-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {label && (
        <label className="block text-sm font-semibold text-secondary">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          className={selectClasses}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <ApperIcon name="ChevronDown" size={20} className="text-gray-400" />
        </div>
      </div>
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-error font-medium"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  )
})

Select.displayName = 'Select'

export default Select