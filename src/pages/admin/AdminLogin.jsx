import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Side Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('/login-image.jpg')` }}
      ></div>

      {/* Right Side Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-[#4f91a6] px-6 py-12">
        <div className="w-full max-w-md text-white">
          {/* Branding */}
          <div className="mb-10 text-center">
            <h1 className="text-5xl font-extrabold">
              City<span className="text-blue-200">Care</span>
            </h1>
          </div>

          <h2 className="text-xl font-semibold mb-8 text-center">
            Login to City Care HMS
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 text-sm text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 text-sm text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <div className="text-right mt-1 text-sm">
                <Link to="/admin/forgot-password" className="text-white hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-1/2 mx-auto py-2 bg-white text-[#4f91a6] font-semibold rounded-md shadow 
                           hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 
                           flex justify-center items-center"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
