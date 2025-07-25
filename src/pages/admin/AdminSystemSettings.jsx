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
    <div className="flex h-screen bg-gray-100 font-roboto overflow-hidden">
      <AdminSidebar active="System Settings" />

      <div className="flex-1 flex flex-col overflow-y-auto">
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
          <div className="bg-white rounded-lg shadow-md p-8 mt-6 w-full">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Hospital Details</h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-semibold mb-1">Hospital Name</label>
                <input
                  type="text"
                  placeholder="Enter hospital name"
                  className="w-full border border-gray-300 px-4 py-2 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <p className="text-red-500 text-xs mt-1">Hospital name is required</p>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-semibold mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Enter address"
                  className="w-full border border-gray-300 px-4 py-2 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Contact Number</label>
                <input
                  type="text"
                  placeholder="Enter contact number"
                  className="w-full border border-gray-300 px-4 py-2 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-gray-300 px-4 py-2 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-8">
              <button className="border border-blue-500 text-blue-600 px-5 py-2.5 rounded hover:bg-blue-50 transition">
                Cancel
              </button>
              <button className="bg-green-600 text-white px-5 py-2.5 rounded hover:bg-green-700 transition">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


