import { useState } from 'react'
import { STEPS } from '../../utils/constants/registrationForm'

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [activeTab, setActiveTab] = useState(0)

  const steps = STEPS

  const handleNext = () => {
    if (steps[activeStep].subSteps && activeStep < steps.length - 1) {
      // If we're in the step, which has substeps and it's not the last step
      if (activeTab < steps[activeStep].subSteps.length - 1) {    // If there are more sub-steps, go to next sub-step
        setActiveTab(prev => prev + 1)
      } else {
        // If we're at the last sub-step, go to next main step
        setActiveTab(0)
        setActiveStep(prev => prev + 1)
      }
    } else if (activeStep < steps.length - 1) {
      // For other main steps, just move to next step
      setActiveStep(prev => prev + 1)
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
  // const isLastSubStep = activeStep === 0 && activeTab === steps[0].subSteps.length - 1

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
                : 'bg-gray-200 text-gray-500'}`}>
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
                ${index < activeStep ? 'bg-olive-600' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Tabs - Only show for Patient Details step */}
      {activeStep === 0 && (
        <div className="flex border-b justify-center">
          {steps[0].subSteps.map((tab, index) => (
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

      {/* Content Area */}
      <div className="mt-8 min-h-[300px]">
        <div className="text-center text-gray-500">
          {activeStep === 0 
            ? `Patient Details - ${steps[0].subSteps[activeTab].label}`
            : `${steps[activeStep].label} content goes here`}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-4 mt-8">
        {(activeStep > 0 || activeTab > 0) && (
          <button
            onClick={handleBack}
            className="px-6 py-2 border border-olive-600 text-olive-600 rounded hover:bg-olive-600 hover:text-white transition-colors"
          >
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={isLastStep}
          className="px-6 py-2 bg-olive-600 text-white rounded hover:bg-olive-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isLastStep ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default StepperForm
 