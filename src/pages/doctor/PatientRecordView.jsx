import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorTopbar from '../../components/DoctorTopbar';
import { ArrowLeft } from 'lucide-react';

const mockPatientData = [
  { id: 1, name: 'John Doe', age: 45, gender: 'Male', lastVisit: '2025-06-30', diagnosis: 'Hypertension', notes: 'Blood pressure was 150/95. Recommended lifestyle changes and medication.' },
  { id: 2, name: 'Jane Smith', age: 52, gender: 'Female', lastVisit: '2025-06-28', diagnosis: 'Diabetes', notes: 'Blood sugar levels high. Adjusted insulin dosage.' },
  { id: 3, name: 'Michael Brown', age: 36, gender: 'Male', lastVisit: '2025-06-25', diagnosis: 'Asthma', notes: 'Prescribed inhaler. Advised to avoid allergens.' },
  { id: 4, name: 'Emily Johnson', age: 29, gender: 'Female', lastVisit: '2025-06-20', diagnosis: 'Allergy', notes: 'Seasonal allergy. Prescribed antihistamines.' },
  { id: 5, name: 'Daniel Lee', age: 63, gender: 'Male', lastVisit: '2025-06-18', diagnosis: 'Arthritis', notes: 'Pain in joints. Suggested physiotherapy and painkillers.' },
];

export default function PatientRecordView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const patient = mockPatientData.find((p) => p.id === parseInt(id));

  if (!patient) {
    return (
      <div className="p-8 text-center text-gray-600 text-lg">
        Patient record not found.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <DoctorSidebar active="Patient Records" />
      <div className="flex-1 flex flex-col">
        <DoctorTopbar user={{ name: 'Dr. Smith', role: 'Doctor' }} />

        <div className="px-8 pt-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ArrowLeft
              className="cursor-pointer text-gray-600 hover:text-gray-800"
              onClick={() => navigate(-1)}
            />
            <h2 className="text-lg font-semibold text-gray-700">
              Patient Record: {patient.name}
            </h2>
          </div>
        </div>

        <div className="px-8 py-6">
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <p className="text-gray-800">{patient.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Age</label>
                <p className="text-gray-800">{patient.age}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Gender</label>
                <p className="text-gray-800">{patient.gender}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Last Visit</label>
                <p className="text-gray-800">{patient.lastVisit}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Diagnosis</label>
                <p className="text-gray-800">{patient.diagnosis}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600">Doctor's Notes</label>
                <p className="text-gray-800">{patient.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
