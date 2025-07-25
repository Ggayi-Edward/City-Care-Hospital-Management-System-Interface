import React from 'react';
import DoctorSidebar from '../../components/DoctorSidebar';
import DoctorTopbar from '../../components/DoctorTopbar';
import { 
  CalendarDays, 
  FileText, 
  Stethoscope, 
  Clock, 
  Users, 
  Activity,
  TrendingUp,
  TrendingDown,
  Calendar,
  User,
  ArrowUpRight,
  Bell,
  Pill
} from 'lucide-react';

export default function DoctorDashboard() {
  const navigate = (path) => {
    window.location.href = path;
  };

  const stats = [
    {
      title: "Today's Appointments",
      value: '12',
      change: '+2 from yesterday',
      trend: 'up',
      icon: CalendarDays,
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Active Patients',
      value: '148',
      change: '+5 this week',
      trend: 'up',
      icon: Users,
      lightColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Prescriptions Issued',
      value: '23',
      change: '+3 today',
      trend: 'up',
      icon: Pill,
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Avg. Consultation Time',
      value: '18 min',
      change: '-2 min from last week',
      trend: 'down',
      icon: Clock,
      lightColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  const quickActions = [
    {
      title: 'Manage Appointments',
      description: 'View, schedule, and manage patient appointments',
      icon: CalendarDays,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      route: '/doctor/appointments',
      badge: '3 upcoming'
    },
    {
      title: 'Patient Records',
      description: 'Access comprehensive patient medical histories',
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      route: '/doctor/records',
      badge: '148 patients'
    },
    {
      title: 'Prescribe Medication',
      description: 'Issue and manage patient prescriptions',
      icon: Stethoscope,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      route: '/doctor/prescriptions',
      badge: '2 pending'
    }
  ];

  const todaySchedule = [
    { time: '09:00 AM', patient: 'Sarah Johnson', type: 'Consultation', status: 'confirmed', duration: '30 min' },
    { time: '10:30 AM', patient: 'Michael Chen', type: 'Follow-up', status: 'confirmed', duration: '15 min' },
    { time: '11:00 AM', patient: 'Emma Williams', type: 'Check-up', status: 'pending', duration: '20 min' },
    { time: '02:00 PM', patient: 'David Brown', type: 'Consultation', status: 'confirmed', duration: '45 min' }
  ];

  const recentActivity = [
    { action: 'Prescription issued', patient: 'Sarah Johnson', time: '15 minutes ago', type: 'success', icon: Pill },
    { action: 'Appointment scheduled', patient: 'New patient - John Doe', time: '1 hour ago', type: 'info', icon: Calendar },
    { action: 'Medical record updated', patient: 'Emma Williams', time: '2 hours ago', type: 'info', icon: FileText },
    { action: 'Lab results received', patient: 'Michael Chen', time: '3 hours ago', type: 'warning', icon: Activity }
  ];

  const clinicalAlerts = [
    { message: 'Lab results ready for Michael Chen', severity: 'high', time: '10 min ago', action: 'Review Results' },
    { message: 'Prescription renewal needed for Sarah Johnson', severity: 'medium', time: '1 hour ago', action: 'Renew Now' },
    { message: 'Follow-up appointment due for Emma Williams', severity: 'low', time: '2 hours ago', action: 'Schedule' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-roboto">
      <DoctorSidebar active="Dashboard" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DoctorTopbar user={{ name: 'Dr. Alex', role: 'Doctor' }} />

        <div className="px-8 pt-6 pb-2">
          <nav className="flex space-x-2 items-center text-sm text-gray-600">
            <span className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Doctor Dashboard</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Home</span>
          </nav>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Dr. Alex</h1>
                <p className="text-gray-600 mt-1">Ready to make a difference in your patients' lives today?</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.lightColor}`}>
                      <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                    </div>
                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {stat.trend === 'up' ? <TrendingUp className="w-3 h-3 inline mr-1" /> : <TrendingDown className="w-3 h-3 inline mr-1" />}
                      {stat.trend === 'up' ? 'Up' : 'Down'}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.title}</div>
                    <div className="text-xs text-gray-500 mt-2">{stat.change}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(action.route)}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md hover:border-gray-300 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${action.bgColor}`}>
                        <action.icon className={`w-6 h-6 ${action.color}`} />
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {action.badge}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                    <div className="flex items-center text-sm text-blue-600 font-medium group-hover:text-blue-700">
                      Access now
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all</button>
                </div>
                <div className="space-y-4">
                  {todaySchedule.map((appointment, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-900">{appointment.time}</div>
                        <div className="text-xs text-gray-500">{appointment.duration}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <User className="w-4 h-4 text-gray-600" />
                          <span className="font-medium text-gray-900">{appointment.patient}</span>
                        </div>
                        <div className="text-sm text-gray-600">{appointment.type}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        appointment.status === 'confirmed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {appointment.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View all</button>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`p-2 rounded-full ${
                        item.type === 'success' ? 'bg-green-100' :
                        item.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                      }`}>
                        <item.icon className={`w-4 h-4 ${
                          item.type === 'success' ? 'text-green-600' :
                          item.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{item.action}</p>
                        <p className="text-sm text-gray-600">{item.patient}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Clinical Alerts</h2>
                <Bell className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {clinicalAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        alert.severity === 'high' ? 'bg-red-500' :
                        alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                        <p className="text-xs text-gray-500">{alert.time}</p>
                      </div>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      {alert.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
