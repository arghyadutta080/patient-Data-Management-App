import { z } from 'zod'

export const patientRegistrationSchema = z.object({
    // Personal Information section
    firstName: z.string().min(2, 'First name must be at least 2 characters').nonempty('First name is required'),
    lastName: z.string().optional(),
    dateOfBirth: z.string().nonempty('Date of birth is required'),
    age: z.string().min(1, 'Age must be at least 1 year').max(2, 'Age must be less than 99 years'),
    timeOfBirth: z.string().optional(),
    gender: z.enum(["Male", "Female", "Other", '']).refine((data) => data !== '', {
        message: "Please select a gender",
    }).optional(),
    guardianName: z.string().optional(),
    phoneNumber: z.string()
        .regex(/^[0-9]{10}$/, 'Invalid phone number')
        .nonempty('Phone number is required'),
    alternatePhoneNumber: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    country: z.enum(['India', 'Pakistan', 'Bangladesh', ''])
        .optional(),
    city: z.enum(['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', ''])
        .optional(),
    state: z.enum(['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', ''])
        .optional(),
    district: z.enum(['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', ''])
        .optional(),

    // Referral Information section
    howDidYouKnow: z.enum(['Google', 'Facebook', 'Twitter', 'Instagram', 'Other', ''])
        .optional(),
    referredBy: z.string()
        .optional(),

    // Admission Type section
    admissionType: z.enum(['Voluntary', 'Involuntary', ''])
        .optional(),
    admittedBy: z.enum(['Bought by family', 'Bought by self', 'Referred by doctor', 'Referred by friend', 'Referred by relative', 'Referred by other', ''])
        .optional(),
})