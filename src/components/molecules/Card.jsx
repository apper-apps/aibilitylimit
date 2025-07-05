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
const baseClasses = 'bg-white rounded-2xl border border-gray-100 transition-all duration-500 card-premium'
  
  const paddings = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10',
    xl: 'p-12',
  }
  
  const shadows = {
    sm: 'shadow-lg',
    md: 'shadow-lg hover:shadow-premium',
    lg: 'shadow-premium hover:shadow-glow',
    xl: 'shadow-premium hover:shadow-glow',
  }
  
  const hoverClasses = hover ? 'hover:-translate-y-2 hover:border-gray-200 hover:shadow-premium micro-interaction' : ''
  
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