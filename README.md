# Patient Registration System

A modern web application for managing patient registrations in healthcare facilities.

## Tech Stack

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling for faster development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development with pre-built classes
- **Redux Toolkit**: State management solution for React applications
- **React Redux**: Official React bindings for Redux

## Project Structure

The application follows a modular architecture:

- `src/lib/store`: Redux store configuration and slices
- `src/utils`: Helper functions, constants, and validation schemas
  - `constants`: Application-wide constants like form configurations
  - `validations`: Zod validation schemas for forms
  - `helpers`: Utility functions and helper methods
- `src/components`: Reusable React components
- `src/pages`: Top-level page components and routing
- `src/App.jsx`: Main application component


## Development Approach

1. Used Vite for its fast development environment and optimized build process:
   - Leverages native ES modules for instant server start
   - Provides hot module replacement (HMR) for rapid development
   - Optimizes production builds with automatic code splitting

2. Implemented Redux Toolkit for efficient state management:
   - Centralized patient registration data in a Redux store
   - Created dedicated slice for patient form state management
   - Utilized Redux DevTools for debugging and state inspection
   - Implemented actions for updating form fields and resetting state

3. Organized code into modular components for better maintainability:
   - Separated concerns between store configuration and UI components
   - Created reusable components for form sections
   - Maintained clear folder structure with dedicated directories for store and components
   - Followed single responsibility principle for component design

4. Followed React best practices and conventions:
   - Used functional components with hooks
   - Implemented proper state management patterns
   - Ensured proper component composition
   - Maintained consistent code formatting and structure
   - Used StrictMode for highlighting potential problems

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
