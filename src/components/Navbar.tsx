import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Search, Bell, Menu, X, User, LogOut, ChevronDown,
  BookOpen, Wrench, GraduationCap, Home, LayoutDashboard
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { user, logout, unreadCount, searchQuery, setSearchQuery, isAdmin } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const notifRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navLinks = [
    { path: '/', label: 'الرئيسية', icon: Home },
    { path: '/courses', label: 'الكورسات', icon: GraduationCap },
    { path: '/tools', label: 'الأدوات', icon: Wrench },
    { path: '/library', label: 'المكتبة', icon: BookOpen },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 glass-effect border-b border-fire-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-fire flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Shatta<span className="text-fire-500">Academy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  location.pathname === link.path
                    ? 'text-fire-400 bg-fire-600/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  location.pathname === '/admin'
                    ? 'text-fire-400 bg-fire-600/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                لوحة التحكم
              </Link>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <AnimatePresence>
              {searchOpen ? (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 240, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  onSubmit={handleSearch}
                  className="hidden md:flex"
                >
                  <input
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="ابحث في المنصة..."
                    className="w-full px-3 py-1.5 bg-dark-800 border border-fire-600/30 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-fire-500"
                  />
                </motion.form>
              ) : null}
            </AnimatePresence>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors hidden md:flex"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            {user && (
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => setNotifOpen(!notifOpen)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors relative"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-fire-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
                <AnimatePresence>
                  {notifOpen && <NotificationDropdown onClose={() => setNotifOpen(false)} />}
                </AnimatePresence>
              </div>
            )}

            {/* User */}
            {user ? (
              <div className="relative" ref={userRef}>
                <button
                  onClick={() => setUserOpen(!userOpen)}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full gradient-fire flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
                </button>
                <AnimatePresence>
                  {userOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full mt-2 w-56 bg-dark-900 border border-fire-600/20 rounded-xl shadow-2xl shadow-fire-900/20 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-white/5">
                        <p className="text-white font-medium text-sm">{user.name}</p>
                        <p className="text-gray-500 text-xs">{user.email}</p>
                      </div>
                      <button
                        onClick={() => { logout(); setUserOpen(false); }}
                        className="w-full px-4 py-2.5 text-right text-sm text-gray-400 hover:text-fire-400 hover:bg-fire-600/5 transition-colors flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        تسجيل الخروج
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium bg-fire-600 hover:bg-fire-700 text-white rounded-lg transition-colors"
                >
                  إنشاء حساب
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/5 overflow-hidden bg-dark-950/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              <form onSubmit={handleSearch} className="mb-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="ابحث في المنصة..."
                  className="w-full px-3 py-2 bg-dark-800 border border-fire-600/30 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-fire-500"
                />
              </form>
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium ${
                    location.pathname === link.path
                      ? 'text-fire-400 bg-fire-600/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium ${
                    location.pathname === '/admin'
                      ? 'text-fire-400 bg-fire-600/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  لوحة التحكم
                </Link>
              )}
              {!user && (
                <div className="pt-2 border-t border-white/5 space-y-1">
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    <User className="w-4 h-4" />
                    تسجيل الدخول
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-fire-400 hover:bg-fire-600/10"
                  >
                    <Shield className="w-4 h-4" />
                    إنشاء حساب
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NotificationDropdown({ onClose }: { onClose: () => void }) {
  const { notifications, markNotificationRead, markAllRead } = useApp();
  const typeIcons = {
    course: <GraduationCap className="w-4 h-4 text-blue-400" />,
    book: <BookOpen className="w-4 h-4 text-green-400" />,
    tool: <Wrench className="w-4 h-4 text-yellow-400" />,
    system: <Shield className="w-4 h-4 text-fire-400" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      className="absolute left-0 top-full mt-2 w-80 bg-dark-900 border border-fire-600/20 rounded-xl shadow-2xl shadow-fire-900/20 overflow-hidden z-50"
    >
      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-white font-semibold text-sm">الإشعارات</h3>
        <button onClick={markAllRead} className="text-xs text-fire-400 hover:text-fire-300">
          تعليم الكل كمقروء
        </button>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <p className="px-4 py-6 text-center text-gray-500 text-sm">لا توجد إشعارات</p>
        ) : (
          notifications.map(n => (
            <button
              key={n.id}
              onClick={() => markNotificationRead(n.id)}
              className={`w-full px-4 py-3 text-right border-b border-white/5 hover:bg-white/5 transition-colors flex items-start gap-3 ${
                !n.read ? 'bg-fire-600/5' : ''
              }`}
            >
              <div className="mt-0.5">{typeIcons[n.type]}</div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${!n.read ? 'text-white' : 'text-gray-400'}`}>
                  {n.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 truncate">{n.message}</p>
                <p className="text-[10px] text-gray-600 mt-1">
                  {new Date(n.createdAt).toLocaleDateString('ar-SA')}
                </p>
              </div>
              {!n.read && <div className="w-2 h-2 bg-fire-500 rounded-full mt-1.5 flex-shrink-0" />}
            </button>
          ))
        )}
      </div>
    </motion.div>
  );
}
