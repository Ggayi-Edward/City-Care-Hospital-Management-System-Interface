import React from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorTopbar from '../../components/DoctorTopbar';
import { CalendarDays, FileText, Stethoscope } from 'lucide-react';

export default function DoctorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <DoctorSidebar active="Dashboard" />
      <div className="flex-1 flex flex-col">
        <DoctorTopbar user={{ name: 'Dr. Alex', role: 'Doctor' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Doctor Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Home</span>
          </nav>
        </div>

        {/* Overview Cards */}
        <div className="p-8 space-y-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Welcome back, Dr. Alex
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              onClick={() => navigate('/doctor/appointments')}
              className="cursor-pointer bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <CalendarDays className="text-[#4f91a6]" size={36} />
              <h4 className="font-bold text-gray-800 mt-2">Manage Appointments</h4>
              <p className="text-sm text-gray-600">
                View and manage your scheduled appointments
              </p>
            </div>

            <div
              onClick={() => navigate('/doctor/records')}
              className="cursor-pointer bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <FileText className="text-[#4f91a6]" size={36} />
              <h4 className="font-bold text-gray-800 mt-2">Patient Records</h4>
              <p className="text-sm text-gray-600">
                Access patient medical histories and notes
              </p>
            </div>

            <div
              onClick={() => navigate('/doctor/prescriptions')}
              className="cursor-pointer bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <Stethoscope className="text-[#4f91a6]" size={36} />
              <h4 className="font-bold text-gray-800 mt-2">Prescribe Medication</h4>
              <p className="text-sm text-gray-600">
                Issue prescriptions for patients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
