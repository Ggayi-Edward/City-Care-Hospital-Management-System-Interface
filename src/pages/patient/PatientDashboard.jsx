import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, RefreshCw, FileText } from 'lucide-react';
import PatientSidebar from '../../components/PatientSidebar';
import PatientTopbar from '../../components/PatientTopbar';

export default function PatientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100 font-roboto">
      {/* Reusable Sidebar */}
      <PatientSidebar active="Dashboard" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Reusable Top Bar */}
        <PatientTopbar user={{ name: 'Lexy', role: 'Patient' }} />

        {/* Breadcrumbs */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <button
              onClick={() => navigate('/patient/dashboard')}
              className="hover:underline text-blue-600"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-gray-500">Dashboard</span>
          </nav>
        </div>

        {/* Dashboard Overview */}
        <div className="p-8 space-y-8">
          <h3 className="text-xl font-semibold text-gray-700">
            Welcome back, Lexy
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <h4 className="text-gray-500 text-sm">Upcoming Appointments</h4>
              <p className="text-3xl font-bold text-gray-800 mt-2">3</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <h4 className="text-gray-500 text-sm">Total Visits</h4>
              <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <h4 className="text-gray-500 text-sm">Prescriptions</h4>
              <p className="text-3xl font-bold text-gray-800 mt-2">5</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              onClick={() => navigate('/patient/book')}
              className="cursor-pointer bg-white rounded shadow p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <CalendarDays className="text-[#4f91a6]" size={36} />
              <div>
                <h4 className="font-bold text-gray-800">Book Appointment</h4>
                <p className="text-sm text-gray-600">
                  Schedule appointments with doctors
                </p>
              </div>
            </div>
            <div
              onClick={() => navigate('/patient/history')}
              className="cursor-pointer bg-white rounded shadow p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <RefreshCw className="text-[#82b8c9]" size={36} />
              <div>
                <h4 className="font-bold text-gray-800">Appointment History</h4>
                <p className="text-sm text-gray-600">
                  View your previous appointments
                </p>
              </div>
            </div>
            <div
              onClick={() => navigate('/patient/records')}
              className="cursor-pointer bg-white rounded shadow p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <FileText className="text-gray-400" size={36} />
              <div>
                <h4 className="font-bold text-gray-800">Medical History</h4>
                <p className="text-sm text-gray-600">
                  View your medical history
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded shadow p-5">
              <h5 className="font-bold text-gray-800 mb-2">
                Upcoming Appointments
              </h5>
              <ul className="text-sm text-blue-900 space-y-2">
                <li>📅 2025-07-01 10:00 AM – Dr. Smith – Checkup</li>
                <li>📅 2025-07-02 11:00 AM – Dr. Jones – Follow-up</li>
                <li>📅 2025-07-03 09:00 AM – Dr. Lee – Consultation</li>
              </ul>
            </div>
            <div className="bg-white rounded shadow p-5">
              <h5 className="font-bold text-gray-800 mb-2">Health Summary</h5>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>💊 2 prescriptions expiring this week</li>
                <li>📋 Last visit: 2025-06-15</li>
                <li>🩺 Blood pressure: Normal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
