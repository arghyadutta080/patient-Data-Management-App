import { useState } from 'react'
import { STEPS } from '../../utils/constants/registrationForm'
import PatientDetailsForm from './PatientDetailsForm'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { patientRegistrationSchema } from '../../utils/validations/patientRegistration'
import { updatePatientForm } from '../../lib/store/slices/patientRegistrationSlice'
import toast from 'react-hot-toast'

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [activeTab, setActiveTab] = useState(0)   // For sub-steps
  const steps = STEPS

  const dispatch = useDispatch()
  const patientRegistrationDetails = useSelector((state) => state.patientRegistration.patientForm)

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(patientRegistrationSchema),
    defaultValues: patientRegistrationDetails,
  })


  const handleNext = () => {
    if (steps[activeStep]?.subSteps) {
      // If we're in the step, which has substeps
      if (activeTab < steps[activeStep].subSteps.length - 1) {    // If there are more sub-steps, go to next sub-step
        setActiveTab(prev => prev + 1)
      } else {
        // If we're at the last sub-step, go to next main step if it's not last step
        if (activeStep < steps.length - 1) {
          setActiveTab(0)
          setActiveStep(prev => prev + 1)
        }
      }
    } else if (activeStep < steps.length - 1) {
      // For other main steps, just move to next step
      setActiveStep(prev => prev + 1)
    }
  }

  const handleNextButtonClick = () => {
    if (steps[activeStep]) {
      if (steps[activeStep]?.subSteps) {
        if (!steps[activeStep]?.subSteps[activeTab]?.sections) return handleNext()
      } else {
        handleNext()
      }
    }
  }

  const handlenextButtonType = () => {
    if (steps[activeStep]) {
      if (steps[activeStep]?.subSteps) {
        if (steps[activeStep]?.subSteps[activeTab]?.sections) return 'submit'
        else return 'button'
      } else {
        return 'button'
      }
    }
  }

  const handleBack = () => {
    if (steps[activeStep].subSteps && activeTab > 0) {
      // If we're in the step which has substeps
      setActiveTab(prev => prev - 1)    // If we're not at the first sub-step, go back one sub-step

    } else if (!steps[activeStep].subSteps && steps[activeStep - 1].subSteps) {
      // If we are in a step, which doesn't has a substep, but it's previous one has
      setActiveTab(steps[activeStep - 1].subSteps.length - 1)   // move to last substep of previous step
      setActiveStep(prev => prev - 1)

    } else {
      // Otherwise just go back one main step
      setActiveStep(prev => prev - 1)
    }
  }

  const isLastStep = activeStep === steps.length - 1
  const isLastSubStep = () => {
    if (!steps[activeStep].subSteps) return true;
    else if (steps[activeStep].subSteps && activeTab === steps[activeStep].subSteps.length - 1) return true
    else return false;
  }


  const onSubmit = (formData, event) => {
    try {
      dispatch(updatePatientForm({
        ...formData
      }))
      if (event?.nativeEvent?.submitter?.innerText === 'Save & Next') {
        handleNext()
      }
      toast.success('Data has been saved successfully!')
    } catch (error) {
      console.error('Error updating patient form:', error)
    }
  }

  const handleSubmitButtonClick = () => {
    // TODO: Add API call to submit all data
    toast.success('All data has been submitted successfully!')
  }

  const buttonGroup = () => {
    return (
      <>
        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          {(activeStep > 0 || activeTab > 0) && (
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-2 border border-olive-600 text-olive-600 rounded hover:bg-olive-600 hover:text-white transition-colors"
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={onSubmit}
            className="px-6 py-2 bg-olive-600 text-white rounded hover:bg-olive-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Save
          </button>
          {
            isLastStep && isLastSubStep ?
              <button
                onClick={handleSubmitButtonClick}
                type="button"
                disabled={!isLastStep && !isLastSubStep}
                className="px-6 py-2 bg-olive-600 text-white rounded hover:bg-olive-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Submit
              </button>
              :
              <button
                onClick={handleNextButtonClick}
                type={handlenextButtonType()}
                disabled={!isLastStep && !isLastSubStep}
                className="px-6 py-2 bg-olive-600 text-white rounded hover:bg-olive-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Save & Next
              </button>
          }
        </div>
      </>
    )
  }


  const renderContent = () => {
    if (steps[activeStep]?.subSteps) {
      const currentSubStep = steps[activeStep].subSteps[activeTab]

      if (currentSubStep.sections) {
        return (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
            {currentSubStep.sections.map((section, index) => (
              <div key={index} className="mb-8 w-full">
                <h3 className="text-lg font-medium mb-4">{section.label}</h3>
                <PatientDetailsForm section={section} register={register} errors={errors} />
              </div>
            ))}
            {buttonGroup()}
          </form>
        )
      }

      return (
        <>
          <h1>Patient Details - {steps[activeStep].subSteps[activeTab].label}</h1>
          {buttonGroup()}
        </>)
    }

    return (
      <>
        <h1>{steps[activeStep].label} content goes here</h1>
        {buttonGroup()}
      </>
    )
  }

  return (

    <div className="max-w-8xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-normal text-center mb-8">Register a new patient</h1>

      {/* Stepper */}
      <div className="flex items-center justify-center mb-12">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full 
                ${index <= activeStep
                ? 'bg-olive-600 text-white'
                : 'bg-gray-300 text-gray-700'}`}>
              {step.number}
            </div>

            <span className={`ml-2 text-sm 
                ${index <= activeStep
                ? 'text-olive-600'
                : 'text-gray-500'}`}>
              {step.label}
            </span>

            {index < steps.length - 1 && (
              <div className={`w-24 h-[1px] mx-4
                  ${index < activeStep ? 'bg-olive-600' : 'bg-gray-300'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="max-w-8xl mx-auto px-8 py-8 border-2 border-gray-200 rounded-3xl bg-white">

        {/* Tabs - Only show for Sub-steps */}
        {steps[activeStep]?.subSteps && (
          <div className="flex border-b mx-10 justify-center">
            {steps[activeStep].subSteps.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-2 text-sm font-medium 
                  ${index === activeTab
                    ? 'border-b-2 border-olive-600 text-olive-600'
                    : 'text-gray-500'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Step & Sub-step Content */}
        <div className="mt-8 min-h-[300px]">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default StepperForm
