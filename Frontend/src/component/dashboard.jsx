import { React } from 'react';
import Card from "./card";
import Footer from "./footer";
import { ToastContainer } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../Context/StoreContext';
import {
  FiTrendingUp,
  FiDollarSign,
  FiPackage,
  FiUsers,
  FiPieChart,
  FiShoppingBag,
  FiFileText,
  FiClock,
  FiBarChart2,
  FiShoppingCart,
  FiBookmark,
  FiAlertTriangle,
  FiStar,
  FiCalendar,
  FiRefreshCw
} from 'react-icons/fi';

const Dashboard = () => {
  const { dashboardData, dashData } = useContext(StoreContext);



  useEffect(() => {
    dashboardData();
  }, []);

  const stats = [
    {
      title: "Today's Sales",
      value: "₹" + (dashData.totalSales || "0"),
      change: "+12%",
      icon: <FiTrendingUp className="text-green-600" />,
      color: "bg-gradient-to-br from-green-50 to-green-100",
      trend: "up"
    },
    {
      title: "Monthly Revenue",
      value: "₹" + (dashData.monthlyRevenue || "0"),
      change: "+8%",
      icon: <FiDollarSign className="text-blue-600" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      trend: "up"
    },
    {
      title: "Total Products",
      value: dashData.totalProducts || "0",
      change: "+5",
      icon: <FiPackage className="text-purple-600" />,
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      trend: "up"
    },
    {
      title: "Active Customers",
      value: dashData.totalCustomers || "0",
      change: "+2",
      icon: <FiUsers className="text-orange-600" />,
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
      trend: "up"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "sale",
      title: "New Product added",
      details: "Product " + dashData.latestProduct.name || "No products",
      time: "Quantity " + dashData.latestProduct.quantity || "0",
      icon: <FiShoppingCart className="text-blue-600" />,
      color: "bg-blue-100"
    },
    {
      id: 2,
      type: "stock",
      title: "Low stock alert",
      details: "Product " + dashData.lowStockItems?.[0]?.name || "No products",
      time: "Quantity " + dashData.lowStockItems?.[0]?.quantity || "0",
      icon: <FiPackage className="text-orange-600" />,
      color: "bg-orange-100"
    },
    {
      id: 3,
      type: "Expired Products",
      title: "Expired Product",
      details: "Product " + dashData.expiredProducts?.[0]?.name || "No products",
      time: "Expired Date " + (dashData.expiredProducts?.[0]?.expirationDate?.split('T')[0] || "No date"),
      icon: <FiUsers className="text-green-600" />,
      color: "bg-green-100"
    }
  ];

  const quickActions = [
    {
      title: "Shop Products",
      description: "Browse and manage products",
      icon: <FiShoppingBag className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      linkTo: "/products"
    },
    {
      title: "Supplier Data",
      description: "Manage suppliers",
      icon: <FiUsers className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600",
      linkTo: "/suppliers"
    },
    {
      title: "Show Bills",
      description: "View transaction history",
      icon: <FiFileText className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
      linkTo: "/bills"
    },
    {
      title: "Stock Analysis",
      description: "Check inventory levels",
      icon: <FiPackage className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
      linkTo: "/inventory"
    },
    {
      title: "Notes",
      description: "View product notes",
      icon: <FiBookmark className="w-6 h-6" />,
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-600",
      linkTo: "/notes"
    }
  ];

  const inventorySummary = [
    {
      title: "Low Stock Items",
      value: dashData.lowStockCount || "0",
      description: "Items need restocking",
      icon: <FiAlertTriangle className="text-red-600" />,
      color: "bg-gradient-to-br from-red-50 to-red-100",
      trend: "urgent"
    },
    {
      title: "Top Selling",
      value: "15",
      description: "Popular products this week",
      icon: <FiStar className="text-yellow-600" />,
      color: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      trend: "positive"
    },
    {
      title: "Expired Products",
      value: dashData.expiredCount || "0",
      description: "Items need delete",
      icon: <FiShoppingBag className="text-green-600" />,
      color: "bg-gradient-to-br from-green-50 to-green-100",
      trend: "stable"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 flex-1 w-full">
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
              Good Morning, Admin! 👋
            </h1>
            <p className="text-slate-600 text-lg">
              Here's your business overview for today
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-4 flex items-center justify-center min-w-[200px]">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <FiCalendar className="text-slate-500" />
                <p className="text-sm text-slate-500">Today is</p>
              </div>
              <p className="text-base font-semibold text-slate-800">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-white/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  {stat.icon}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${stat.trend === 'up'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
                  }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-800">Quick Actions</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors">
              <FiRefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                title={action.title}
                description={action.description}
                icon={action.icon}
                bgColor={action.bgColor}
                iconColor={action.iconColor}
                linkTo={action.linkTo}
              />
            ))}
          </div>
        </div>

        {/* Charts and Activity Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* Recent Activity */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 xl:col-span-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-800">Recent Activity</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors">
                <FiClock className="w-4 h-4" />
                Timeline
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className={`p-2 rounded-lg mr-3 mt-1 ${activity.color}`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-sm">
                      {activity.title}
                    </h4>
                    <p className="text-slate-600 text-xs mb-1">
                      {activity.details}
                    </p>
                    <span className="text-slate-400 text-xs">
                      {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 xl:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-800">Performance Metrics</h2>
              <select className="text-sm border border-slate-300 rounded-lg px-3 py-2 text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last quarter</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sales Trend */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-800">Sales Trend</h3>
                  <FiTrendingUp className="text-blue-600" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 mb-2">+12%</div>
                  <p className="text-sm text-slate-600">Increase from last week</p>
                </div>
              </div>

              {/* Customer Growth */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-800">Customer Growth</h3>
                  <FiUsers className="text-green-600" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 mb-2">+8%</div>
                  <p className="text-sm text-slate-600">New customers this month</p>
                </div>
              </div>

              {/* Inventory Health */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-800">Inventory Health</h3>
                  <FiPackage className="text-orange-600" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 mb-2">92%</div>
                  <p className="text-sm text-slate-600">Stock availability rate</p>
                </div>
              </div>

              {/* Revenue Target */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-800">Revenue Target</h3>
                  <FiDollarSign className="text-purple-600" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 mb-2">75%</div>
                  <p className="text-sm text-slate-600">Monthly target achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Summary */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Inventory Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inventorySummary.map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-xl p-6 border border-white/50 hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${item.color.replace('bg-gradient-to-br', 'bg-white')}`}>
                    {item.icon}
                  </div>
                  {item.trend === 'urgent' && (
                    <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full font-medium">
                      Attention
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">
                  {item.value}
                </h3>
                <p className="font-semibold text-slate-700 mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Dashboard;