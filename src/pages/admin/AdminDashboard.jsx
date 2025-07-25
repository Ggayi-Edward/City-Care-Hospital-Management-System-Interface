import React from 'react';
import {
  Users,
  BarChart,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Activity,
  Shield,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Calendar,
  Server,
  FileText,
  Settings
} from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminTopBar from '../../components/AdminTopbar';

export default function AdminDashboard() {
  const navigate = (path) => {
    window.location.href = path;
  };

  const stats = [
    {
      title: 'Total Users',
      value: '1,245',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Reports Generated',
      value: '320',
      change: '+8%',
      trend: 'up',
      icon: BarChart,
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Active Sessions',
      value: '57',
      change: '-3%',
      trend: 'down',
      icon: Activity,
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      title: 'Revenue',
      value: '$45,320',
      change: '+15%',
      trend: 'up',
      icon: CreditCard,
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  const quickActions = [
    {
      title: 'User Management',
      description: 'Manage users, roles, and permissions',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      route: '/admin/users'
    },
    {
      title: 'Analytics & Reports',
      description: 'View detailed reports and analytics',
      icon: BarChart,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      route: '/admin/reports'
    },
    {
      title: 'Billing Management',
      description: 'Handle billing and subscriptions',
      icon: CreditCard,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      route: '/admin/billing'
    },
    {
      title: 'System Settings',
      description: 'Configure system preferences',
      icon: Settings,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      route: '/admin/settings'
    }
  ];

  const recentActivity = [
    {
      action: 'New user registered',
      user: 'Dr. Sarah Smith',
      type: 'success',
      icon: CheckCircle
    },
    {
      action: 'Report generated',
      user: 'Financial Q2 Report',
      type: 'info',
      icon: FileText
    },
    {
      action: 'Password updated',
      user: 'Admin account',
      type: 'warning',
      icon: Shield
    },
    {
      action: 'System maintenance',
      user: 'Completed successfully',
      type: 'success',
      icon: Server
    }
  ];

  const systemMetrics = [
    {
      label: 'Server Uptime',
      value: '99.9%',
      status: 'excellent',
      icon: Server
    },
    {
      label: 'Pending Approvals',
      value: '12',
      status: 'warning',
      icon: AlertCircle
    },
    {
      label: 'Last Backup',
      value: '2 hours ago',
      status: 'good',
      icon: Calendar
    },
    {
      label: 'Active Alerts',
      value: '3',
      status: 'warning',
      icon: AlertCircle
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-roboto">
      <AdminSidebar active="Dashboard" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminTopBar user={{ name: 'Lexy' }} />

        {/* Breadcrumbs */}
        <div className="px-8 pt-6 pb-2">
          <nav className="flex space-x-2 items-center text-sm text-gray-600">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Dashboard</span>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Lexy!</h1>
                <p className="text-gray-600 mt-1">Here's what's happening with your platform today.</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${stat.lightColor}`}>
                      <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {stat.change}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.title}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(action.route)}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md hover:border-gray-300 transition-all group"
                  >
                    <div className={`p-3 rounded-lg ${action.bgColor} w-fit mb-4`}>
                      <action.icon className={`w-6 h-6 ${action.color}`} />
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

            {/* Activity and Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View all
                  </button>
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
                        <p className="text-sm text-gray-600">{item.user}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Metrics */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">System Metrics</h2>
                </div>
                <div className="space-y-4">
                  {systemMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <metric.icon className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-900">{metric.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${
                          metric.status === 'excellent' ? 'text-green-600' :
                          metric.status === 'good' ? 'text-blue-600' : 'text-yellow-600'
                        }`}>
                          {metric.value}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          metric.status === 'excellent' ? 'bg-green-500' :
                          metric.status === 'good' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
