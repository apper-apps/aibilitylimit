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
const baseClasses = 'font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98]'
  
  const variants = {
    primary: 'bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black focus:ring-black/30 shadow-premium hover:shadow-glow border border-gray-700',
    premium: 'bg-gradient-to-r from-accent to-accent-blue text-white hover:from-accent/90 hover:to-accent-blue/90 focus:ring-accent/50 shadow-premium hover:shadow-glow',
    secondary: 'bg-white text-black border-2 border-black hover:bg-black hover:text-white focus:ring-black/30 shadow-lg hover:shadow-premium',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white focus:ring-black/30 transition-all duration-300 backdrop-blur-sm',
    ghost: 'text-black hover:bg-black/10 focus:ring-black/30 transition-all duration-300',
    white: 'bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-black/20 shadow-lg hover:shadow-premium',
    glass: 'glass-effect text-white border border-white/20 hover:bg-white/20 focus:ring-white/30 backdrop-blur-xl',
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