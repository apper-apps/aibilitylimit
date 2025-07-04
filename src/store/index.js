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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch