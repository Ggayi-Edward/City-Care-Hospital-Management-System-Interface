import React, { useState } from 'react';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorTopbar from '../../components/DoctorTopbar';

export default function DoctorPrescribeMedication() {
  const [form, setForm] = useState({
    patient: '',
    date: '',
    diagnosis: '',
    medications: [{ name: '', dosage: '', frequency: '' }],
  });

  const [message, setMessage] = useState('');

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleMedChange = (index, field, value) => {
    const updated = [...form.medications];
    updated[index][field] = value;
    setForm((prev) => ({ ...prev, medications: updated }));
  };

  const addMedication = () => {
    setForm((prev) => ({
      ...prev,
      medications: [...prev.medications, { name: '', dosage: '', frequency: '' }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { patient, date, diagnosis, medications } = form;
    if (!patient || !date || !diagnosis || medications.some((m) => !m.name || !m.dosage || !m.frequency)) {
      setMessage('Please fill in all required fields.');
      return;
    }

    // Simulate form submission
    console.log('Prescription submitted:', form);
    setMessage('Prescription successfully submitted!');
    setForm({
      patient: '',
      date: '',
      diagnosis: '',
      medications: [{ name: '', dosage: '', frequency: '' }],
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <DoctorSidebar active="Prescribe Medication" />
      <div className="flex-1 flex flex-col">
        <DoctorTopbar user={{ name: 'Dr. Smith', role: 'Doctor' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Doctor Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Prescribe Medication</span>
          </nav>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow space-y-6">
            <h2 className="text-xl font-bold text-gray-700">Prescribe Medication</h2>

            {message && (
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded text-sm">{message}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient and Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Patient</label>
                  <select
                    value={form.patient}
                    onChange={(e) => handleChange('patient', e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm"
                  >
                    <option value="">Select Patient</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                    <option value="Michael Brown">Michael Brown</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className="w-full border rounded px-3 py-2 text-sm"
                  />
                </div>
              </div>

              {/* Diagnosis */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">Diagnosis</label>
                <input
                  type="text"
                  value={form.diagnosis}
                  onChange={(e) => handleChange('diagnosis', e.target.value)}
                  placeholder="e.g. Hypertension"
                  className="w-full border rounded px-3 py-2 text-sm"
                />
              </div>

              {/* Medications */}
              <div className="space-y-4">
                <label className="block text-sm text-gray-700 font-medium">Medications</label>
                {form.medications.map((med, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Medication name"
                      value={med.name}
                      onChange={(e) => handleMedChange(index, 'name', e.target.value)}
                      className="border rounded px-3 py-2 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Dosage (e.g. 10mg)"
                      value={med.dosage}
                      onChange={(e) => handleMedChange(index, 'dosage', e.target.value)}
                      className="border rounded px-3 py-2 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Frequency (e.g. Twice daily)"
                      value={med.frequency}
                      onChange={(e) => handleMedChange(index, 'frequency', e.target.value)}
                      className="border rounded px-3 py-2 text-sm"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addMedication}
                  className="text-blue-600 text-sm hover:underline"
                >
                  + Add another medication
                </button>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#4f91a6] hover:bg-[#3a7386] text-white px-4 py-2 rounded text-sm"
                >
                  Submit Prescription
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
