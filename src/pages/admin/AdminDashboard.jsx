import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BarChart, CreditCard } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminTopBar from '../../components/AdminTopbar';

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100 font-roboto">
      <AdminSidebar active="Dashboard" />

      <div className="flex-1 flex flex-col">
        <AdminTopBar user={{ name: 'Lexy' }} />

        {/* Breadcrumbs */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="hover:underline text-blue-600"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-gray-500">Dashboard</span>
          </nav>
        </div>

        {/* Dashboard Overview */}
        <div className="p-8 space-y-8">
          <h3 className="text-xl font-semibold text-gray-700">Welcome back, Lexy!</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <h4 className="text-gray-500 text-sm">Total Users</h4>
              <p className="text-3xl font-bold text-gray-800 mt-2">1,245</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <h4 className="text-gray-500 text-sm">Reports Generated</h4>
              <p className="text-3xl font-bold text-gray-800 mt-2">320</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <h4 className="text-gray-500 text-sm">Active Sessions</h4>
              <p className="text-3xl font-bold text-gray-800 mt-2">57</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              onClick={() => navigate('/admin/users')}
              className="cursor-pointer bg-white rounded shadow p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <Users className="text-[#4f91a6]" size={36} />
              <div>
                <h4 className="font-bold text-gray-800">User Management</h4>
                <p className="text-sm text-gray-600">Manage users and their permissions.</p>
              </div>
            </div>

            <div
              onClick={() => navigate('/admin/reports')}
              className="cursor-pointer bg-white rounded shadow p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <BarChart className="text-[#12345a]" size={36} />
              <div>
                <h4 className="font-bold text-gray-800">Reports</h4>
                <p className="text-sm text-gray-600">View and generate reports</p>
              </div>
            </div>

            <div
              onClick={() => navigate('/admin/billing')}
              className="cursor-pointer bg-white rounded shadow p-6 flex items-start gap-4 hover:shadow-lg transition"
            >
              <CreditCard className="text-purple-400" size={36} />
              <div>
                <h4 className="font-bold text-gray-800">Billing</h4>
                <p className="text-sm text-gray-600">View billing</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded shadow p-5">
              <h5 className="font-bold text-gray-800 mb-2">Recent Activity</h5>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✅ New user added: Dr. Smith</li>
                <li>📥 Report generated: Financial Q2</li>
                <li>🔒 Password updated by admin</li>
              </ul>
            </div>

            <div className="bg-white rounded shadow p-5">
              <h5 className="font-bold text-gray-800 mb-2">System Stats</h5>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>📊 85% Server Uptime</li>
                <li>🧾 12 Pending Approvals</li>
                <li>⚙️ Last backup: 2025-07-10</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
