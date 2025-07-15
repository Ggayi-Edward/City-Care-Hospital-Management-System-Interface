// src/components/Logo.jsx
import React from 'react';

export default function Logo({ center = false }) {
  return (
            <h1 className={`text-5xl font-extrabold font-belanosima pt-6 py-10 ${center ? 'text-center' : ''}`}>
        City<span className="text-blue-200">Care</span>
        </h1>

  );
}
