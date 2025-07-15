import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Settings,
  BarChart,
  FileText,
  LogOut,
  Home,
  Bell,
  UserCircle,
} from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminTopBar from '../../components/AdminTopbar';
import SettingsTabs from '../../components/SettingsTabs';

export default function AdminSystemSettings() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100 font-roboto">
      <AdminSidebar active="System Settings" />
      
            <div className="flex-1 flex flex-col">
              <AdminTopBar user={{ name: 'Lexy' }} />
        {/* Breadcrumbs */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <button onClick={() => navigate('/admin/dashboard')} className="hover:underline text-blue-600">Admin Dashboard</button>
            <span>/</span>
            <button onClick={() => navigate('/admin/reports')} className="hover:underline text-blue-600">Reports Dashboard</button>
            <span>/</span>
            <span className="text-gray-500">System Settings</span>
          </nav>
        </div>

        {/* Settings Tabs */}
        <div className="px-8 pt-4">
          <SettingsTabs />

          {/* Form Section */}
          <div className="bg-white rounded shadow p-6 max-w-3xl">
            <h3 className="text-lg font-bold mb-4">Hospital Details</h3>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Hospital Name</label>
              <input
                type="text"
                placeholder="Enter hospital name"
                className="w-full border px-4 py-2 rounded text-sm"
              />
              <p className="text-red-500 text-xs mt-1">Hospital name is required</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Address</label>
              <input
                type="text"
                placeholder="Enter address"
                className="w-full border px-4 py-2 rounded text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Contact Number</label>
              <input
                type="text"
                placeholder="Enter contact number"
                className="w-full border px-4 py-2 rounded text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border px-4 py-2 rounded text-sm"
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded text-sm">Cancel</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
