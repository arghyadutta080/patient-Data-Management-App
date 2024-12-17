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
                        label: 'Personal Information',
                        fields: [
                            {
                                number: 1,
                                label: 'First Name',
                                type: 'text',
                                required: true,
                            },
                            {
                                number: 2,
                                label: 'Last Name',
                                type: 'text',
                                required: false,
                            },
                            {
                                number: 3,
                                label: 'Date of Birth',
                                type: 'date',
                                required: true,
                            },
                            {
                                number: 4,
                                label: 'Gender',
                                type: 'select',
                                options: ['Male', 'Female', 'Other'],
                                required: true,
                            },
                            {
                                number: 5,
                                label: 'Phone Number',
                                type: 'text',
                                required: true,
                            },
                            {
                                number: 6,
                                label: 'Email',
                                type: 'email',
                                required: false,
                            },
                            {
                                number: 7,
                                label: 'Address',
                                type: 'text',
                                required: false,
                            },
                            {
                                number: 8,
                                label: 'City',
                                type: 'select',
                                options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
                                required: false,
                            },
                            {
                                number: 9,
                                label: 'State',
                                type: 'select',
                                options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
                                required: false,
                            },
                            {
                                number: 10,
                                label: 'District',
                                type: 'select',
                                options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
                                required: false,
                            },
                        ]
                    },
                    {
                        title: 'Referral Information',
                        fields: [
                            {
                                id: 1,
                                title: 'How did you hear about us?',
                                type: 'select',
                                options: ['Google', 'Facebook', 'Twitter', 'Instagram', 'Other'],
                                required: false,
                            },
                            {
                                id: 2,
                                title: 'Refer from',
                                type: 'text',
                                required: false,
                            }
                        ]
                    },
                    {
                        label: 'Admission Type',
                        fields: [
                            {
                                number: 1,
                                label: '',  
                                type: 'select',
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
