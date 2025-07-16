import React from 'react';
import PharmacistSidebar from '../../components/PharmacistSidebar';
import PharmacistTopbar from '../../components/PharmacistTopbar';
import { ClipboardList, History, Package, User } from 'lucide-react';

export default function PharmacistDashboard() {
  const cards = [
    {
      label: 'Total Prescriptions',
      value: 132,
      icon: <ClipboardList className="text-blue-500" size={24} />,
    },
    {
      label: 'Completed Orders',
      value: 98,
      icon: <History className="text-green-500" size={24} />,
    },
    {
      label: 'Inventory Items',
      value: 45,
      icon: <Package className="text-yellow-500" size={24} />,
    },
    {
      label: 'Registered Patients',
      value: 65,
      icon: <User className="text-purple-500" size={24} />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <PharmacistSidebar active="Dashboard" />
      <div className="flex-1 flex flex-col">
        <PharmacistTopbar/>

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Pharmacist Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Overview</span>
          </nav>
        </div>

        {/* Cards */}
        <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 flex items-center gap-4"
            >
              <div className="bg-blue-50 rounded-full p-3">{card.icon}</div>
              <div>
                <div className="text-xl font-semibold text-gray-800">{card.value}</div>
                <div className="text-sm text-gray-500">{card.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
