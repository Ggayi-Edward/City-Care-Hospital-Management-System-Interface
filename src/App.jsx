import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ForgotPassword from './pages/admin/ForgotPassword';
import AdminReports from './pages/admin/AdminReports';
import AdminUserManagement from './pages/admin/AdminUserManagement';
import AdminSystemSettings from './pages/admin/AdminSystemSettings';
import AdminResourceManagement from './pages/admin/AdminResourceManagement';
import AdminOperatingHours from './pages/admin/AdminOperatingHours';
import RolePermissions from './pages/admin/AdminRolePermissions';  
import AdminFinancialReports from './pages/admin/AdminFinancialReports';
import AdminStaffPerformanceReport from './pages/admin/AdminStaffPerformanceReport'; 
import AdminBilling from './pages/admin/AdminBilling';

// Patient Pages
import PatientDashboard from './pages/patient/PatientDashboard';
import PatientAppointmentHistory from './pages/patient/PatientAppointmentHistory';
import PatientBookAppointment from './pages/patient/PatientBookAppointment';
import PatientMedicalHistory from './pages/patient/PatientMedicalHistory';

// Doctor Pages
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import DoctorManageAppointments from './pages/doctor/DoctorManageAppointments';
import DoctorPatientRecords from './pages/doctor/DoctorPatientRecords';
import DoctorPrescribeMedication from './pages/doctor/DoctorPrescribeMedications'; // ✅ fixed import

// Receptionist Pages
import ReceptionistDashboard from './pages/receptionist/ReceptionistDashboard'; 
import ReceptionistRegisterPatient from './pages/receptionist/ReceptionRegisterPatient';
import ReceptionistBookAppointment from './pages/receptionist/ReceptionistBookAppointment';

// Pharmacist Pages
import PharmacistDashboard from './pages/pharmacist/PharmacistDashboard';
import PharmacistManagePrescriptions from './pages/pharmacist/PharmacistManagePrescriptions';
import PharmacistViewPrescriptionHistory from './pages/pharmacist/PharmacistViewPrescriptionHistory';
import PharmacistManageInventory from './pages/pharmacist/PharmacistManageInventory';

function App() {
  return (
    <Routes>
      {/* Redirect base path to Admin Login */}
      <Route path="/" element={<Navigate to="/admin/login" replace />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/forgot-password" element={<ForgotPassword />} />
      <Route path="/admin/reports" element={<AdminReports />} />
      <Route path="/admin/users" element={<AdminUserManagement />} />
      <Route path="/admin/settings" element={<AdminSystemSettings />} />
      <Route path="/admin/settings/operating-hours" element={<AdminOperatingHours />} />
      <Route path="/admin/settings/role-permissions" element={<RolePermissions />} />
      <Route path="/admin/resources" element={<AdminResourceManagement />} />
      <Route path="/admin/reports/financial" element={<AdminFinancialReports />} />
      <Route path="/admin/reports/staff-performance" element={<AdminStaffPerformanceReport />} />
      <Route path="/admin/billing" element={<AdminBilling />} />

      {/* Patient Routes */}
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/patient/history" element={<PatientAppointmentHistory />} />
      <Route path="/patient/records" element={<PatientMedicalHistory />} />
      <Route path="/patient/book" element={<PatientBookAppointment />} />

      {/* Doctor Routes */}
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/doctor/appointments" element={<DoctorManageAppointments />} />
      <Route path="/doctor/records" element={<DoctorPatientRecords />} />
      <Route path="/doctor/prescriptions" element={<DoctorPrescribeMedication />} />

      {/* Receptionist Routes */}
      <Route path="/receptionist/dashboard" element={<ReceptionistDashboard />} />
      <Route path="/receptionist/register" element={<ReceptionistRegisterPatient />} />
      <Route path="/receptionist/book" element={<ReceptionistBookAppointment />} />

      {/* Pharmacist Routes */}
      <Route path="/pharmacist/dashboard" element={<PharmacistDashboard />} />
      <Route path="/pharmacist/prescriptions" element={<PharmacistManagePrescriptions />} />
      <Route path="/pharmacist/history" element={<PharmacistViewPrescriptionHistory />} />
      <Route path="/pharmacist/inventory" element={<PharmacistManageInventory />} />

      {/* 404 - Not Found Route */}
      <Route
        path="*"
        element={
          <div style={{ padding: '2rem' }}>
            <h1>404 - Page Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
