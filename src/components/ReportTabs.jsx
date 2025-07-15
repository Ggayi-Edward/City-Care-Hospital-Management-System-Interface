import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ReportTabs() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tabs = [
    { label: 'Patient Statistics', path: '/admin/reports/' },
    { label: 'Financial Report', path: '/admin/reports/financial' },
    { label: 'Staff Performance', path: '/admin/reports/staff-performance' },
  ];

  return (
    <div className="flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => navigate(tab.path)}
          className={`px-4 py-2 rounded text-sm ${
            pathname === tab.path ? 'bg-[#4f91a6] text-white' : 'bg-white border'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
