import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchCourses } from '@/store/coursesSlice'
import { Link } from 'react-router-dom'
import Card from '@/components/molecules/Card'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import FilterTabs from '@/components/molecules/FilterTabs'

const CoursesSection = () => {
  const dispatch = useDispatch()
  const { courses, loading, error } = useSelector(state => state.courses)
  const [filteredCourses, setFilteredCourses] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')
  
  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])
  
  useEffect(() => {
    if (courses.length > 0) {
      if (activeFilter === 'all') {
        setFilteredCourses(courses.slice(0, 3)) // Show only 3 courses in homepage
      } else {
        setFilteredCourses(courses.filter(course => course.level === activeFilter).slice(0, 3))
      }
    }
  }, [courses, activeFilter])
  
  const filterTabs = [
    { value: 'all', label: 'All Courses' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ]
  
  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'success'
      case 'intermediate': return 'warning'
      case 'advanced': return 'error'
      default: return 'default'
    }
  }
  
  if (loading) {
    return (
      <section id="courses" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 shimmer"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto shimmer"></div>
          </div>
          <Loading type="cards" className="grid md:grid-cols-3 gap-8" />
        </div>
      </section>
    )
  }
  
  if (error) {
    return (
      <section id="courses" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Error message={error} onRetry={() => dispatch(fetchCourses())} />
        </div>
      </section>
    )
  }
  
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6">
            AI Education <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive AI training programs designed to empower your team with the knowledge 
            and skills needed to successfully implement and leverage AI technologies.
          </p>
          
          <FilterTabs
            tabs={filterTabs}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
            className="justify-center"
          />
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.Id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={getLevelColor(course.level)}>
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <ApperIcon name="Clock" size={14} className="mr-1" />
                    {course.duration}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary mb-2">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.topics.slice(0, 3).map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <ApperIcon name="Check" size={14} className="text-success mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold gradient-text">
                      ${course.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      Next: {new Date(course.nextStartDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Link to={`/courses/${course.Id}`}>
                    <Button variant="primary" className="w-full">
                      <ApperIcon name="BookOpen" size={16} />
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/courses">
            <Button size="lg" variant="outline">
              <ApperIcon name="BookOpen" size={20} />
              View All Courses
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CoursesSection