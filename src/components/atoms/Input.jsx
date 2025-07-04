import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Input = forwardRef(({ 
  label, 
  error, 
  className = '',
  type = 'text',
  required = false,
  ...props 
}, ref) => {
  const inputClasses = `
    w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 font-medium
    focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
    disabled:opacity-50 disabled:cursor-not-allowed
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
      <input
        ref={ref}
        type={type}
        className={inputClasses}
        {...props}
      />
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

Input.displayName = 'Input'

export default Input