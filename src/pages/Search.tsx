import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, GraduationCap, Wrench, BookOpen, ArrowLeft } from 'lucide-react';
import { courses, tools, books } from '../data/demoData';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const courseResults = courses.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.description.toLowerCase().includes(query.toLowerCase())
  );
  const toolResults = tools.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.description.toLowerCase().includes(query.toLowerCase())
  );
  const bookResults = books.filter(b =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.author.toLowerCase().includes(query.toLowerCase())
  );

  const total = courseResults.length + toolResults.length + bookResults.length;

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">نتائج البحث</h1>
          <p className="text-gray-400 text-sm">
            {total > 0 ? `تم العثور على ${total} نتيجة لـ "${query}"` : `لا توجد نتائج لـ "${query}"`}
          </p>
        </div>

        {/* Courses */}
        {courseResults.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-fire-500" />
              <h2 className="text-lg font-bold text-white">الكورسات ({courseResults.length})</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courseResults.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={`/courses/${course.id}`} className="flex gap-4 p-4 rounded-xl bg-dark-900 border border-fire-600/10 hover:border-fire-600/30 transition-colors">
                    <img src={course.image} alt={course.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-sm mb-1 truncate">{course.title}</h3>
                      <p className="text-gray-500 text-xs line-clamp-2">{course.description}</p>
                      <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold text-white ${
                        course.level === 'beginner' ? 'bg-green-600' :
                        course.level === 'intermediate' ? 'bg-yellow-600' : 'bg-fire-600'
                      }`}>
                        {course.level === 'beginner' ? 'مبتدئ' : course.level === 'intermediate' ? 'متوسط' : 'متقدم'}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        {toolResults.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-fire-500" />
              <h2 className="text-lg font-bold text-white">الأدوات ({toolResults.length})</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {toolResults.map((tool, i) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-dark-900 border border-fire-600/10 hover:border-fire-600/30 transition-colors"
                >
                  <h3 className="text-white font-bold text-sm mb-1">{tool.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">{tool.description}</p>
                  <span className="px-2 py-0.5 rounded bg-fire-600/10 text-[10px] text-fire-400 border border-fire-600/20">
                    {tool.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Books */}
        {bookResults.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-fire-500" />
              <h2 className="text-lg font-bold text-white">الكتب ({bookResults.length})</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bookResults.map((book, i) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 p-4 rounded-xl bg-dark-900 border border-fire-600/10 hover:border-fire-600/30 transition-colors"
                >
                  <img src={book.cover} alt={book.title} className="w-16 h-20 rounded-lg object-cover flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">{book.title}</h3>
                    <p className="text-gray-500 text-xs mb-1">{book.author}</p>
                    <p className="text-gray-500 text-xs line-clamp-2">{book.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {total === 0 && (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">لا توجد نتائج لبحثك</p>
            <Link to="/courses" className="text-fire-400 hover:text-fire-300 text-sm font-medium flex items-center justify-center gap-1">
              استكشف الكورسات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
