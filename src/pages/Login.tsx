import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        navigate('/');
      } else {
        setError('بريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-900 border border-fire-600/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl gradient-fire flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">تسجيل الدخول</h1>
            <p className="text-gray-400 text-sm">رحباً بك في شطا أكاديمي</p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-fire-600/10 border border-fire-600/20 flex items-center gap-2 text-fire-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">بريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full pr-10 pl-4 py-3 bg-dark-800 border border-fire-600/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-fire-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pr-10 pl-4 py-3 bg-dark-800 border border-fire-600/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-fire-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-fire-600 hover:bg-fire-700 disabled:bg-fire-800 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  تسجيل الدخول
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-fire-400 hover:text-fire-300 font-medium">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>

          <div className="mt-6 p-3 rounded-lg bg-dark-800/50 border border-white/5">
            <p className="text-xs text-gray-500 text-center">
              حساب المدير: <span className="text-fire-400">admin@shatta.academy</span> / <span className="text-fire-400">admin123</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
