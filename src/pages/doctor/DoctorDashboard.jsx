import React from 'react';
import {
  CalendarDays,
  RefreshCw,
  FileText,
  LogOut,
  Home,
  Bell,
  UserCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PatientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen font-sans bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#4f91a6] text-white flex flex-col p-6 px-6 pt-12">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold">
            City<span className="text-blue-200">Care</span>
          </h1>
        </div>

        <nav className="flex flex-col gap-4 text-sm font-medium">
          <button onClick={() => navigate('/patient/dashboard')} className="flex items-center gap-3 bg-[#3a7386] p-2 rounded text-white">
            <Home size={16} /> Dashboard
          </button>
          <button onClick={() => navigate('/patient/book')} className="flex items-center gap-3 hover:bg-[#3a7386] p-2 rounded text-white">
            <CalendarDays size={16} /> Book Appointment
          </button>
          <button onClick={() => navigate('/patient/history')} className="flex items-center gap-3 hover:bg-[#3a7386] p-2 rounded text-white">
            <RefreshCw size={16} /> Appointment History
          </button>
          <button onClick={() => navigate('/patient/records')} className="flex items-center gap-3 hover:bg-[#3a7386] p-2 rounded text-white">
            <FileText size={16} /> Medical History
          </button>
          <button onClick={() => navigate('/logout')} className="flex items-center gap-3 hover:bg-red-500 text-red-100 mt-auto p-2 rounded">
            <LogOut size={16} /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-[#b4d3e0] px-6 py-4 flex items-center border-b border-gray-300 relative">
          <h2 className="absolute left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold font-belanosima">
            City Care
          </h2>
          <div className="ml-auto flex items-center gap-4 text-white">
            <Bell />
            <div className="text-right text-sm">
              <p className="font-semibold">Lexy</p>
              <p className="text-xs">Patient</p>
            </div>
            <UserCircle />
          </div>
        </header>

        {/* Breadcrumbs */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <button onClick={() => navigate('/patient/dashboard')} className="hover:underline text-blue-600">Home</button>
            <span>/</span>
            <span className="text-gray-500">Dashboard</span>
          </nav>
        </div>

        {/* Dashboard Overview */}
        <div className="p-8 space-y-8">
          <h3 className="text-xl font-semibold text-gray-700">Welcome back, Lexy!</h3>

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
                <p className="text-sm text-gray-600">Schedule appointments with doctors</p>
              </div>
            </div>
            <div
              onClick={() => navigate('/patient/history')}
              className="cursor-pointer bg-white rounded shadow p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <RefreshCw className="text-[#82b8c9]" size={36} />
              <div>
                <h4 className="font-bold text-gray-800">Appointment History</h4>
                <p className="text-sm text-gray-600">View your previous appointments</p>
              </div>
            </div>
            <div
              onClick={() => navigate('/patient/records')}
              className="cursor-pointer bg-white rounded shadow p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <FileText className="text-gray-400" size={36} />
              <div>
                <h4 className="font-bold text-gray-800">Medical History</h4>
                <p className="text-sm text-gray-600">View your medical history</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded shadow p-5">
              <h5 className="font-bold text-gray-800 mb-2">Upcoming Appointments</h5>
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
