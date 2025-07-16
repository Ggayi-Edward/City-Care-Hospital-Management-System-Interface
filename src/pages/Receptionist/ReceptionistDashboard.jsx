import React, { useState } from 'react';
import ReceptionistSidebar from '../../components/ReceptionistSidebar';
import ReceptionistTopbar from '../../components/ReceptionistTopbar';

export default function ReceptionistDashboard() {
  const [activeTab, setActiveTab] = useState('register');
  const [message, setMessage] = useState('');

  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: '',
    dob: '',
  });

  const [appointmentForm, setAppointmentForm] = useState({
    patientName: '',
    doctor: '',
    date: '',
    time: '',
    reason: '',
  });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { fullName, phone, email, gender, dob } = registerForm;
    if (!fullName || !phone || !email || !gender || !dob) {
      setMessage('Please fill out all registration fields.');
      return;
    }
    setMessage('Patient successfully registered.');
    setRegisterForm({ fullName: '', phone: '', email: '', gender: '', dob: '' });
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    const { patientName, doctor, date, time, reason } = appointmentForm;
    if (!patientName || !doctor || !date || !time || !reason) {
      setMessage('Please fill out all appointment fields.');
      return;
    }
    setMessage('Appointment successfully booked.');
    setAppointmentForm({ patientName: '', doctor: '', date: '', time: '', reason: '' });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <ReceptionistSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setMessage={setMessage}
      />

      <div className="flex-1 flex flex-col">
        <ReceptionistTopbar user={{ name: 'Receptionist' }} />

        <div className="p-8 max-w-2xl mx-auto space-y-6">
          {message && (
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded text-sm">
              {message}
            </div>
          )}

          {activeTab === 'register' && (
            <form
              onSubmit={handleRegisterSubmit}
              className="space-y-4 bg-white p-6 rounded shadow"
            >
              <h2 className="text-lg font-bold text-gray-700">Register New Patient</h2>

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={registerForm.fullName}
                onChange={handleRegisterChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={registerForm.phone}
                onChange={handleRegisterChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={registerForm.email}
                onChange={handleRegisterChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <select
                name="gender"
                value={registerForm.gender}
                onChange={handleRegisterChange}
                className="w-full border rounded px-3 py-2 text-sm"
              >
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
              <input
                type="date"
                name="dob"
                value={registerForm.dob}
                onChange={handleRegisterChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />

              <button
                type="submit"
                className="bg-[#4f91a6] hover:bg-[#3a7386] text-white px-4 py-2 rounded text-sm"
              >
                Register Patient
              </button>
            </form>
          )}

          {activeTab === 'appointment' && (
            <form
              onSubmit={handleAppointmentSubmit}
              className="space-y-4 bg-white p-6 rounded shadow"
            >
              <h2 className="text-lg font-bold text-gray-700">Book Appointment</h2>

              <input
                type="text"
                name="patientName"
                placeholder="Patient Full Name"
                value={appointmentForm.patientName}
                onChange={handleAppointmentChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <select
                name="doctor"
                value={appointmentForm.doctor}
                onChange={handleAppointmentChange}
                className="w-full border rounded px-3 py-2 text-sm"
              >
                <option value="">Select Doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Adams">Dr. Adams</option>
              </select>
              <input
                type="date"
                name="date"
                value={appointmentForm.date}
                onChange={handleAppointmentChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <input
                type="time"
                name="time"
                value={appointmentForm.time}
                onChange={handleAppointmentChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />
              <textarea
                name="reason"
                placeholder="Reason for appointment"
                rows={3}
                value={appointmentForm.reason}
                onChange={handleAppointmentChange}
                className="w-full border rounded px-3 py-2 text-sm"
              />

              <button
                type="submit"
                className="bg-[#4f91a6] hover:bg-[#3a7386] text-white px-4 py-2 rounded text-sm"
              >
                Book Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
