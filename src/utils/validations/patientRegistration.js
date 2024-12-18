import { z } from 'zod'

export const patientRegistrationSchema = z.object({
    // Personal Information section
    firstName: z.string().min(2, 'First name must be at least 2 characters').nonempty('First name is required'),
    lastName: z.string().optional(),
    dateOfBirth: z.string().nonempty('Date of birth is required'),
    gender: z.enum(["Male", "Female", "Other", '']).refine((data) => data !== '', {
        message: "Please select a gender",
    }).optional(),
    phoneNumber: z.string()
        .regex(/^[0-9]{10}$/, 'Invalid phone number')
        .nonempty('Phone number is required'),
    email: z.string().optional(),
    address: z.string().optional(),
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
})