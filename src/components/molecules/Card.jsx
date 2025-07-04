import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Card = forwardRef(({ 
  children, 
  className = '',
  hover = true,
  padding = 'md',
  shadow = 'md',
  ...props 
}, ref) => {
  const baseClasses = 'bg-surface rounded-xl border border-gray-200 transition-all duration-300'
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }
  
  const shadows = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
  
  const classes = `${baseClasses} ${paddings[padding]} ${shadows[shadow]} ${hoverClasses} ${className}`
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.div>
  )
})

Card.displayName = 'Card'

export default Card