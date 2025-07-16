// src/components/ReceptionistSidebar.jsx
import React from 'react';
import { UserPlus, CalendarPlus } from 'lucide-react';

export default function ReceptionistSidebar({ activeTab, setActiveTab, setMessage }) {
  return (
    <div className="w-64 bg-white shadow h-full flex flex-col p-6 space-y-4">
      <h2 className="text-xl font-bold text-blue-600">Receptionist</h2>

      <button
        onClick={() => { setActiveTab('register'); setMessage(''); }}
        className={`text-left py-2 px-3 rounded ${
          activeTab === 'register' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700 hover:bg-blue-50'
        }`}
      >
        <UserPlus className="inline mr-2" size={16} /> Register Patient
      </button>

      <button
        onClick={() => { setActiveTab('appointment'); setMessage(''); }}
        className={`text-left py-2 px-3 rounded ${
          activeTab === 'appointment' ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700 hover:bg-blue-50'
        }`}
      >
        <CalendarPlus className="inline mr-2" size={16} /> Book Appointment
      </button>
    </div>
  );
}
