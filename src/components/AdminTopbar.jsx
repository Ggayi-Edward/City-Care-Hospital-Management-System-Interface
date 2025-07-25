import React from 'react';
import { Bell, UserCircle } from 'lucide-react';

export default function PatientTopBar({ title = 'City Care', user = { name: 'Admin' } }) {
  return (
    <header className="bg-gradient-to-r from-[#b4d3e0] via-[#a8cad8] to-[#9cc4d4] px-8 py-5 flex items-center border-b border-white/30 shadow-lg backdrop-blur-sm relative">
      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-white text-4xl font-bold font-belanosima drop-shadow-lg tracking-wide">
        {title}
      </h2>
      
      <div className="ml-auto flex items-center gap-6 text-white">
        {/* Notification Bell */}
        <button className="p-2.5 rounded-full hover:bg-white/25 active:bg-white/30 transition-all duration-200 relative group">
          <Bell size={22} className="group-hover:scale-110 transition-transform duration-200" />
        </button>
        
        {/* User Info */}
        <div className="text-right">
          <p className="font-semibold text-base leading-tight">{user.name}</p>
          <p className="text-sm opacity-80 font-medium">Admin</p>
        </div>
        
        {/* User Avatar */}
        <button className="p-2 rounded-full hover:bg-white/25 active:bg-white/30 transition-all duration-200 group">
          <UserCircle size={28} className="group-hover:scale-105 transition-transform duration-200" />
        </button>
      </div>
    </header>
  );
}