import React from 'react';
import {
  Users,
  Settings,
  BarChart,
  FileText,
  LogOut,
  Home,
  Bell,
  UserCircle,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';
import AdminTopBar from '../../components/AdminTopbar';
import SettingsTab from '../../components/SettingsTabs';

export default function AdminOperatingHours() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100 font-roboto overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar active="System Settings" />
      
            <div className="flex-1 flex flex-col">
              <AdminTopBar user={{ name: 'Lexy' }} />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Breadcrumbs */}
          <div className="px-8 pt-4 text-sm text-gray-600">
            <nav className="flex space-x-2 items-center">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="hover:underline text-blue-600"
              >
                Admin Dashboard
              </button>
              <span>/</span>
              <button
                onClick={() => navigate('/admin/settings')}
                className="hover:underline text-blue-600"
              >
                System Settings
              </button>
              <span>/</span>
              <span className="text-gray-500">Operating Hours</span>
            </nav>
          </div>

          {/* Settings Tabs */}
          <div className="px-8 pt-4">
            <SettingsTab />
          </div>

          {/* Content */}
          <div className="px-8 pt-6 space-y-6 pb-10">
            {/* General Hours */}
            <div className="bg-white rounded shadow p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                General Hours <span className="text-blue-600 text-sm">ℹ️</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Weekday Operating Hours (Mon-Fri)
                  </label>
                  <div className="flex gap-2">
                    <input className="border rounded px-2 py-1 w-full" placeholder="From" />
                    <input className="border rounded px-2 py-1 w-full" placeholder="To" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Weekend Operating Hours (Sat-Sun)
                  </label>
                  <div className="flex gap-2">
                    <input className="border rounded px-2 py-1 w-full" placeholder="From" />
                    <input className="border rounded px-2 py-1 w-full" placeholder="To" />
                  </div>
                </div>
                <div className="pt-6">
                  <label className="text-sm">on Emergency Services (24/7 Availability)</label>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button className="px-4 py-2 border rounded text-sm">Reset</button>
                <button className="px-4 py-2 bg-green-600 text-white rounded text-sm flex items-center gap-2">
                  <FileText size={16} /> Save General Hours
                </button>
              </div>
            </div>

            {/* Department-Specific Hours */}
            <div className="bg-white rounded shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Department-Specific Hours</h3>
                <button className="bg-[#256D85] text-white px-4 py-2 rounded text-sm flex items-center gap-2">
                  <Plus size={16} /> Add Department Hours
                </button>
              </div>
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100 text-left text-gray-700">
                  <tr>
                    <th className="py-3 px-4">Department</th>
                    <th className="py-3 px-4">Weekday Hours</th>
                    <th className="py-3 px-4">Weekend Hours</th>
                    <th className="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {['Cardiology', 'Radiology'].map((dept, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50 border-t'}>
                      <td className="py-3 px-4">{dept}</td>
                      <td className="py-3 px-4">: AM– : PM</td>
                      <td className="py-3 px-4">Closed</td>
                      <td className="py-3 px-4 flex gap-2">
                        <Edit className="text-blue-500 cursor-pointer" size={16} />
                        <Trash2 className="text-red-500 cursor-pointer" size={16} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Holiday Closures */}
            <div className="bg-white rounded shadow p-6">
              <h3 className="font-bold text-lg mb-2">Holiday Closures</h3>
              <p className="text-sm text-gray-600 mb-2">Holiday Closures (e.g., Dec 25, 2025: Closed)</p>
              <input
                type="text"
                className="border rounded px-3 py-2 w-full mb-4"
                placeholder="Enter holiday closure info"
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded text-sm flex items-center gap-2">
                <FileText size={16} /> Save Closures
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
