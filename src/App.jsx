import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import Layout from '@/components/organisms/Layout'
import Home from '@/components/pages/Home'
import Services from '@/components/pages/Services'
import Courses from '@/components/pages/Courses'
import CourseDetail from '@/components/pages/CourseDetail'
import Industries from '@/components/pages/Industries'
import Contact from '@/components/pages/Contact'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Smooth scroll to section if hash exists
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background relative overflow-hidden"
    >
      {/* Premium background patterns */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-accent/5 to-accent-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-accent-purple/5 to-accent-green/5 rounded-full blur-3xl"></div>
      </div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      
<ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="mt-16"
        toastClassName="font-inter"
      />
    </motion.div>
  )
}

export default App