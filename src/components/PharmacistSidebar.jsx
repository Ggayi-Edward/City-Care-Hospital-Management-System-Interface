import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  ClipboardList,
  History,
  Package,
  LogOut,
} from 'lucide-react';
import Logo from './logo';

export default function PharmacistSidebar({ active = '' }) {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', icon: <Home size={16} />, to: '/pharmacist/dashboard' },
    { label: 'Manage Prescriptions', icon: <ClipboardList size={16} />, to: '/pharmacist/prescriptions' },
    { label: 'View Prescription History', icon: <History size={16} />, to: '/pharmacist/history' },
    { label: 'Manage Inventory', icon: <Package size={16} />, to: '/pharmacist/inventory' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/pharmacist/login');
  };

  return (
    <aside className="w-64 bg-[#4f91a6] text-white flex flex-col px-6 pt-12">
      <div className="mb-10 text-center">
        <Logo center />
      </div>

      <nav className="flex flex-col gap-4 text-sm font-medium">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.to)}
            className={`flex items-center gap-3 p-2 rounded ${
              active === item.label ? 'bg-[#3a7386]' : 'hover:bg-[#3a7386]'
            }`}
          >
            {item.icon} {item.label}
          </button>
        ))}

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 hover:bg-red-500 text-red-100 mt-auto p-2 rounded"
        >
          <LogOut size={16} /> Logout
        </button>
      </nav>
    </aside>
  );
}
