import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, GraduationCap, Wrench, BookOpen, ArrowLeft,
  Target, Lock, Zap, Users, ChevronLeft
} from 'lucide-react';
import { courses, tools, books } from '../data/demoData';

export default function Home() {
  const featuredCourses = courses.slice(0, 4);
  const featuredTools = tools.slice(0, 4);
  const featuredBooks = books.slice(0, 4);

  const stats = [
    { icon: GraduationCap, value: courses.length, label: 'كورس' },
    { icon: Wrench, value: tools.length, label: 'أداة' },
    { icon: BookOpen, value: books.length, label: 'كتاب' },
    { icon: Users, value: 1250, label: 'طالب' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-fire-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fire-600/10 border border-fire-600/20 text-fire-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              أكاديمية الشطا للأمن السيبراني
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              تعلم فن 
              <span className="text-fire-500 text-glow">الهكر الأخلاقي</span>
              <br />
              من الأساس إلى الاحتراف
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              منصة شاملة لتعليم الأمن السيبراني والهكر الأخلاقي مع أفضل الكورسات والأدوات والكتب
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/courses"
                className="px-8 py-4 bg-fire-600 hover:bg-fire-700 text-white font-bold rounded-xl transition-all hover:scale-105 flex items-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                ابدأ التعلم
                <ChevronLeft className="w-4 h-4" />
              </Link>
              <Link
                to="/tools"
                className="px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white font-bold rounded-xl border border-fire-600/20 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Wrench className="w-5 h-5" />
                استكشف الأدوات
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-fire-600/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-fire-600/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-fire-500" />
                </div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}+</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">لماذا تختار شطا؟</h2>
            <p className="text-gray-400 max-w-xl mx-auto">نقدم لك بيئة تعليمية متكاملة مع أحدث التقنيات وأفضل المحترفين</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'كورسات متكاملة',
                desc: 'من المبدئي إلى المتقدم، تغطي في جميع مجالات الأمن السيبراني'
              },
              {
                icon: Lock,
                title: 'محتوى مؤمن',
                desc: 'تعلم بأمان في بيئة مؤمنة مصممة خصيصاً للمحترفين في مجال الأمن'
              },
              {
                icon: Zap,
                title: 'أدوات عملية',
                desc: 'احصل على أدوات الاختبار الأخلاقي المجانية مع شرح وافي'
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-dark-900 border border-fire-600/10 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-fire-600/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-fire-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">أشهر الكورسات</h2>
              <p className="text-gray-400 text-sm">ابدأ رحلتك في عالم الأمن السيبراني</p>
            </div>
            <Link
              to="/courses"
              className="text-fire-400 hover:text-fire-300 text-sm font-medium flex items-center gap-1 transition-colors"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/courses/${course.id}`} className="block group">
                  <div className="rounded-2xl bg-dark-900 border border-fire-600/10 overflow-hidden card-hover">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold text-white ${
                          course.level === 'beginner' ? 'bg-green-600' :
                          course.level === 'intermediate' ? 'bg-yellow-600' : 'bg-fire-600'
                        }`}>
                          {course.level === 'beginner' ? 'مبتدئ' : course.level === 'intermediate' ? 'متوسط' : 'متقدم'}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold text-sm mb-1 line-clamp-1 group-hover:text-fire-400 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-500 text-xs mb-3 line-clamp-2">{course.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{course.duration}</span>
                        <span>{course.lessons} درس</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">أدوات مقترحة</h2>
              <p className="text-gray-400 text-sm">أفضل أدوات الاختبار الأخلاقي</p>
            </div>
            <Link
              to="/tools"
              className="text-fire-400 hover:text-fire-300 text-sm font-medium flex items-center gap-1 transition-colors"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool, i) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-dark-900 border border-fire-600/10 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-fire-600/10 flex items-center justify-center mb-3">
                  <Wrench className="w-5 h-5 text-fire-500" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{tool.name}</h3>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">{tool.description}</p>
                <div className="flex items-center gap-1 flex-wrap">
                  {tool.os.map(os => (
                    <span key={os} className="px-1.5 py-0.5 rounded bg-dark-800 text-[10px] text-gray-400 border border-white/5">
                      {os === 'linux' ? 'Linux' : os === 'windows' ? 'Windows' : 'macOS'}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">من المكتبة</h2>
              <p className="text-gray-400 text-sm">أفضل كتب الأمن السيبراني</p>
            </div>
            <Link
              to="/library"
              className="text-fire-400 hover:text-fire-300 text-sm font-medium flex items-center gap-1 transition-colors"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-dark-900 border border-fire-600/10 card-hover"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-dark-800">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-gray-500 text-xs mb-2">{book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{book.pages} صفحة</span>
                  <span className="px-2 py-0.5 rounded bg-dark-800 text-[10px] text-gray-400 border border-white/5">
                    {book.language === 'Arabic' ? 'عربي' : 'English'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-3xl bg-gradient-to-br from-fire-900/30 to-dark-900 border border-fire-600/20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="relative z-10">
              <Shield className="w-12 h-12 text-fire-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">جاهز للانضمام إلينا؟</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                انضم إلى أكاديمية الشطا الآن وابدأ رحلتك في عالم الأمن السيبراني مع أفضل المحترفين
              </p>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-fire-600 hover:bg-fire-700 text-white font-bold rounded-xl transition-all hover:scale-105"
              >
                <Shield className="w-5 h-5" />
                إنشاء حساب جديد
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
