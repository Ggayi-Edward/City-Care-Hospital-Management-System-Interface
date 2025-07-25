
import React from 'react';
import { Home, CalendarDays, FileText, RefreshCw, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo';

export default function PatientSidebar({ active = '' }) {
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', icon: <Home size={16} />, to: '/patient/dashboard' },
    { label: 'Book Appointment', icon: <CalendarDays size={16} />, to: '/patient/book' },
    { label: 'Appointment History', icon: <RefreshCw size={16} />, to: '/patient/history' },
    { label: 'Medical History', icon: <FileText size={16} />, to: '/patient/records' },
  ];


  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/landingpage/citycare');
  };

  return (
    <aside className="w-64 h-screen sticky top-0 bg-gradient-to-b from-[#4f91a6] to-[#3a7386] text-white flex flex-col shadow-xl overflow-y-auto">

      {/* Header */}
      {/* Header */}
      <div className="px-8 py-8 border-b border-white/10">
        <div className="text-center">
          <Logo center />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-0 py-6 overflow-hidden">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = active === item.label;
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.to)}
                className={`relative flex items-center gap-3 w-full px-6 py-3.5 text-left transition-all duration-300 ease-in-out
                  ${isActive
                    ? 'bg-white/25 text-white font-semibold shadow-md'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'}
              `}
              >
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-r"></span>
                )}
                <div className="flex-shrink-0">{item.icon}</div>
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Logout button (always highlighted, but no white bar) */}
      <div className="mt-auto w-full overflow-hidden">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-6 py-3.5 bg-white/25 text-white font-semibold shadow-md transition-colors duration-200 hover:bg-white/30"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
