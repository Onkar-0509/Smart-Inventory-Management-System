import { useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiFileText, FiPackage, FiUsers, FiUser, FiPieChart, FiLogOut } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  const NavLink = ({ to, icon, text }) => {
    const isActive = location.pathname === to;
    return (
      <button
        onClick={() => {
          navigate(to);
          setMobileMenuOpen(false);
        }}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive 
            ? 'bg-blue-100 text-blue-600 shadow-sm border border-blue-200' 
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-transparent'
        }`}
      >
        {icon}
        {text}
      </button>
    );
  };

  const navItems = isAuthenticated 
    ? [
        { to: "/dashboard", icon: <FiHome size={18} />, text: "Dashboard" },
        { to: "/billgenerator", icon: <FiFileText size={18} />, text: "Bills" },
        { to: "/inventorymanager", icon: <FiPackage size={18} />, text: "Inventory" },
        { to: "/customeraccount", icon: <FiUsers size={18} />, text: "Customers" },
        { to: "/profile", icon: <FiUser size={18} />, text: "Profile" },
      ]
    : [
        { to: "/", icon: <FiHome size={18} />, text: "Home" },
        { to: "/about", icon: <FiPieChart size={18} />, text: "About" },
        { to: "/login", icon: <FiUser size={18} />, text: "Login" },
      ];

  return (
    <nav className="bg-white shadow-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')}
            className="flex items-center cursor-pointer group"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              ShopManager
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.to} {...item} />
            ))}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 border border-transparent hover:border-red-200"
              >
                <FiLogOut size={18} />
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200 border border-slate-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-700">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <NavLink key={item.to} {...item} />
              ))}
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 border border-transparent hover:border-red-200"
                >
                  <FiLogOut size={18} />
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;