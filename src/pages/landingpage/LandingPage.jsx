import React, { useState, useEffect } from 'react';
import Logo from '../../components/logo';
import {
  Shield,
  UserCheck,
  Heart,
  Phone,
  Pill,
  Calendar,
  Award,
  Users,
  Clock,
  ArrowRight,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function LandingPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeRole, setActiveRole] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRoleClick = (route) => {
    navigate(route);   
  };
  const roles = [
    {
      name: 'Admin',
      route: '/admin/login',
      icon: Shield,
      description: 'System administration and management',
      bgColor: 'from-purple-500 to-purple-700',
      hoverBgColor: 'from-purple-600 to-purple-800',
      cardAccent: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      name: 'Doctor',
      route: '/doctor/login',
      icon: UserCheck,
      description: 'Patient care and medical consultations',
      bgColor: 'from-[#4f91a6] to-blue-600',
      hoverBgColor: 'from-blue-600 to-blue-700',
      cardAccent: 'bg-gradient-to-br from-[#4f91a6] to-blue-600'
    },
    {
      name: 'Patient',
      route: '/patient/login',
      icon: Heart,
      description: 'Access your health records and appointments',
      bgColor: 'from-green-500 to-emerald-600',
      hoverBgColor: 'from-green-600 to-emerald-700',
      cardAccent: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      name: 'Receptionist',
      route: '/receptionist/login',
      icon: Phone,
      description: 'Appointment scheduling and front desk',
      bgColor: 'from-orange-500 to-red-500',
      hoverBgColor: 'from-orange-600 to-red-600',
      cardAccent: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      name: 'Pharmacist',
      route: '/pharmacist/login',
      icon: Pill,
      description: 'Medication management and prescriptions',
      bgColor: 'from-teal-500 to-cyan-600',
      hoverBgColor: 'from-teal-600 to-cyan-700',
      cardAccent: 'bg-gradient-to-br from-teal-500 to-cyan-600'
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intelligent appointment booking with automated reminders"
    },
    {
      icon: Award,
      title: "Quality Care",
      description: "Certified healthcare professionals with excellent track records"
    },
    {
      icon: Users,
      title: "Comprehensive Network",
      description: "Connected healthcare ecosystem for seamless care coordination"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Round-the-clock access to your health information and services"
    }
  ];

  const stats = [
    { number: "50K+", label: "Patients Served" },
    { number: "200+", label: "Healthcare Providers" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.8/5", label: "Patient Rating" }
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-[#4f91a6]/5 to-blue-50">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-[#4f91a6] to-[#3a7386] text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-4">
          <div className="flex items-center justify-between h-16">
            <Logo center />
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-200">
                Services
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-200">
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f91a6]/10 via-blue-500/5 to-teal-500/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#4f91a6]/30 to-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-[#4f91a6]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-20">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-[#4f91a6] via-blue-600 to-teal-600 bg-clip-text text-transparent">City Care</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                Your comprehensive healthcare management platform. Connecting patients, providers, and care teams for better health outcomes.
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4f91a6] to-teal-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Role Selection */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Role</h2>
              <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Choose your role to access your personalized dashboard and tools designed specifically for your needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {roles.map((role, index) => {
                  const Icon = role.icon;
                  return (
                    <div
                      key={role.name}
                      className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${
                        activeRole === index ? 'scale-105 shadow-2xl' : ''
                      }`}
                      onMouseEnter={() => setActiveRole(index)}
                      onMouseLeave={() => setActiveRole(null)}
                    >
                      <div className={`absolute inset-0 ${role.cardAccent} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                      <div className={`w-16 h-16 ${role.cardAccent} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${role.bgColor} bg-clip-text text-transparent mb-3`}>{role.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{role.description}</p>
                      <button
                        onClick={() => handleRoleClick(role.route)}
                         className={`w-48 bg-gradient-to-r ${role.bgColor} hover:${role.hoverBgColor} text-white font-semibold py-2.5 px-14 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform hover:scale-105 active:scale-95`}
                      >
                        Access {role.name} Portal
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 bg-gradient-to-r from-white via-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-[#4f91a6] to-teal-600 bg-clip-text text-transparent mb-4">
              Why Choose City Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience healthcare management that's designed around you, with cutting-edge technology and compassionate care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = [
                'from-blue-500 to-[#4f91a6]',
                'from-green-500 to-emerald-600',
                'from-purple-500 to-violet-600',
                'from-orange-500 to-red-500'
              ];
              return (
                <div key={index} className="group text-center p-6 rounded-2xl hover:bg-white/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#4f91a6] to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#4f91a6] to-teal-400 bg-clip-text text-transparent">City Care</div>
              </div>
              <p className="text-gray-400 max-w-md">
                Providing comprehensive healthcare management solutions that connect patients, providers, and care teams for better health outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#4f91a6]">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">Services</button></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">Contact</button></li>
                <li><button onClick={() => alert('Privacy Policy clicked')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-teal-400">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#4f91a6]" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-[#4f91a6]" />
                  <span>info@citycare.com</span>
                </li>
                <li>
                  123 Healthcare Ave<br />
                  Medical District, MC 12345
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} City Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
