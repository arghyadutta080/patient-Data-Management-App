import PropTypes from 'prop-types'

const PatientDetailsForm = ({ section, register, errors }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full md:px-6">
            {
                section.fields.map((field, index) => (
                    ['text', 'date', 'time', 'email', 'number'].includes(field.type) ? (
                        <div key={index} className="flex flex-col">
                            <label className="block text-sm font-medium text-gray-600 mb-1">{field.label}{field.required && '*'}</label>
                            <input
                                type={field.type}
                                {...register(field.name)}
                                className="px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                                placeholder={`Enter ${field?.label?.toLowerCase()}`}
                                value={field?.value}
                            />
                            {errors[field.name] && (
                                <p className="mt-1 text-sm text-red-600">{errors[field.name]?.message}</p>
                            )}
                        </div>
                    ) : field.type === 'select' ? (
                        <div key={index} className="flex flex-col">
                            <label className="block text-sm font-medium text-gray-600 mb-1">{field.label}{field.required && '*'}</label>
                            <select
                                {...register(field.name)}
                                className="px-3 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                            >
                                <option value="">Select</option>
                                {field.options.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                            {errors[field.name] && (
                                <p className="mt-1 text-sm text-red-600">{errors[field.name]?.message}</p>
                            )}
                        </div>
                    ) : field.type === 'radio' ? (
                        <div key={index} className="flex flex-col">
                            <label className="block text-sm font-medium text-gray-600 mb-1">{field.label}{field.required && '*'}</label>
                            <div className="flex flex-row gap-4">
                                {field.options.map((option, index) => (
                                    <div key={index} className="flex items-center gap-2 py-3">
                                        <input
                                            type="radio"
                                            id={`${field.name}-${option}`}
                                            value={option}
                                            defaultChecked={index === 0}
                                            {...register(field.name)}
                                        />
                                        <label
                                            htmlFor={`${field.name}-${option}`}
                                            className="text-sm text-gray-600"
                                        >
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            {errors[field.name] && (
                                <p className="mt-1 text-sm text-red-600">{errors[field.name]?.message}</p>
                            )}
                        </div>

                    ) : null
                ))}
        </div>
    )
}

PatientDetailsForm.propTypes = {
    section: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        fields: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.number,
            label: PropTypes.string,
            type: PropTypes.string,
            required: PropTypes.bool
        })).isRequired
    }),
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default PatientDetailsForm