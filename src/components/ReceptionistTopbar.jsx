import React from 'react';
import { Bell, UserCircle } from 'lucide-react';

export default function ReceptionistTopbar({ user }) {
  return (
    <header className="bg-[#b4d3e0] px-6 py-4 flex items-center border-b border-gray-300 relative">
      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold font-belanosima">
        City Care
      </h2>
      <div className="ml-auto flex items-center gap-4 text-white">
        <Bell />
        <div className="text-right text-sm">
          <p className="font-semibold">{user.name}</p>
          <p className="text-xs">Receptionist</p>
        </div>
        <UserCircle />
      </div>
    </header>
  );
}