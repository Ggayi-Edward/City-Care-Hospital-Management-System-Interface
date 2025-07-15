import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    alert('Password reset link sent!');
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen font-sans bg-[#4f91a6]">
      {/* Left Side Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('/login-image.jpg')` }}
      ></div>

      {/* Right Side Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 py-12">
        <div className="w-full max-w-md text-white">
          {/* Branding */}
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-extrabold">
              City<span className="text-blue-200">Care</span>
            </h1>
          </div>

          <h2 className="text-xl font-semibold mb-8 text-center">
            Reset Your Password
          </h2>

          <form onSubmit={handleReset} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 text-sm text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-1/2 mx-auto py-2 bg-white text-[#4f91a6] font-semibold rounded-md shadow 
                           hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 
                           flex justify-center items-center"
              >
                Send Reset Link
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm">
            Remembered your password?{' '}
            <a href="/admin/login" className="font-semibold text-white hover:underline">
              Back to Login
            </a>
        
          </p>
        </div>
      </div>
    </div>
  );
}
