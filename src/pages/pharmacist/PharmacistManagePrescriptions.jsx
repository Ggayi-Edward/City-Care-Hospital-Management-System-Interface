import React, { useState } from 'react';
import PharmacistSidebar from '../../components/PharmacistSidebar';
import PharmacistTopbar from '../../components/PharmacistTopbar';
import { Search } from 'lucide-react';

const samplePrescriptions = [
  {
    id: 1,
    patient: 'John Doe',
    doctor: 'Dr. Smith',
    date: '2025-07-10',
    medication: 'Amoxicillin 500mg',
    status: 'Pending',
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
    patient: 'Robert Brown',
    doctor: 'Dr. Blue',
    date: '2025-07-08',
    medication: 'Metformin 850mg',
    status: 'Pending',
  },
];

export default function PharmacistManagePrescriptions() {
  const [search, setSearch] = useState('');
  const [prescriptions, setPrescriptions] = useState(samplePrescriptions);

  const handleDispense = (id) => {
    setPrescriptions((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: 'Dispensed' } : p
      )
    );
  };

  const filtered = prescriptions.filter(
    (p) =>
      p.patient.toLowerCase().includes(search.toLowerCase()) ||
      p.medication.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <PharmacistSidebar active="Manage Prescriptions" />
      <div className="flex-1 flex flex-col">
        <PharmacistTopbar user={{ name: 'PharmaTech', role: 'Pharmacist' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Pharmacist Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Manage Prescriptions</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="px-8 pt-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">Manage Prescriptions</h3>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search patient or medication"
              className="pl-10 pr-4 py-1 border rounded text-sm w-72"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((prescription) => (
                  <tr
                    key={prescription.id}
                    className="border-t text-sm text-gray-600"
                  >
                    <td className="py-2 px-4">{prescription.patient}</td>
                    <td className="py-2 px-4">{prescription.doctor}</td>
                    <td className="py-2 px-4">{prescription.date}</td>
                    <td className="py-2 px-4">{prescription.medication}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          prescription.status === 'Dispensed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {prescription.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">
                      {prescription.status === 'Pending' ? (
                        <button
                          onClick={() => handleDispense(prescription.id)}
                          className="text-sm bg-[#4f91a6] hover:bg-[#3a7386] text-white px-3 py-1 rounded"
                        >
                          Mark as Dispensed
                        </button>
                      ) : (
                        <span className="text-gray-400 text-xs">Completed</span>
                      )}
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center text-gray-500 py-6">
                      No prescriptions found.
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
