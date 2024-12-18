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
                                number: 1,
                                label: 'First Name',
                                name: 'firstName',
                                type: 'text',
                                required: true,
                            },
                            {
                                number: 2,
                                label: 'Last Name',
                                name: 'lastName',
                                type: 'text',
                                required: false,
                            },
                            {
                                number: 3,
                                label: 'Date of Birth',
                                name: 'dateOfBirth',
                                type: 'date',
                                required: true,
                            },
                            {
                                number: 4,
                                label: 'Gender',
                                name: 'gender',
                                type: 'select',
                                options: ['Male', 'Female', 'Other'],
                                required: true,
                            },
                            {
                                number: 5,
                                label: 'Phone Number',
                                name: 'phoneNumber',
                                type: 'text',
                                required: true,
                            },
                            {
                                number: 6,
                                label: 'Email',
                                name: 'email',
                                type: 'email',
                                required: false,
                            },
                            {
                                number: 7,
                                label: 'Address',
                                name: 'address',
                                type: 'text',
                                required: false,
                            },
                            {
                                number: 8,
                                label: 'City',
                                name: 'city',
                                type: 'select',
                                options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
                                required: false,
                            },
                            {
                                number: 9,
                                label: 'State',
                                name: 'state',
                                type: 'select',
                                options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
                                required: false,
                            },
                            {
                                number: 10,
                                label: 'District',
                                name: 'district',
                                type: 'select',
                                options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
                                required: false,
                            },
                        ]
                    },
                    {
                        id: 'patient-basic-referral-info',
                        label: 'Referral Information',
                        fields: [
                            {
                                id: 1,
                                label: 'How did you hear about us?',
                                type: 'select',
                                name: 'howDidYouKnow',
                                options: ['Google', 'Facebook', 'Twitter', 'Instagram', 'Other'],
                                required: false,
                            },
                            {
                                id: 2,
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
                                number: 1,
                                label: '',  
                                type: 'select',
                                name: 'admissionType',
                                options: ['Voluntary', 'Involuntary'],
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
