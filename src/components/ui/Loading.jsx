import { motion } from 'framer-motion'

const Loading = ({ 
  type = 'spinner',
  size = 'md',
  message = 'Loading...',
  className = '',
  ...props 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }
  
  if (type === 'skeleton') {
    return (
      <div className={`animate-pulse ${className}`} {...props}>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded shimmer"></div>
          <div className="h-4 bg-gray-200 rounded shimmer w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded shimmer w-1/2"></div>
        </div>
      </div>
    )
  }
  
  if (type === 'cards') {
    return (
      <div className={`grid gap-6 ${className}`} {...props}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-surface rounded-xl p-6 animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg shimmer"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded shimmer"></div>
                <div className="h-3 bg-gray-200 rounded shimmer w-3/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  return (
    <motion.div
      className={`flex flex-col items-center justify-center py-12 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <div className={`${sizes[size]} border-4 border-gray-200 border-t-primary rounded-full animate-spin`}></div>
      {message && (
        <p className="mt-4 text-gray-600 font-medium">{message}</p>
      )}
    </motion.div>
  )
}

export default Loading