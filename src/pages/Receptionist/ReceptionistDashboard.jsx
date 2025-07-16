import React from 'react';
import ReceptionistSidebar from '../../components/ReceptionistSidebar';
import ReceptionistTopbar from '../../components/ReceptionistTopbar';
import { CalendarDays, ClipboardEdit } from 'lucide-react';

export default function ReceptionistDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <ReceptionistSidebar active="Dashboard" />

      <div className="flex-1 flex flex-col">
        <ReceptionistTopbar user={{ name: 'Lexy', role: 'receptionist' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Receptionist Dashboard</span>
          </nav>
        </div>

        {/* Dashboard Content */}
        <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Today Summary */}
          <div className="bg-white rounded shadow p-4 col-span-1">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Today: July 16, 2025</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><strong>Appointments Scheduled:</strong> 7</li>
              <li><strong>Completed:</strong> 4</li>
              <li><strong>Cancelled:</strong> 2</li>
              <li><strong>Remaining:</strong> 1</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              onClick={() => window.location.href = '/receptionist/register'}
              className="bg-white hover:bg-blue-50 cursor-pointer rounded shadow p-6 flex flex-col justify-center items-center transition duration-200"
            >
              <ClipboardEdit className="text-blue-600 mb-3" size={36} />
              <h4 className="text-md font-semibold text-gray-700">Register Patients</h4>
              <p className="text-sm text-gray-500 text-center mt-1">Add new patients to the system</p>
            </div>

            <div
              onClick={() => window.location.href = '/receptionist/appointments'}
              className="bg-white hover:bg-blue-50 cursor-pointer rounded shadow p-6 flex flex-col justify-center items-center transition duration-200"
            >
              <CalendarDays className="text-green-600 mb-3" size={36} />
              <h4 className="text-md font-semibold text-gray-700">Schedule Appointment</h4>
              <p className="text-sm text-gray-500 text-center mt-1">Book appointments for patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
