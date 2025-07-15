import React, { useState } from 'react';

export default function AddResourceForm({ onSave, onCancel }) {
  const [form, setForm] = useState({
    name: '',
    type: '',
    status: '',
    location: '',
    manufacturer: '',
    serialNumber: '',
    purchaseDate: '',
    maintenanceSchedule: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.type || !form.status) {
      alert('Please fill in the required fields.');
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Resource</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Resource Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Type *</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm"
              required
            >
              <option value="">Select Type</option>
              <option value="Equipment">Equipment</option>
              <option value="Room">Room</option>
              <option value="Tool">Tool</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Status *</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm"
              required
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="In Use">In Use</option>
              <option value="Out of Service">Out of Service</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Manufacturer</label>
            <input
              type="text"
              name="manufacturer"
              value={form.manufacturer}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Serial Number</label>
            <input
              type="text"
              name="serialNumber"
              value={form.serialNumber}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Purchase Date</label>
            <input
              type="date"
              name="purchaseDate"
              value={form.purchaseDate}
              onChange={handleChange}
              className="border rounded px-3 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Maintenance Schedule</label>
            <input
              type="text"
              name="maintenanceSchedule"
              value={form.maintenanceSchedule}
              onChange={handleChange}
              placeholder="e.g., Every 6 months"
              className="border rounded px-3 py-2 text-sm"
            />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border rounded text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#4f91a6] text-white rounded text-sm hover:bg-[#3a7386]"
            >
              Save Resource
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
