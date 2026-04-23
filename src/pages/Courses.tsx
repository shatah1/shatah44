import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Clock, BookOpen, Filter, Search } from 'lucide-react';
import { courses, levelLabels } from '../data/demoData';
import type { Course } from '../data/demoData';

export default function Courses() {
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', ...new Set(courses.map(c => c.category))];

  const filtered = courses.filter(c => {
    const matchLevel = filterLevel === 'all' || c.level === filterLevel;
    const matchCategory = filterCategory === 'all' || c.category === filterCategory;
    const matchSearch = !searchTerm || 
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchLevel && matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-fire-600/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-fire-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">أكاديمية الكورسات</h1>
              <p className="text-gray-400 text-sm">تعلم من المبدئ إلى الاحتراف</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="ابحث في الكورسات..."
                className="w-full pr-10 pl-4 py-2.5 bg-dark-900 border border-fire-600/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-fire-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <select
                value={filterLevel}
                onChange={e => setFilterLevel(e.target.value)}
                className="px-4 py-2.5 bg-dark-900 border border-fire-600/20 rounded-xl text-sm text-white focus:outline-none focus:border-fire-500"
              >
                <option value="all">جميع المستويات</option>
                <option value="beginner">مبتدئ</option>
                <option value="intermediate">متوسط</option>
                <option value="advanced">متقدم</option>
              </select>
              <select
                value={filterCategory}
                onChange={e => setFilterCategory(e.target.value)}
                className="px-4 py-2.5 bg-dark-900 border border-fire-600/20 rounded-xl text-sm text-white focus:outline-none focus:border-fire-500"
              >
                {categories.map(c => (
                  <option key={c} value={c}>
                    {c === 'all' ? 'جميع التصنيفات' : c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500">لا توجد كورسات تطابق معيارات البحث</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const level = levelLabels[course.level];
  return (
    <Link to={`/courses/${course.id}`} className="block group">
      <div className="rounded-2xl bg-dark-900 border border-fire-600/10 overflow-hidden card-hover h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold text-white ${level.color}`}>
              {level.label}
            </span>
            <span className="text-[10px] text-gray-300 bg-dark-950/60 px-2 py-0.5 rounded backdrop-blur-sm">
              {course.category}
            </span>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-white font-bold text-sm mb-2 line-clamp-1 group-hover:text-fire-400 transition-colors">
            {course.title}
          </h3>
          <p className="text-gray-500 text-xs mb-3 line-clamp-2 flex-1">{course.description}</p>
          <div className="flex items-center gap-3 text-xs text-gray-500 pt-3 border-t border-white/5">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {course.lessons} درس
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-fire-600/20 flex items-center justify-center">
              <span className="text-[10px] text-fire-400 font-bold">{course.instructor[0]}</span>
            </div>
            <span className="text-xs text-gray-400">{course.instructor}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
