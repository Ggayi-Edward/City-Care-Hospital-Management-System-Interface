import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';
import AdminTopBar from '../../components/AdminTopbar';
import ReportTabs from '../../components/ReportTabs';

export default function AdminStaffPerformanceReport() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleRefresh = () => {
    setSearch('');
    setFromDate('');
    setToDate('');
  };

  return (
    <div className="flex h-screen bg-gray-100 font-roboto">
      <AdminSidebar active="System Settings" />

      <div className="flex-1 flex flex-col">
        <AdminTopBar user={{ name: 'Lexy' }} />

        {/* Breadcrumbs */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <BreadcrumbButton label="Admin Dashboard" to="/admin/dashboard" navigate={navigate} />
            <span>/</span>
            <BreadcrumbButton label="Reports Dashboard" to="/admin/reports" navigate={navigate} />
            <span>/</span>
            <span className="text-gray-500">Staff Performance Report</span>
          </nav>
        </div>

        {/* Reports Content */}
        <div className="p-8 space-y-6">
          {/* Filter Row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                placeholder="Search Staff"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border pl-9 pr-3 py-1 rounded text-sm"
              />
            </div>

            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border px-3 py-1 rounded text-sm"
            />

            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border px-3 py-1 rounded text-sm"
            />

            <button className="bg-[#4f91a6] text-white px-4 py-1 rounded text-sm hover:bg-[#3a7386]">
              Apply Filters
            </button>
            <button onClick={handleRefresh} className="border px-4 py-1 rounded text-sm">
              Refresh
            </button>
          </div>

          {/* Report Tabs */}
          <ReportTabs search={search} fromDate={fromDate} toDate={toDate} />

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChartCard title="Task Completion Rate" />
            <ChartCard title="Attendance Record" />
            <ChartCard title="Performance Score Trends" />
          </div>

          {/* Summary & Export */}
          <div className="flex justify-between items-center border-t pt-4 text-sm text-gray-600">
            <div>
              <strong>Top Performer:</strong> John Doe | <strong>Avg. Completion:</strong> 92% | <strong>Attendance:</strong> 98%
            </div>
            <div className="space-x-2">
              <button className="bg-[#4f91a6] text-white px-3 py-1 rounded hover:bg-[#3a7386]">Export PDF</button>
              <button className="bg-[#4f91a6] text-white px-3 py-1 rounded hover:bg-[#3a7386]">Export Excel</button>
            </div>
          </div>

          {/* Timestamp */}
          <p className="text-xs text-right text-gray-500">Data updated as of 02:04 PM EAT, June 26, 2025</p>
        </div>
      </div>
    </div>
  );
}

function BreadcrumbButton({ label, to, navigate }) {
  return (
    <button onClick={() => navigate(to)} className="hover:underline text-blue-600">
      {label}
    </button>
  );
}

function ChartCard({ title }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">{title}</h4>
      <div className="h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
        Chart Placeholder
      </div>
    </div>
  );
}
