// src/components/ReceptionistTopbar.jsx
import React from 'react';

export default function ReceptionistTopbar({ user }) {
  return (
    <div className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold text-gray-700">Receptionist Dashboard</h1>
      <div className="text-sm text-gray-600">Logged in as <span className="font-medium text-blue-600">{user?.name}</span></div>
    </div>
  );
}
