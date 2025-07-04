import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'

const FilterTabs = ({ 
  tabs = [], 
  activeTab, 
  onTabChange,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      className={`flex flex-wrap gap-2 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          variant={activeTab === tab.value ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </Button>
      ))}
    </motion.div>
  )
}

export default FilterTabs