export const navRoutes = [
    {
        name: "Dashboard",
        path: "/",
    },
    {
        name: "Patient Register",
        path: "/patient-register",
    },
    {
        name: "Patient Data",
        subroutes: [
            {
                name: "Patient Records",
                path: "/patient/records",
            },
            {
                name: "Medical History",
                path: "/patient/history",
            },
            {
                name: "Appointments",
                path: "/patient/appointments",
            },
        ],
        dropdown: false,
    },
    {
        name: "Operation Theater",
        subroutes: [
            {
                name: "OT Schedule",
                path: "/ot/schedule",
            },
            {
                name: "Operating Rooms",
                path: "/ot/rooms",
            },
            {
                name: "Equipment Status",
                path: "/ot/equipment",
            },
        ],
        dropdown: false,
    },
    {
        name: "Reports",
        path: "/reports",
    }
]