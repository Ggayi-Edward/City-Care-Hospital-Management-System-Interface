import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorTopbar from '../../components/DoctorTopbar';
import { Search } from 'lucide-react';

const patientData = [
  { id: 1, name: 'John Doe', age: 45, gender: 'Male', lastVisit: '2025-06-30', diagnosis: 'Hypertension' },
  { id: 2, name: 'Jane Smith', age: 52, gender: 'Female', lastVisit: '2025-06-28', diagnosis: 'Diabetes' },
  { id: 3, name: 'Michael Brown', age: 36, gender: 'Male', lastVisit: '2025-06-25', diagnosis: 'Asthma' },
  { id: 4, name: 'Emily Johnson', age: 29, gender: 'Female', lastVisit: '2025-06-20', diagnosis: 'Allergy' },
  { id: 5, name: 'Daniel Lee', age: 63, gender: 'Male', lastVisit: '2025-06-18', diagnosis: 'Arthritis' },
];

export default function DoctorPatientRecords() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate(); // 

  const filteredPatients = patientData.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.diagnosis.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <DoctorSidebar active="Patient Records" />
      <div className="flex-1 flex flex-col">
        <DoctorTopbar user={{ name: 'Dr. Smith', role: 'Doctor' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Doctor Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Patient Records</span>
          </nav>
        </div>

        {/* Header and Search */}
        <div className="px-8 pt-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">Patient Records</h3>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or diagnosis"
              className="pl-10 pr-4 py-1 border rounded text-sm w-72"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="px-8 pt-6 pb-10 overflow-x-auto">
          <table className="min-w-full bg-white shadow-sm rounded-md overflow-hidden text-sm text-black">
            <thead className="bg-gray-200 border-b">
              <tr>
                <th className="text-left px-4 py-2">Patient</th>
                <th className="text-left px-4 py-2">Age</th>
                <th className="text-left px-4 py-2">Gender</th>
                <th className="text-left px-4 py-2">Last Visit</th>
                <th className="text-left px-4 py-2">Diagnosis</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient, index) => (
                  <tr key={patient.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2">{patient.name}</td>
                    <td className="px-4 py-2">{patient.age}</td>
                    <td className="px-4 py-2">{patient.gender}</td>
                    <td className="px-4 py-2">{patient.lastVisit}</td>
                    <td className="px-4 py-2">{patient.diagnosis}</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-blue-600 hover:underline text-sm"
                        onClick={() => navigate(`/doctor/records/${patient.id}`)} // ✅ Navigate to record page
                      >
                        View Record
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center px-4 py-6 text-gray-500">
                    No matching patient records.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
