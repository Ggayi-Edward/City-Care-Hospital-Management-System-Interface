import React, { useState } from 'react';
import PatientSidebar from '../../components/PatientSidebar';
import PatientTopbar from '../../components/PatientTopbar';
import { CalendarDays } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const availability = {
  'Dr. Smith': {
    availableDays: [1, 3, 5], // Mon, Wed, Fri
    timeSlots: ['09:00 AM', '10:00 AM', '2:00 PM'],
  },
  'Dr. Adams': {
    availableDays: [2, 4], // Tue, Thu
    timeSlots: ['11:00 AM', '1:00 PM'],
  },
  'Dr. Green (Cardiologist)': {
    availableDays: [1, 2], // Mon, Tue
    timeSlots: ['10:00 AM', '3:00 PM'],
  },
  'Dr. Blue (Dermatologist)': {
    availableDays: [3, 5], // Wed, Fri
    timeSlots: ['09:30 AM', '1:30 PM'],
  },
};

const isDayAvailable = (doctor, date) => {
  if (!doctor || !availability[doctor]) return true;
  const available = availability[doctor].availableDays;
  return available.includes(date.getDay());
};

export default function PatientBookAppointment() {
  const [activeTab, setActiveTab] = useState('general');
  const [message, setMessage] = useState('');

  const [generalForm, setGeneralForm] = useState({
    date: null,
    time: '',
    doctor: '',
    reason: '',
  });

  const [specialistForm, setSpecialistForm] = useState({
    date: null,
    time: '',
    doctor: '',
    reason: '',
  });

  const handleChange = (form, setForm, field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e, form, setForm) => {
    e.preventDefault();
    const { date, time, doctor, reason } = form;
    if (!date || !time || !doctor || !reason) {
      setMessage('Please fill out all fields.');
      return;
    }
    setMessage(`Your ${activeTab} appointment has been booked.`);
    setForm({ date: null, time: '', doctor: '', reason: '' });
  };

  const renderForm = (form, setForm, type) => {
    const doctorOptions = type === 'general'
      ? ['Dr. Smith', 'Dr. Adams']
      : ['Dr. Green (Cardiologist)', 'Dr. Blue (Dermatologist)'];

    const timeSlots = availability[form.doctor]?.timeSlots || [];

    return (
      <form
        onSubmit={(e) => handleSubmit(e, form, setForm)}
        className={`bg-white p-6 rounded shadow space-y-4 ${activeTab !== type && 'hidden md:block'}`}
      >
        <h3 className="text-lg font-bold flex items-center gap-2">
          <CalendarDays /> {type === 'general' ? 'General Consultation' : 'Specialist Consultation'}
        </h3>

        {message && activeTab === type && (
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded text-sm">{message}</div>
        )}

        <select
          name="doctor"
          value={form.doctor}
          onChange={(e) => handleChange(form, setForm, 'doctor', e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
        >
          <option value="">Select Doctor</option>
          {doctorOptions.map((doc) => (
            <option key={doc} value={doc}>{doc}</option>
          ))}
        </select>

        <DatePicker
          selected={form.date}
          onChange={(date) => handleChange(form, setForm, 'date', date)}
          filterDate={(date) => isDayAvailable(form.doctor, date)}
          placeholderText="Select available date"
          minDate={new Date()}
          className="w-full border rounded px-3 py-2 text-sm"
        />

        <select
          name="time"
          value={form.time}
          onChange={(e) => handleChange(form, setForm, 'time', e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
        >
          <option value="">Select Time</option>
          {timeSlots.map((slot, idx) => (
            <option key={idx} value={slot}>{slot}</option>
          ))}
        </select>

        <textarea
          name="reason"
          rows="3"
          placeholder="Reason for consultation"
          value={form.reason}
          onChange={(e) => handleChange(form, setForm, 'reason', e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm"
        />

        <button
          type="submit"
          className="bg-[#4f91a6] hover:bg-[#3a7386] text-white px-4 py-2 rounded text-sm"
        >
          Book Appointment
        </button>
      </form>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <PatientSidebar active="Book Appointment" />
      <div className="flex-1 flex flex-col">
        <PatientTopbar user={{ name: 'Lexy', role: 'Patient' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Patient Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Book Appointment</span>
          </nav>
        </div>

        {/* Tabs */}
        <div className="px-8 pt-4">
          <div className="flex space-x-4 border-b mb-6">
            <button
              onClick={() => { setActiveTab('general'); setMessage(''); }}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'general' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'
              }`}
            >
              General Consultation
            </button>
            <button
              onClick={() => { setActiveTab('specialist'); setMessage(''); }}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'specialist' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'
              }`}
            >
              Specialist Consultation
            </button>
          </div>

          {/* Forms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderForm(generalForm, setGeneralForm, 'general')}
            {renderForm(specialistForm, setSpecialistForm, 'specialist')}
          </div>
        </div>
      </div>
    </div>
  );
}
