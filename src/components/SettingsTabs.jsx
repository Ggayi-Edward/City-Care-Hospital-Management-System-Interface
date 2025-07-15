// components/admin/SettingsTabs.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SettingsTabs() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tabs = [
    { label: 'Hospital Details', path: '/admin/settings' },
    { label: 'Operating Hours', path: '/admin/settings/operating-hours' },
    { label: 'Role Permissions', path: '/admin/settings/role-permissions' },
  ];

  return (
    <div className="flex gap-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => navigate(tab.path)}
          className={`px-4 py-2 rounded border text-sm ${
            pathname === tab.path
              ? 'bg-[#4f91a6] text-white'
              : 'bg-white text-black'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
