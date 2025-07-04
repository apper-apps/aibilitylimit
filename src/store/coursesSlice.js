import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { coursesService } from '@/services/api/coursesService'

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (_, { rejectWithValue }) => {
    try {
      return await coursesService.getAll()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchCourseById = createAsyncThunk(
  'courses/fetchCourseById',
  async (id, { rejectWithValue }) => {
    try {
      return await coursesService.getById(id)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    currentCourse: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false
        state.courses = action.payload
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchCourseById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.loading = false
        state.currentCourse = action.payload
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearError } = coursesSlice.actions
export default coursesSlice.reducer