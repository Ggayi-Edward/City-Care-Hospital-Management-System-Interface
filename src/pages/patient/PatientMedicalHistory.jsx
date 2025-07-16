import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientSidebar from '../../components/PatientSidebar';
import PatientTopbar from '../../components/PatientTopbar';
import DataTable from '../../components/Table';

export default function PatientMedicalHistory() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ from: '', to: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    console.log('Apply Filters:', filters);
  };

  const historyData = [
    { date: '2025-01-15', category: 'Diagnosis', description: 'Hypertension', provider: 'Dr. Smith' },
    { date: '2025-01-10', category: 'Treatment', description: 'Medication for Hypertension', provider: 'Dr. Jones' },
    { date: '2025-01-05', category: 'Diagnosis', description: 'Diabetes', provider: 'Dr. Lee' },
    { date: '2025-01-01', category: 'Allergy', description: 'Peanut Allergy', provider: 'Dr. Kim' },
    { date: '2025-01-20', category: 'Surgery', description: 'Appendectomy', provider: 'Dr. Brown' },
  ];

  const columns = [
    { label: 'Date', key: 'date' },
    { label: 'Category', key: 'category' },
    { label: 'Description', key: 'description' },
    { label: 'Provider', key: 'provider' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <PatientSidebar active="Medical History" />

      <div className="flex-1 flex flex-col">
        <PatientTopbar user={{ name: 'Lexy', role: 'Patient' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <button onClick={() => navigate('/patient/dashboard')} className="hover:underline text-blue-600">
              Patient Dashboard
            </button>
            <span>/</span>
            <span className="text-gray-500">Medical History</span>
          </nav>
        </div>

        {/* Title & Filters */}
        <div className="p-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Medical History</h3>

          <div className="bg-white rounded shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm text-gray-700 mb-1">From Date</label>
                <input
                  type="date"
                  name="from"
                  value={filters.from}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">To Date</label>
                <input
                  type="date"
                  name="to"
                  value={filters.to}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  name="category"
                  value={filters.category}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-sm"
                  placeholder="e.g. Diagnosis"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleApplyFilters}
                  className="bg-[#4f91a6] hover:bg-[#3a7386] text-white px-4 py-2 rounded text-sm w-full"
                >
                  Apply Filters
                </button>
              </div>
            </div>

            <DataTable columns={columns} rows={historyData} />
          </div>
        </div>
      </div>
    </div>
  );
}
