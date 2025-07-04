import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from '@/store/coursesSlice'
import leadsReducer from '@/store/leadsSlice'
import servicesReducer from '@/store/servicesSlice'

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    leads: leadsReducer,
    services: servicesReducer,
  },
})

// Export types for JavaScript usage
export const getRootState = () => store.getState()
export const getAppDispatch = () => store.dispatch