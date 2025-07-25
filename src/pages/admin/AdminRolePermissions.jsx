import React from 'react';
import {
  Users,
  Settings,
  BarChart,
  FileText,
  LogOut,
  Home,
  Bell,
  UserCircle
} from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminTopBar from '../../components/AdminTopbar';
import { useNavigate } from 'react-router-dom';
import SettingsTabs from '../../components/SettingsTabs';

export default function AdminRolePermissions() {
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
            <button onClick={() => navigate('/admin/system settings')} className="hover:underline text-blue-600">System Settings</button>
            <span>/</span>
            <span className="text-gray-500">Role Permissions</span>
          </nav>
        </div>

        {/* Settings Tabs */}
        <div className="px-8 pt-4">
        <SettingsTabs />

          {/* Permissions Form */}
          <div className="bg-white shadow rounded-md p-6">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Default Role for New Users</label>
              <input type="text" className="border rounded w-full px-3 py-2 text-sm" placeholder="Select default role" />
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm text-black">
              <div>
                <h3 className="font-bold mb-2">Admin Permissions</h3>
                <ul className="space-y-1">
                  <li>Manage Users (create, edit, delete users)</li>
                  <li>Manage Resources (add, edit, delete resources)</li>
                  <li>Generate Reports (create, view, download reports)</li>
                  <li>Edit System Settings (modify hospital details, hours, permissions)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Doctor Permissions</h3>
                <ul className="space-y-1">
                  <li>View Patients (access patient list and details)</li>
                  <li>Schedule Appointments (book appointments for patients)</li>
                  <li>Prescribe Medication (create prescriptions)</li>
                  <li>Order Tests (request lab/imaging tests)</li>
                  <li>Edit Medical Records (update medical history, notes)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Receptionist Permissions</h3>
                <ul className="space-y-1">
                  <li>Manage Appointments (view, book, cancel appointments)</li>
                  <li>Register Patients (add new patients)</li>
                  <li>View Patient Basic Info (access limited patient details)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Pharmacist Permissions</h3>
                <ul className="space-y-1">
                  <li>Manage Prescriptions (view, fill, cancel prescriptions)</li>
                  <li>Manage Inventory (add, edit, delete medication stock)</li>
                  <li>View Patient Prescription History (access limited prescription details)</li>
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end space-x-2">
              <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">Reset</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">Save Permissions</button>
            </div>
          </div>

          {/* Permissions Summary */}
          <div className="bg-white shadow rounded-md p-4 text-sm text-gray-700">
            <span className="font-semibold text-blue-700">Permissions Summary:</span> Admins: 4/4 permissions enabled | Doctors: 5/5 permissions enabled | Receptionists: 3/3 permissions enabled | Pharmacists: 3/3 permissions enabled
          </div>
        </div>
      </div>
    </div>
  );
}
