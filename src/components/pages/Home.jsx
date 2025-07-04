import Hero from '@/components/organisms/Hero'
import ServicesSection from '@/components/organisms/ServicesSection'
import CoursesSection from '@/components/organisms/CoursesSection'
import IndustriesSection from '@/components/organisms/IndustriesSection'
import AboutSection from '@/components/organisms/AboutSection'
import ContactSection from '@/components/organisms/ContactSection'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ServicesSection />
      <CoursesSection />
      <IndustriesSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default Home