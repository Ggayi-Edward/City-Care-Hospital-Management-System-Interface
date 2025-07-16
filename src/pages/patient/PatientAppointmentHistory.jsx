import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PatientTopbar from '../../components/PatientTopbar';
import PatientSidebar from '../../components/PatientSidebar';
import DataTable from '../../components/Table';

const sampleAppointments = [
  { date: '2025-06-30', time: '10:00 AM', doctor: 'Dr. Smith', reason: 'Check-up', status: 'Scheduled' },
  { date: '2025-06-29', time: '2:00 PM', doctor: 'Dr. Johnson', reason: 'Consultation', status: 'Completed' },
  { date: '2025-06-28', time: '1:00 PM', doctor: 'Dr. Brown', reason: 'Follow-up', status: 'Cancelled' },
  { date: '2025-06-27', time: '11:00 AM', doctor: 'Dr. Green', reason: 'Routine Check', status: 'Completed' },
  { date: '2025-06-26', time: '9:00 AM', doctor: 'Dr. White', reason: 'Annual Check-up', status: 'Scheduled' },
  { date: '2025-06-25', time: '3:00 PM', doctor: 'Dr. Black', reason: 'Consultation', status: 'Completed' },
  { date: '2025-06-24', time: '12:00 PM', doctor: 'Dr. Grey', reason: 'Follow-up', status: 'Cancelled' },
  { date: '2025-06-23', time: '10:30 AM', doctor: 'Dr. Blue', reason: 'Routine Check', status: 'Completed' },
  { date: '2025-06-22', time: '1:30 PM', doctor: 'Dr. Yellow', reason: 'Annual Check-up', status: 'Scheduled' },
  { date: '2025-06-21', time: '2:30 PM', doctor: 'Dr. Orange', reason: 'Consultation', status: 'Completed' },
  { date: '2025-06-20', time: '11:15 AM', doctor: 'Dr. Pink', reason: 'Follow-up', status: 'Cancelled' },
  { date: '2025-06-19', time: '9:45 AM', doctor: 'Dr. Purple', reason: 'Routine Check', status: 'Completed' },
  { date: '2025-06-18', time: '4:00 PM', doctor: 'Dr. Grey', reason: 'Annual Check-up', status: 'Scheduled' },
];

export default function PatientAppointmentHistory() {
  const [search, setSearch] = useState('');

  const columns = [
    { key: 'date', label: 'Date' },
    { key: 'time', label: 'Time' },
    { key: 'doctor', label: 'Doctor' },
    { key: 'reason', label: 'Reason' },
    { key: 'status', label: 'Status' },
  ];

  const filteredRows = sampleAppointments.filter(
    (appt) =>
      appt.doctor.toLowerCase().includes(search.toLowerCase()) ||
      appt.reason.toLowerCase().includes(search.toLowerCase())
  );

  const statusColorMap = {
    Scheduled: 'text-blue-600',
    Completed: 'text-green-600',
    Cancelled: 'text-red-600',
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <PatientSidebar active="Appointment History" />
      <div className="flex-1 flex flex-col">
        <PatientTopbar user={{ name: 'Lexy', role: 'Patient' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Patient Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Appointment History</span>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="px-8 pt-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">Past Appointments</h3>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by doctor or reason"
              className="pl-10 pr-4 py-1 border rounded text-sm w-72"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="px-8 pt-6 pb-10">
          <DataTable columns={columns} rows={filteredRows} statusColorMap={statusColorMap} />
        </div>
      </div>
    </div>
  );
}
