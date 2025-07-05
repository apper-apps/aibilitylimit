import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchCourseById } from '@/store/coursesSlice'
import { enrollInCourse, downloadSyllabus } from '@/store/courseBookingsSlice'
import Card from '@/components/molecules/Card'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'

const CourseDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentCourse: course, loading, error } = useSelector(state => state.courses)
  const { loading: enrollmentLoading, downloadingList } = useSelector(state => state.courseBookings)
  
  useEffect(() => {
    dispatch(fetchCourseById(parseInt(id)))
  }, [dispatch, id])
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Loading />
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Error message={error} onRetry={() => dispatch(fetchCourseById(parseInt(id)))} />
        </div>
      </div>
    )
  }
  
  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Error message="Course not found" />
        </div>
      </div>
    )
  }
  
  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'success'
      case 'intermediate': return 'warning'
      case 'advanced': return 'error'
      default: return 'default'
    }
}
  
  const handleEnrollment = () => {
    if (window.confirm(`Are you sure you want to enroll in "${course.title}"?`)) {
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
  
  const handleSyllabusDownload = () => {
    dispatch(downloadSyllabus(course.Id))
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-surface py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/courses" className="hover:text-primary">Courses</Link>
            <ApperIcon name="ChevronRight" size={16} />
            <span className="text-secondary font-medium">{course.title}</span>
          </nav>
        </div>
      </div>
      
      {/* Course Header */}
      <section className="py-12 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant={getLevelColor(course.level)}>
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <ApperIcon name="Clock" size={16} />
                  {course.duration}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6">{course.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{course.description}</p>
              <div className="flex items-center gap-6 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <ApperIcon name="Calendar" size={16} />
                  Next start: {new Date(course.nextStartDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <ApperIcon name="Users" size={16} />
                  Small class sizes
                </div>
              </div>
            </div>
            
            <Card className="bg-white">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold gradient-text mb-2">
                  ${course.price}
                </div>
                <p className="text-gray-600">Per participant</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Level</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Next Start</span>
                  <span className="font-medium">{new Date(course.nextStartDate).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="space-y-3">
<Button 
                  size="lg" 
                  className="w-full" 
                  onClick={handleEnrollment}
                  loading={enrollmentLoading}
                >
                  <ApperIcon name="CreditCard" size={20} />
                  Enroll Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleSyllabusDownload}
                  loading={downloadingList.includes(course.Id)}
                >
                  <ApperIcon name="Download" size={20} />
                  Download Syllabus
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <Card>
                  <h2 className="text-2xl font-bold text-secondary mb-4">Course Overview</h2>
                  <p className="text-gray-600 mb-6">
                    This comprehensive course provides hands-on experience with the latest AI technologies and methodologies. 
                    You'll learn practical skills that can be immediately applied to real-world challenges in your organization.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <ApperIcon name="Check" size={16} className="text-success" />
                      <span className="text-gray-600">Hands-on projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ApperIcon name="Check" size={16} className="text-success" />
                      <span className="text-gray-600">Real-world case studies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ApperIcon name="Check" size={16} className="text-success" />
                      <span className="text-gray-600">Expert instructors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ApperIcon name="Check" size={16} className="text-success" />
                      <span className="text-gray-600">Certificate of completion</span>
                    </div>
                  </div>
                </Card>
                
                <Card>
                  <h2 className="text-2xl font-bold text-secondary mb-4">What You'll Learn</h2>
                  <div className="space-y-3">
                    {course.topics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <ApperIcon name="ArrowRight" size={16} className="text-primary" />
                        <span className="text-gray-600">{topic}</span>
                      </div>
                    ))}
                  </div>
                </Card>
                
                <Card>
                  <h2 className="text-2xl font-bold text-secondary mb-4">Who Should Attend</h2>
                  <p className="text-gray-600 mb-4">
                    This course is designed for professionals who want to understand and implement AI solutions in their organizations:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-3">
                      <ApperIcon name="User" size={16} className="text-primary" />
                      Team leaders and managers
                    </li>
                    <li className="flex items-center gap-3">
                      <ApperIcon name="User" size={16} className="text-primary" />
                      IT professionals and developers
                    </li>
                    <li className="flex items-center gap-3">
                      <ApperIcon name="User" size={16} className="text-primary" />
                      Business analysts and consultants
                    </li>
                    <li className="flex items-center gap-3">
                      <ApperIcon name="User" size={16} className="text-primary" />
                      Decision makers and executives
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Card>
                  <h3 className="text-lg font-bold text-secondary mb-4">Course Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Format</span>
                      <span className="font-medium">Online & In-person</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Class size</span>
                      <span className="font-medium">Max 12 participants</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Materials</span>
                      <span className="font-medium">Included</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Support</span>
                      <span className="font-medium">30 days post-course</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-gradient-to-br from-primary to-accent text-white">
                  <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Have questions about this course or need a custom training program?
                  </p>
<Link to="/contact">
                    <Button variant="white" size="sm" className="w-full">
                      <ApperIcon name="MessageCircle" size={16} />
                      Contact Us
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetail