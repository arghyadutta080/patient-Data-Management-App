import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/common/Navbar';
import { Dashboard, PatientRegister, PatientRecords, MedicalHistory, Appointments, OTSchedule, OperatingRooms, EquipmentStatus, Reports } from './pages';

function App() {
  const routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/patient-register', element: <PatientRegister /> },
    { path: '/patient/records', element: <PatientRecords /> },
    { path: '/patient/history', element: <MedicalHistory /> },
    { path: '/patient/appointments', element: <Appointments /> },
    { path: '/ot/schedule', element: <OTSchedule /> },
    { path: '/ot/rooms', element: <OperatingRooms /> },
    { path: '/ot/equipment', element: <EquipmentStatus /> },
    { path: '/reports', element: <Reports /> },
  ]
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      </div>
    </Router>
  );
}

export default App;
