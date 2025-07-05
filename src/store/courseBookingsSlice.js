import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const enrollInCourse = createAsyncThunk(
  'courseBookings/enrollInCourse',
  async ({ courseId, participantData }, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const enrollment = {
        Id: Date.now(),
        courseId: parseInt(courseId),
        participantData,
        enrollmentDate: new Date().toISOString(),
        status: 'confirmed',
        paymentStatus: 'pending'
      }
      
      return enrollment
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const downloadSyllabus = createAsyncThunk(
  'courseBookings/downloadSyllabus',
  async (courseId, { rejectWithValue }) => {
    try {
      // Simulate download delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // In a real app, this would initiate a file download
      toast.info('Syllabus download would start here')
      
      return { courseId, downloaded: true }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const courseBookingsSlice = createSlice({
  name: 'courseBookings',
  initialState: {
    enrollments: [],
    loading: false,
    error: null,
    downloadingList: [],
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(enrollInCourse.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(enrollInCourse.fulfilled, (state, action) => {
        state.loading = false
        state.enrollments.push(action.payload)
        toast.success('Successfully enrolled in course!')
      })
      .addCase(enrollInCourse.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        toast.error('Enrollment failed. Please try again.')
      })
      .addCase(downloadSyllabus.pending, (state, action) => {
        state.downloadingList.push(action.meta.arg)
      })
      .addCase(downloadSyllabus.fulfilled, (state, action) => {
        state.downloadingList = state.downloadingList.filter(
          id => id !== action.payload.courseId
        )
        toast.success('Syllabus downloaded successfully!')
      })
      .addCase(downloadSyllabus.rejected, (state, action) => {
        state.downloadingList = state.downloadingList.filter(
          id => id !== action.meta.arg
        )
        toast.error('Download failed. Please try again.')
      })
  },
})

export const { clearError } = courseBookingsSlice.actions
export default courseBookingsSlice.reducer