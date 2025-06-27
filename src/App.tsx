import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  Mail, 
  Target, 
  TrendingUp,
  Database,
  Shield,
  Zap,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className={`border-b border-slate-800/50 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 shadow-2xl' : 'bg-slate-900/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DataPlus X
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['HOME', 'ABOUT', 'BLOG', 'PAGES', 'PRICING', 'CONTACT'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-slate-300 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-slate-300 hover:text-white transition-colors duration-300 hidden md:block">
                Login
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Get started
              </button>
              <button 
                className="md:hidden text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-2 bg-slate-800/50 backdrop-blur-xl">
            {['HOME', 'ABOUT', 'BLOG', 'PAGES', 'PRICING', 'CONTACT'].map((item) => (
              <a key={item} href="#" className="block py-2 text-slate-300 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                A <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
                  CRM platform
                </span> for<br />
                power users.
              </h1>
            </div>
            <div className="animate-fade-in-up delay-200">
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                All of your most valuable customer insights and communication are fully encrypted 
                to create powerful business and partnership insights.
              </p>
            </div>
            <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-semibold flex items-center justify-center">
                Get started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group border border-slate-600 hover:border-blue-500 px-8 py-4 rounded-lg transition-all duration-300 hover:bg-blue-500/10 backdrop-blur-sm">
                View pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-[1.02]">
            <div className="bg-slate-900/80 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="bg-slate-800/80 px-4 py-2 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1 space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300">
                      <h3 className="text-sm font-semibold text-slate-400 mb-2">Overview</h3>
                      <div className="space-y-2">
                        {[
                          { icon: BarChart3, label: 'Analytics', color: 'text-blue-400' },
                          { icon: Users, label: 'Customers', color: 'text-green-400' },
                          { icon: Target, label: 'Targets', color: 'text-purple-400' }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm hover:bg-slate-700/30 p-2 rounded transition-all duration-200 cursor-pointer">
                            <item.icon className={`w-4 h-4 ${item.color}`} />
                            <span>{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 backdrop-blur-sm"></div>
                      <div className="relative">
                        <h3 className="text-lg font-semibold mb-4">Revenue Analytics</h3>
                        <div className="flex items-end space-x-2 h-32">
                          {[40, 70, 50, 80, 60, 90, 75].map((height, index) => (
                            <div 
                              key={index}
                              className="bg-white/30 rounded-t flex-1 animate-grow-up backdrop-blur-sm hover:bg-white/40 transition-all duration-300 cursor-pointer"
                              style={{ 
                                height: `${height}%`,
                                animationDelay: `${index * 100}ms`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700/30 hover:border-green-500/30 transition-all duration-300 group">
                        <h4 className="text-sm text-slate-400">Monthly Users</h4>
                        <p className="text-2xl font-bold">1,154</p>
                        <div className="flex items-center text-green-400 text-sm mt-1">
                          <TrendingUp className="w-3 h-3 mr-1 group-hover:animate-bounce" />
                          +12%
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700/30 hover:border-green-500/30 transition-all duration-300 group">
                        <h4 className="text-sm text-slate-400">Monthly Revenue</h4>
                        <p className="text-2xl font-bold">3,480</p>
                        <div className="flex items-center text-green-400 text-sm mt-1">
                          <TrendingUp className="w-3 h-3 mr-1 group-hover:animate-bounce" />
                          +8%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 mb-8 animate-fade-in">
            TRUSTED BY 10,000+ COMPANIES AROUND THE WORLD
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              { icon: Database, label: 'application' },
              { icon: Target, label: 'business' },
              { icon: Globe, label: 'company' },
              { icon: Shield, label: 'enterprise' },
              { icon: Users, label: 'institute' }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <item.icon className="w-6 h-6" />
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
              Powerful features to help you<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                close sales faster
              </span>.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Users, title: 'User Information', desc: 'Access comprehensive user profiles and track customer interactions efficiently.', color: 'bg-blue-600' },
              { icon: BarChart3, title: 'Deal tracking', desc: 'Monitor your sales pipeline and track deal progress from lead to close.', color: 'bg-green-600' },
              { icon: Target, title: 'Pipeline management', desc: 'Organize and prioritize your sales opportunities for maximum efficiency.', color: 'bg-purple-600' },
              { icon: TrendingUp, title: 'Reporting dashboard', desc: 'Get insights with comprehensive analytics and customizable reports.', color: 'bg-orange-600' },
              { icon: Calendar, title: 'Meeting scheduling', desc: 'Schedule and manage meetings with integrated calendar functionality.', color: 'bg-teal-600' },
              { icon: Mail, title: 'Email tracking', desc: 'Track email opens, clicks, and responses to optimize your outreach.', color: 'bg-red-600' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-semibold mr-4">
              Get started
            </button>
            <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300 group">
              Browse all features
              <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Prospects Management */}
      <section className="py-20 bg-slate-800/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-6">
                Manage all your<br />
                prospects in <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">one place</span>.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Keep track of every lead and customer interaction with our comprehensive management system that puts all your data at your fingertips.
              </p>
            </div>
            
            <div className="space-y-4 animate-fade-in-right">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">JC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Carter</h4>
                    <p className="text-sm text-slate-400">CEO, TechCorp</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">Last contact</p>
                    <p>2 days ago</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Deal value</p>
                    <p className="text-green-400 font-semibold">$45,000</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 backdrop-blur-sm hover:border-teal-500/30 transition-all duration-300 transform hover:scale-105">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-teal-400" />
                  Next meeting
                </h4>
                <p className="text-sm text-slate-400">Tomorrow at 3:00 PM</p>
                <p className="text-sm">Strategy discussion with DataCorp team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Meet Our Team</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
              The passionate experts behind DataPlus X, dedicated to revolutionizing 
              how businesses manage their customer relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { initials: 'AS', name: 'Alex Smith', role: 'CEO & Founder', desc: '15+ years in enterprise software and customer success.', gradient: 'from-blue-500 to-purple-600' },
              { initials: 'MJ', name: 'Maria Johnson', role: 'CTO', desc: 'Former Google engineer with expertise in scalable systems.', gradient: 'from-green-500 to-teal-600' },
              { initials: 'DL', name: 'David Lee', role: 'Head of Design', desc: 'Award-winning UX designer focused on user-centric solutions.', gradient: 'from-purple-500 to-pink-600' },
              { initials: 'SC', name: 'Sarah Chen', role: 'VP of Sales', desc: 'Sales strategy expert with proven track record in B2B growth.', gradient: 'from-orange-500 to-red-600' }
            ].map((member, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold group-hover:shadow-2xl group-hover:shadow-current/25 transition-all duration-300`}>
                  {member.initials}
                </div>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-400 mb-2 font-medium">{member.role}</p>
                <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-300">
                  {member.desc}
                </p>
                <div className="flex justify-center space-x-3">
                  <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                  <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-all duration-300 transform hover:scale-110" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Chose Section */}
      <section className="py-20 bg-slate-800/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Why We Chose This Path</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto animate-fade-in-up delay-200">
              Our technology decisions are driven by performance, security, and user experience. 
              Here's why we built DataPlus X the way we did.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Performance First',
                desc: 'We chose modern technologies like React and TypeScript to ensure lightning-fast performance and exceptional user experience.',
                features: ['Sub-second page load times', 'Real-time data synchronization', 'Optimized for mobile devices'],
                color: 'blue'
              },
              {
                icon: Shield,
                title: 'Security & Privacy',
                desc: 'Enterprise-grade security was non-negotiable. We implemented industry-leading encryption and compliance standards from day one.',
                features: ['End-to-end encryption', 'SOC 2 Type II compliance', 'GDPR compliant data handling'],
                color: 'green'
              },
              {
                icon: Globe,
                title: 'Global Scale',
                desc: 'Built on cloud-native architecture to serve customers worldwide with consistent performance and 99.9% uptime guarantee.',
                features: ['Multi-region deployment', 'Auto-scaling infrastructure', '24/7 monitoring & support'],
                color: 'purple'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-${item.color}-500/50 transition-all duration-300 transform hover:scale-105 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-12 h-12 bg-${item.color}-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-current/25 transition-all duration-300`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-300">
                  {item.desc}
                </p>
                <ul className="text-sm text-slate-400 space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center group-hover:text-slate-300 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 animate-fade-in-up delay-600">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Built for the Future
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Every architectural decision we made considers scalability, maintainability, and evolution. 
                DataPlus X isn't just built for today's needs—it's designed to grow with your business 
                for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DataPlus X
                </span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                The most powerful CRM platform designed for modern businesses. 
                Streamline your sales process and grow your revenue with our comprehensive suite of tools.
              </p>
              <div className="flex space-x-4">
                {[Twitter, Linkedin, Github].map((Icon, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            
            {[
              {
                title: 'Product',
                links: ['Features', 'Pricing', 'Integrations', 'API', 'Security']
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Careers', 'Press', 'Partners']
              },
              {
                title: 'Support',
                links: ['Help Center', 'Documentation', 'Status', 'Contact']
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-3 text-slate-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-slate-800/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
                <p>&copy; 2025 DataPlus X. All rights reserved.</p>
                <div className="flex space-x-6">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                    <a key={index} href="#" className="hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-slate-400 mt-4 md:mt-0">
                <div className="flex items-center space-x-1 hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-white transition-colors duration-300">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;