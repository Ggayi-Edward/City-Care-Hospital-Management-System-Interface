import React from 'react';
import PharmacistSidebar from '../../components/PharmacistSidebar';
import PharmacistTopbar from '../../components/PharmacistTopbar';
import { ClipboardList, History, Package, User } from 'lucide-react';

export default function PharmacistDashboard() {
  const cards = [
    {
      label: 'Total Prescriptions',
      value: 132,
      icon: ClipboardList,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      label: 'Completed Orders',
      value: 98,
      icon: History,
      color: 'text-green-600 bg-green-100',
    },
    {
      label: 'Inventory Items',
      value: 45,
      icon: Package,
      color: 'text-yellow-600 bg-yellow-100',
    },
    {
      label: 'Registered Patients',
      value: 65,
      icon: User,
      color: 'text-purple-600 bg-purple-100',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <PharmacistSidebar active="Dashboard" />
      <div className="flex-1 flex flex-col">
        <PharmacistTopbar />

        {/* Breadcrumb */}
        <div className="px-8 pt-6 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-semibold">Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Overview</span>
          </nav>
        </div>

        {/* Title */}
        <div className="px-8 pt-2 pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Pharmacist Dashboard</h1>
        </div>

        {/* Cards */}
        <div className="px-8 pb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6"
            >
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-full ${card.color}`}>
                  <card.icon size={28} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">{card.value}</div>
                  <div className="text-sm text-gray-500">{card.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
