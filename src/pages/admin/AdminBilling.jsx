import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminTopBar from '../../components/AdminTopbar';
import DataTable from '../../components/Table';

export default function AdminBilling() {
  const navigate = useNavigate();

  const columns = [
    { label: 'Invoice ID', key: 'invoiceId' },
    { label: 'Patient Name', key: 'patientName' },
    { label: 'Amount', key: 'amount' },
    { label: 'Date Issued', key: 'dateIssued' },
    { label: 'Status', key: 'status' },
  ];

  const rows = [
    { invoiceId: 'INV001', patientName: 'John Doe', amount: '$150.00', dateIssued: '2025-06-29', status: 'Pending' },
    { invoiceId: 'INV002', patientName: 'Jane Smith', amount: '$200.00', dateIssued: '2025-06-28', status: 'Paid' },
    { invoiceId: 'INV003', patientName: 'Mark Twain', amount: '$300.00', dateIssued: '2025-06-27', status: 'Overdue' },
    { invoiceId: 'INV004', patientName: 'Emma Brown', amount: '$250.00', dateIssued: '2025-06-26', status: 'Pending' },
  ];

  const statusColorMap = {
    Paid: 'text-green-600',
    Pending: 'text-yellow-600',
    Overdue: 'text-red-600',
  };

  return (
    <div className="flex h-screen bg-gray-100 font-roboto">
      <AdminSidebar active="Billing" />
      <div className="flex-1 flex flex-col">
        <AdminTopBar user={{ name: 'Lexy' }} />

        {/* Breadcrumbs */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <button onClick={() => navigate('/admin/dashboard')} className="hover:underline text-blue-600">Admin Dashboard</button>
            <span>/</span>
            <button onClick={() => navigate('/admin/reports')} className="hover:underline text-blue-600">Reports Dashboard</button>
            <span>/</span>
            <span className="text-gray-500">Billing</span>
          </nav>
        </div>

        {/* Filter & Actions */}
        <div className="p-8">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <input type="date" className="border rounded px-3 py-1 text-sm" />
              
              <select className="border rounded px-3 py-1 text-sm">
                <option value="">All Statuses</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>
              <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                Apply Filters
              </button>
            </div>

            <button className="bg-[#4f91a6] text-white px-4 py-1 rounded text-sm flex items-center gap-2 hover:bg-[#3a7386]">
              <Plus size={16} /> Create Invoice
            </button>
          </div>

          <DataTable columns={columns} rows={rows} statusColorMap={statusColorMap} />
        </div>
      </div>
    </div>
  );
}
