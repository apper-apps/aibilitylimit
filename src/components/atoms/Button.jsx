import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false,
  loading = false,
  onClick,
  ...props 
}, ref) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2'
  
const variants = {
    primary: 'bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 focus:ring-primary/50 shadow-lg hover:shadow-xl transition-all duration-300',
    secondary: 'bg-gradient-to-r from-secondary to-primary text-white hover:from-secondary/90 hover:to-primary/90 focus:ring-secondary/50 shadow-lg hover:shadow-xl transition-all duration-300',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/30 transition-all duration-200',
    ghost: 'text-primary hover:bg-primary/10 focus:ring-primary/30 transition-all duration-200',
    white: 'bg-white text-secondary border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-primary/30 shadow-sm hover:shadow-md transition-all duration-200',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button