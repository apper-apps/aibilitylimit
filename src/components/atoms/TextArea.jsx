import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const TextArea = forwardRef(({ 
  label, 
  error, 
  className = '',
  rows = 4,
  required = false,
  ...props 
}, ref) => {
  const textareaClasses = `
    w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 font-medium resize-vertical
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
      <textarea
        ref={ref}
        rows={rows}
        className={textareaClasses}
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

TextArea.displayName = 'TextArea'

export default TextArea