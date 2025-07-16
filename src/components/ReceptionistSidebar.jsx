import React from 'react';
import { Home, FilePenLine, CalendarPlus, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo';

export default function ReceptionistSidebar({ active = '' }) {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', icon: <Home size={16} />, to: '/receptionist/dashboard' },
    { label: 'Register patients', icon: <FilePenLine size={16} />, to: '/receptionist/register' },
    { label: 'Book appointment', icon: <CalendarPlus size={16} />, to: '/receptionist/book' },
    
  ];

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/admin/login');
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