import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, Filter, Download, FileText, Globe, Star, X, ExternalLink, Calendar, User } from 'lucide-react';
import { books } from '../data/demoData';

export default function Library() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLang, setFilterLang] = useState('all');
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const categories = ['all', ...new Set(books.map(b => b.category))];

  const filtered = books.filter(b => {
    const matchCategory = filterCategory === 'all' || b.category === filterCategory;
    const matchLang = filterLang === 'all' || b.language === filterLang;
    const matchSearch = !searchTerm ||
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchLang && matchSearch;
  });

  const book = selectedBook ? books.find(b => b.id === selectedBook) : null;

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-fire-600/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-fire-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">المكتبة الرقمية</h1>
              <p className="text-gray-400 text-sm">كتب ومراجع الأمن السيبراني الأكثر شهرة</p>
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
                placeholder="ابحث في الكتب أو المؤلف..."
                className="w-full pr-10 pl-4 py-2.5 bg-dark-900 border border-fire-600/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-fire-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
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
              <select
                value={filterLang}
                onChange={e => setFilterLang(e.target.value)}
                className="px-4 py-2.5 bg-dark-900 border border-fire-600/20 rounded-xl text-sm text-white focus:outline-none focus:border-fire-500"
              >
                <option value="all">جميع اللغات</option>
                <option value="Arabic">العربية</option>
                <option value="English">English</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedBook(book.id)}
              className="rounded-2xl bg-dark-900 border border-fire-600/10 overflow-hidden card-hover cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-dark-800">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded bg-dark-950/60 backdrop-blur-sm text-[10px] text-gray-300 flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    {book.language === 'Arabic' ? 'عربي' : 'EN'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-white text-xs font-bold">{book.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-gray-500 text-xs mb-2">{book.author}</p>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">{book.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <FileText className="w-3.5 h-3.5" />
                      {book.pages} ص
                    </span>
                    <span className="px-2 py-0.5 rounded bg-fire-600/10 text-[10px] text-fire-400 border border-fire-600/20">
                      {book.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500">لا توجد كتب تطابق معيارات البحث</p>
          </div>
        )}
      </div>

      {/* Book Detail Modal */}
      <AnimatePresence>
        {book && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedBook(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl bg-dark-900 border border-fire-600/20 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3">
                {/* Cover */}
                <div className="sm:col-span-1">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="sm:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">{book.title}</h2>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-3.5 h-3.5" />
                        {book.author}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedBook(null)}
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-white font-bold">{book.rating}</span>
                    </div>
                    <span className="text-gray-600">|</span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {book.year}
                    </div>
                    <span className="text-gray-600">|</span>
                    <span className="text-gray-500 text-sm">{book.pages} صفحة</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{book.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1.5 rounded-lg bg-fire-600/10 text-xs text-fire-400 border border-fire-600/20">
                      {book.category}
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-dark-800 text-xs text-gray-400 border border-white/5 flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {book.language === 'Arabic' ? 'العربية' : 'English'}
                    </span>
                  </div>

                  <a
                    href={book.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-fire-600 hover:bg-fire-700 text-white font-bold rounded-xl transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    تحميل PDF
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
