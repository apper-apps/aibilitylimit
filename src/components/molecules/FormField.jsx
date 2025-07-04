import { motion } from 'framer-motion'
import Input from '@/components/atoms/Input'
import Select from '@/components/atoms/Select'
import TextArea from '@/components/atoms/TextArea'

const FormField = ({ 
  type = 'input',
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  placeholder = '',
  options = [],
  rows = 4,
  ...props 
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value, name)
    }
  }
  
  const commonProps = {
    label,
    name,
    value,
    onChange: handleChange,
    error,
    required,
    placeholder,
    ...props
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {type === 'input' && <Input {...commonProps} />}
      {type === 'select' && <Select {...commonProps} options={options} />}
      {type === 'textarea' && <TextArea {...commonProps} rows={rows} />}
    </motion.div>
  )
}

export default FormField