import { Shield, Github, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-fire-600/10 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-fire flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Shatta<span className="text-fire-500">Academy</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              أكاديمية الشطا للأمن السيبراني - نقدم أفضل الكورسات والأدوات للهكر الأخلاقي.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                { label: 'الرئيسية', path: '/' },
                { label: 'الكورسات', path: '/courses' },
                { label: 'الأدوات', path: '/tools' },
                { label: 'المكتبة', path: '/library' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-500 hover:text-fire-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">مصادر مفيدة</h4>
            <ul className="space-y-2">
              {[
                'OWASP',
                'Hack The Box',
                'TryHackMe',
                'PortSwigger',
              ].map(item => (
                <li key={item}>
                  <span className="text-gray-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Mail className="w-4 h-4 text-fire-500" />
                info@shatta.academy
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Phone className="w-4 h-4 text-fire-500" />
                +20 123 456 7890
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-fire-500" />
                القاهرة، مصر
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <button className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:text-fire-400 hover:bg-dark-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:text-fire-400 hover:bg-dark-700 transition-colors">
                <Github className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:text-fire-400 hover:bg-dark-700 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 Shatta Academy. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-600 text-sm">
            تصميم وتطوير بـ ❤️ للأمن السيبراني
          </p>
        </div>
      </div>
    </footer>
  );
}
