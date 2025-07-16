import React, { useState } from 'react';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorTopbar from '../../components/DoctorTopbar';
import { CheckCircle, XCircle } from 'lucide-react';

const initialAppointments = [
  { id: 1, patient: 'John Doe', date: '2025-07-15', time: '10:00 AM', reason: 'Check-up', status: 'Pending' },
  { id: 2, patient: 'Jane Smith', date: '2025-07-16', time: '2:00 PM', reason: 'Consultation', status: 'Pending' },
  { id: 3, patient: 'Tom Brown', date: '2025-07-17', time: '1:00 PM', reason: 'Follow-up', status: 'Completed' },
  { id: 4, patient: 'Sarah Lee', date: '2025-07-18', time: '9:30 AM', reason: 'Annual check', status: 'Pending' },
];

export default function DoctorManageAppointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const doctor = 'Dr. Smith';

  const handleAction = (id, newStatus) => {
    setAppointments(prev =>
      prev.map(appt => (appt.id === id ? { ...appt, status: newStatus } : appt))
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <DoctorSidebar active="Manage Appointments" />
      <div className="flex-1 flex flex-col">
        <DoctorTopbar user={{ name: doctor, role: 'Doctor' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Doctor Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Manage Appointments</span>
          </nav>
        </div>

        {/* Appointment List */}
        <div className="px-8 py-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Appointments</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-sm rounded-md overflow-hidden text-sm text-black">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th className="text-left px-4 py-2">Patient</th>
                  <th className="text-left px-4 py-2">Date</th>
                  <th className="text-left px-4 py-2">Time</th>
                  <th className="text-left px-4 py-2">Reason</th>
                  <th className="text-left px-4 py-2">Status</th>
                  <th className="text-left px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, index) => (
                  <tr key={appt.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2">{appt.patient}</td>
                    <td className="px-4 py-2">{appt.date}</td>
                    <td className="px-4 py-2">{appt.time}</td>
                    <td className="px-4 py-2">{appt.reason}</td>
                    <td
                      className={`px-4 py-2 font-medium ${
                        appt.status === 'Pending'
                          ? 'text-yellow-600'
                          : appt.status === 'Completed'
                          ? 'text-green-600'
                          : 'text-red-500'
                      }`}
                    >
                      {appt.status}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex gap-4 items-center">
                        {appt.status === 'Pending' && (
                          <>
                            <button
                              onClick={() => handleAction(appt.id, 'Completed')}
                              title="Mark as Completed"
                            >
                              <CheckCircle className="text-green-600 hover:text-green-800" size={18} />
                            </button>
                            <button
                              onClick={() => handleAction(appt.id, 'Cancelled')}
                              title="Cancel"
                            >
                              <XCircle className="text-red-500 hover:text-red-700" size={18} />
                            </button>
                          </>
                        )}
                        {appt.status !== 'Pending' && <span className="text-gray-400">No actions</span>}
                      </div>
                    </td>
                  </tr>
                ))}
                {appointments.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
