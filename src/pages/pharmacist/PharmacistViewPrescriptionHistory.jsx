import React, { useState } from 'react';
import PharmacistSidebar from '../../components/PharmacistSidebar';
import PharmacistTopbar from '../../components/PharmacistTopbar';
import { Search } from 'lucide-react';

const prescriptionHistory = [
  {
    id: 1,
    patient: 'John Doe',
    doctor: 'Dr. Smith',
    date: '2025-07-10',
    medication: 'Amoxicillin 500mg',
    status: 'Dispensed',
  },
  {
    id: 2,
    patient: 'Jane Smith',
    doctor: 'Dr. Green',
    date: '2025-07-09',
    medication: 'Ibuprofen 200mg',
    status: 'Dispensed',
  },
  {
    id: 3,
    patient: 'Alice Johnson',
    doctor: 'Dr. Blue',
    date: '2025-07-07',
    medication: 'Paracetamol 500mg',
    status: 'Dispensed',
  },
];

export default function PharmacistViewPrescriptionHistory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrescriptions = prescriptionHistory.filter(
    (item) =>
      item.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.medication.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <PharmacistSidebar active="View Prescription History" />
      <div className="flex-1 flex flex-col">
        <PharmacistTopbar user={{ name: 'PharmaTech', role: 'Pharmacist' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Pharmacist Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Prescription History</span>
          </nav>
        </div>

        {/* Header + Search */}
        <div className="px-8 pt-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">Prescription History</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search patient or medication"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-1 border rounded text-sm w-72"
            />
          </div>
        </div>

        {/* Table */}
        <div className="px-8 py-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead>
                <tr className="bg-gray-200 text-left text-sm text-gray-700">
                  <th className="py-2 px-4">Patient</th>
                  <th className="py-2 px-4">Doctor</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Medication</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredPrescriptions.map((prescription) => (
                  <tr key={prescription.id} className="border-t text-sm text-gray-600">
                    <td className="py-2 px-4">{prescription.patient}</td>
                    <td className="py-2 px-4">{prescription.doctor}</td>
                    <td className="py-2 px-4">{prescription.date}</td>
                    <td className="py-2 px-4">{prescription.medication}</td>
                    <td className="py-2 px-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {prescription.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredPrescriptions.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-gray-500 py-6">
                      No prescription records found.
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
