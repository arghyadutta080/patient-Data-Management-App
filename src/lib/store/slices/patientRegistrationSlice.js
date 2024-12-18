import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  patientForm: {
    // Personal Information section
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '', 
    email: '',
    address: '',
    city: '',
    state: '',
    district: '',

    // Referral Information section
    howDidYouKnow: '',
    referredBy: '',

    // Admission Type section
    admissionType: ''
  }
}

const patientRegistrationSlice = createSlice({
  name: 'patientRegistration',
  initialState,
  reducers: {
    updatePatientForm: (state, action) => {
      state.patientForm = { ...state.patientForm, ...action.payload }
    },
    resetForm: () => initialState,
  },
})

export const { updatePatientForm, resetForm } = patientRegistrationSlice.actions
export default patientRegistrationSlice.reducer