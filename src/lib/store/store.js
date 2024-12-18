import { configureStore } from '@reduxjs/toolkit'
import patientRegistrationReducer from './slices/patientRegistrationSlice'

export const store = configureStore({
  reducer: {
    patientRegistration: patientRegistrationReducer,
  },
}) 