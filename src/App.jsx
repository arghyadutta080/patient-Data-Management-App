import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Dashboard from './pages/Dashboard';
import PatientRegister from './pages/PatientRegister';
// import PatientRecords from './pages/patient/PatientRecords';
// import MedicalHistory from './pages/patient/MedicalHistory';
// import Appointments from './pages/patient/Appointments';
// import OTSchedule from './pages/ot/OTSchedule';
// import OperatingRooms from './pages/ot/OperatingRooms';
// import EquipmentStatus from './pages/ot/EquipmentStatus';
// import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patient-register" element={<PatientRegister />} />
            {/* <Route path="/patient/records" element={<PatientRecords />} />
            <Route path="/patient/history" element={<MedicalHistory />} />
            <Route path="/patient/appointments" element={<Appointments />} />
            <Route path="/ot/schedule" element={<OTSchedule />} />
            <Route path="/ot/rooms" element={<OperatingRooms />} />
            <Route path="/ot/equipment" element={<EquipmentStatus />} />
            <Route path="/reports" element={<Reports />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
