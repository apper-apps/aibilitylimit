import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { leadsService } from '@/services/api/leadsService'

export const submitLead = createAsyncThunk(
  'leads/submitLead',
  async (leadData, { rejectWithValue }) => {
    try {
      return await leadsService.create(leadData)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const leadsSlice = createSlice({
  name: 'leads',
  initialState: {
    leads: [],
    loading: false,
    error: null,
    lastSubmission: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    clearLastSubmission: (state) => {
      state.lastSubmission = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLead.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(submitLead.fulfilled, (state, action) => {
        state.loading = false
        state.leads.push(action.payload)
        state.lastSubmission = action.payload
      })
      .addCase(submitLead.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { clearError, clearLastSubmission } = leadsSlice.actions
export default leadsSlice.reducer