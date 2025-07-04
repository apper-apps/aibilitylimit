import { motion } from 'framer-motion'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col"
    >
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </motion.div>
  )
}

export default Layout