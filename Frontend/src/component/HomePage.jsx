import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Spacing Area with Background - Now surrounding the banner */}
      <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-b border-blue-100">
        {/* Top Spacing */}
        <div className="h-20"></div>
        
        {/* 🎯 Enhanced Banner Section with side spacing */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 overflow-hidden mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Simplify Your Shop,
                  <span className="block bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent mt-2">
                    Amplify Your Growth
                  </span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                  "Your business deserves tools that work as hard as you do. ShopManager turns complexity into clarity, helping you focus on what matters most - growing your business."
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={handleSignup}
                    className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Watch Demo
                  </button>
                </div>
                <p className="text-blue-200 mt-6 text-sm">
                  No credit card required • Free 14-day trial • Setup in 5 minutes
                </p>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  {/* Dashboard Preview */}
                  <div className="bg-white rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1 text-center">
                        <span className="text-sm font-semibold text-slate-700">ShopManager Dashboard</span>
                      </div>
                    </div>
                    
                    {/* Mock Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">₹12,847</div>
                        <div className="text-xs text-slate-600">Today's Sales</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">42</div>
                        <div className="text-xs text-slate-600">Products</div>
                      </div>
                    </div>
                    
                    {/* Mock Chart */}
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-end justify-between h-16 gap-1">
                        {[20, 35, 45, 30, 50, 65, 55].map((height, index) => (
                          <div
                            key={index}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all duration-500 hover:opacity-80"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="text-xs text-slate-500 text-center mt-2">Weekly Performance</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>
      </div>

      {/* Rest of your existing sections remain exactly the same */}
      {/* Quotes Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-1 sm:p-8 md:p-12">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse sm:-top-4 sm:-left-4 sm:w-8 sm:h-8"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-blue-300 rounded-full opacity-30 animate-pulse animation-delay-1000 sm:-bottom-4 sm:-right-4 sm:w-12 sm:h-12"></div>
            
            <div className="relative">
              <div className="text-blue-500 text-4xl absolute -top-6 -left-2 opacity-20 sm:text-6xl sm:-top-8 sm:-left-4">"</div>
              <blockquote className="text-lg text-slate-700 italic leading-relaxed relative z-10 sm:text-xl md:text-2xl">
                "ShopManager didn't just organize my inventory; it organized my entire business mindset.
                Now I spend less time counting stock and more time counting profits."
              </blockquote>
              <div className="text-slate-500 mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
                <div className="w-1.5 h-6 bg-blue-500 rounded-full sm:w-2 sm:h-8"></div>
                <p className="font-medium text-sm sm:text-base">- Sarah Chen, Owner of Urban Grocers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/50 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-3 sm:text-3xl md:text-4xl sm:mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto sm:text-lg md:text-xl">
              From inventory tracking to customer management, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-slate-100 transform hover:-translate-y-2 group sm:p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 sm:w-16 sm:h-16 sm:mb-6">
                <svg className="w-6 h-6 text-blue-600 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2 sm:text-xl sm:mb-3">Smart Inventory</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Track stock levels, set reorder points, and never run out of popular items again.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-slate-100 transform hover:-translate-y-2 group sm:p-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 sm:w-16 sm:h-16 sm:mb-6">
                <svg className="w-6 h-6 text-green-600 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2 sm:text-xl sm:mb-3">Quick Billing</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Generate professional invoices in seconds and keep your cash flow moving.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-slate-100 transform hover:-translate-y-2 group sm:p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 sm:w-16 sm:h-16 sm:mb-6">
                <svg className="w-6 h-6 text-purple-600 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2 sm:text-xl sm:mb-3">Clear Insights</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Understand your business better with simple, actionable reports and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections remain the same... */}
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 sm:text-3xl md:text-4xl sm:mb-12">
            Why Shop Managers Love Us
          </h2>
          <div className="grid grid-cols-1 gap-6 text-left sm:gap-8 md:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 group hover:transform hover:-translate-x-1 transition-transform duration-300 sm:gap-4 sm:hover:-translate-x-2">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 sm:w-8 sm:h-8">
                  <span className="text-blue-600 font-bold text-sm sm:text-base">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base sm:mb-2">Save 10+ Hours Weekly</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">Automate inventory counting and reporting tasks</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group hover:transform hover:-translate-x-1 transition-transform duration-300 sm:gap-4 sm:hover:-translate-x-2">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 sm:w-8 sm:h-8">
                  <span className="text-blue-600 font-bold text-sm sm:text-base">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base sm:mb-2">Reduce Stock Errors</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">Eliminate manual counting mistakes and discrepancies</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 group hover:transform hover:-translate-x-1 transition-transform duration-300 sm:gap-4 sm:hover:-translate-x-2">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 sm:w-8 sm:h-8">
                  <span className="text-blue-600 font-bold text-sm sm:text-base">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base sm:mb-2">Grow Sales 25%</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">Make data-driven decisions to boost your revenue</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group hover:transform hover:-translate-x-1 transition-transform duration-300 sm:gap-4 sm:hover:-translate-x-2">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 sm:w-8 sm:h-8">
                  <span className="text-blue-600 font-bold text-sm sm:text-base">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base sm:mb-2">Happy Customers</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">Never disappoint customers with out-of-stock items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4 sm:text-3xl md:text-4xl sm:mb-6">
            Ready to Transform Your Shop?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6 leading-relaxed sm:text-xl sm:mb-10">
            "The best time to organize your business was yesterday. The second best time is now."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              onClick={handleSignup}
              className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform hover:-translate-y-1 active:scale-95 sm:px-8 sm:py-4"
            >
              Start Your Free Trial
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 sm:px-8 sm:py-4">
              Book a Demo
            </button>
          </div>
          <p className="text-blue-200 mt-4 text-xs sm:mt-6 sm:text-sm">
            No credit card required • Free 14-day trial • Setup in minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:items-center lg:gap-8 lg:text-left">
            {/* Brand */}
            <div className="flex items-center gap-3 group sm:gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 sm:w-12 sm:h-12">
                <span className="text-white font-bold text-sm sm:text-lg">SM</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white block group-hover:text-blue-200 transition-colors duration-300 sm:text-2xl">ShopManager</span>
                <p className="text-slate-400 text-xs mt-0.5 sm:text-sm sm:mt-1">Retail management made simple</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 text-slate-400 sm:gap-6">
              {['Privacy', 'Terms', 'Support'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-slate-400 text-xs sm:text-sm">
              <p className="hover:text-slate-300 transition-colors duration-300">
                © 2025 ShopManager. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Built with ❤️ for shop owners
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;