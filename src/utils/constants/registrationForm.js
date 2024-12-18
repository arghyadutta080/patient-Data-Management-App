export const STEPS = [
    {
        number: 1,
        label: 'Patient Information',
        subSteps: [
            {
                number: 1,
                label: 'Basic Information',
                sections: [
                    {
                        id: 'patiend-basic-personal-info',
                        label: 'Personal Information',
                        fields: [
                            {
                                label: 'First Name',
                                name: 'firstName',
                                type: 'text',
                                required: true,
                            },
                            {
                                label: 'Last Name',
                                name: 'lastName',
                                type: 'text',
                                required: false,
                            },
                            {
                                label: 'Date of Birth',
                                name: 'dateOfBirth',
                                type: 'date',
                                required: true,
                            },
                            {
                                label: 'Time of Birth',
                                name: 'timeOfBirth',
                                type: 'time',
                                required: false,
                            },
                            {
                                label: 'Age',
                                name: 'age',
                                type: 'number',
                                required: true,
                            },
                            {
                                label: 'Gender',
                                name: 'gender',
                                type: 'radio',
                                options: ['Male', 'Female', 'Other'],
                                required: true,
                            },
                            {
                                label: 'Guardian Name',
                                name: 'guardianName',
                                type: 'text',
                                required: false,
                            },
                            {
                                label: 'Email',
                                name: 'email',
                                type: 'email',
                                required: false,
                            },
                            {
                                label: 'Phone Number',
                                name: 'phoneNumber',
                                type: 'text',
                                required: true,
                            },
                            {
                                label: 'Alternate Phone Number',
                                name: 'alternatePhoneNumber',
                                type: 'text',
                                required: false,
                            },
                            {
                                label: 'Country',
                                name: 'country',
                                type: 'select',
                                options: ['India', 'Pakistan', 'Bangladesh', ''],
                                required: false,
                            },
                            {
                                label: 'State',
                                name: 'state',
                                type: 'select',
                                options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
                                required: false,
                            },
                            {
                                label: 'District',
                                name: 'district',
                                type: 'select',
                                options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
                                required: false,
                            },
                            {
                                label: 'City',
                                name: 'city',
                                type: 'select',
                                options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
                                required: false,
                            },
                            {
                                label: 'Address',
                                name: 'address',
                                type: 'text',
                                required: false,
                            },
                        ]
                    },
                    {
                        id: 'patient-basic-referral-info',
                        label: 'Referral Information',
                        fields: [
                            {
                                label: 'How did you hear about us?',
                                type: 'select',
                                name: 'howDidYouKnow',
                                options: ['Google', 'Facebook', 'Twitter', 'Instagram', 'Other'],
                                required: false,
                            },
                            {
                                label: 'Refer from',
                                type: 'text',
                                name: 'referredBy',
                                required: false,
                            }
                        ]
                    },
                    {
                        id: 'patient-basic-admission-type',
                        label: 'Admission Type',
                        fields: [
                            {
                                label: '',
                                type: 'radio',
                                name: 'admissionType',
                                options: ['Voluntary', 'Involuntary'],
                                required: false,
                            },
                            {
                                label: '',
                                type: 'select',
                                name: 'admittedBy',
                                options: ['Bought by family', 'Bought by self', 'Referred by doctor', 'Referred by friend', 'Referred by relative', 'Referred by other'],
                                required: false,
                            }
                        ]
                    }
                ]
            },
            {
                number: 2,
                label: 'Legal Information',
            },
            {
                number: 3,
                label: 'Demographics',
            }
        ]
    },
    {
        number: 2,
        label: 'Assign Resources',
    },
    {
        number: 3,
        label: 'Doctor Test Report',
    }
]
