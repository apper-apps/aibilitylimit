import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { enrollInCourse } from "@/store/courseBookingsSlice";
import { Link } from "react-router-dom";
import { fetchCourses } from "@/store/coursesSlice";
import ApperIcon from "@/components/ApperIcon";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Empty from "@/components/ui/Empty";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import FilterTabs from "@/components/molecules/FilterTabs";
import SearchBar from "@/components/molecules/SearchBar";
import Card from "@/components/molecules/Card";

const Courses = () => {
const dispatch = useDispatch()
  const { courses, loading, error } = useSelector(state => state.courses)
  const { loading: enrollmentLoading } = useSelector(state => state.courseBookings)
  const [filteredCourses, setFilteredCourses] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])
  
  useEffect(() => {
    let filtered = courses
    
    // Apply level filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(course => course.level === activeFilter)
    }
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    setFilteredCourses(filtered)
  }, [courses, activeFilter, searchTerm])
  
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
  
  const handleQuickEnroll = (course) => {
    if (window.confirm(`Quick enroll in "${course.title}"?`)) {
      dispatch(enrollInCourse({
        courseId: course.Id,
        participantData: {
          name: 'Demo User',
          email: 'user@example.com',
          enrollmentDate: new Date().toISOString()
        }
      }))
    }
  }
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Loading type="cards" />
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Error message={error} onRetry={() => dispatch(fetchCourses())} />
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              AI Education <span className="text-accent">Programs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive AI training programs designed to empower your team with practical 
              knowledge and skills for successful AI implementation.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Filters and Search */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <FilterTabs
              tabs={filterTabs}
              activeTab={activeFilter}
              onTabChange={setActiveFilter}
            />
            <SearchBar
              onSearch={setSearchTerm}
              placeholder="Search courses..."
              className="w-full md:w-80"
            />
          </div>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <Empty
              title="No courses found"
              message="Try adjusting your search or filter criteria to find the courses you're looking for."
              icon="BookOpen"
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.Id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      <h4 className="font-semibold text-secondary mb-2">Topics covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.slice(0, 3).map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                        {course.topics.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{course.topics.length - 3} more
                          </span>
                        )}
                      </div>
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
                      
                      <div className="flex gap-2">
                        <Link to={`/courses/${course.Id}`} className="flex-1">
                          <Button variant="primary" size="sm" className="w-full">
                            <ApperIcon name="Eye" size={14} />
                            View Details
                          </Button>
                        </Link>
<Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleQuickEnroll(course)}
                          loading={enrollmentLoading}
                        >
                          <ApperIcon name="BookOpen" size={14} />
                          Enroll
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Ready to Advance Your AI Skills?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of professionals who have transformed their organizations through our comprehensive AI education programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <ApperIcon name="Calendar" size={20} />
                Schedule Course Consultation
              </Button>
              <Button size="lg" variant="outline">
                <ApperIcon name="Download" size={20} />
                Download Course Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Courses