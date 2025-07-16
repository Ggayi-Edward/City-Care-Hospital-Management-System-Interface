import React, { useState } from 'react';
import ReceptionistSidebar from '../../components/ReceptionistSidebar';
import ReceptionistTopbar from '../../components/ReceptionistTopbar';

export default function RegisterPatient() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    contact: '',
    email: '',
    address: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, gender, dob, contact } = form;
    if (!firstName || !lastName || !gender || !dob || !contact) {
      setMessage('Please fill in all required fields.');
      return;
    }

    setMessage('Patient registered successfully!');
    setForm({
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      contact: '',
      email: '',
      address: '',
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <ReceptionistSidebar active="Register" />

      <div className="flex-1 flex flex-col">
        <ReceptionistTopbar user={{ name: 'Lexy', role: 'Receptionist' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Receptionist Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Register Patient</span>
          </nav>
        </div>

        {/* Form Section */}
        <div className="px-8 py-6">
          <div className="bg-white rounded shadow p-6 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Register New Patient</h2>

            {message && (
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 text-sm">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-gray-700">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700">Gender *</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-700">Contact Number *</label>
                <input
                  type="tel"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded text-sm"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm mb-1 text-gray-700">Address</label>
                <textarea
                  name="address"
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded text-sm"
                ></textarea>
              </div>

              <div className="md:col-span-2 text-right">
                <button
                  type="submit"
                  className="bg-[#4f91a6] hover:bg-[#3a7386] text-white px-6 py-2 rounded text-sm"
                >
                  Register Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
