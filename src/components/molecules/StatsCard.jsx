import { motion } from 'framer-motion'
import Card from '@/components/molecules/Card'
import ApperIcon from '@/components/ApperIcon'

const StatsCard = ({ 
  title, 
  value, 
  icon, 
  change, 
  changeType = 'positive',
  className = '',
  ...props 
}) => {
  const changeColor = changeType === 'positive' ? 'text-success' : 'text-error'
  
  return (
    <Card className={`${className}`} {...props}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold gradient-text">{value}</p>
          {change && (
            <motion.p 
              className={`text-sm font-medium mt-1 ${changeColor}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {change}
            </motion.p>
          )}
        </div>
        {icon && (
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <ApperIcon name={icon} size={24} className="text-white" />
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

export default StatsCard