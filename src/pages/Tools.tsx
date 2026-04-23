import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Search, Filter, Download, ExternalLink, Monitor, Terminal, Copy, Check, X, ChevronDown, ChevronUp, Star, Cpu } from 'lucide-react';
import { tools } from '../data/demoData';

export default function Tools() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOS, setSelectedOS] = useState<string>('all');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const categories = ['all', ...new Set(tools.map(t => t.category))];

  const filtered = tools.filter(t => {
    const matchCategory = filterCategory === 'all' || t.category === filterCategory;
    const matchOS = selectedOS === 'all' || t.os.includes(selectedOS as any);
    const matchSearch = !searchTerm ||
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchOS && matchSearch;
  });

  const tool = selectedTool ? tools.find(t => t.id === selectedTool) : null;

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-fire-600/10 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-fire-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">مخزن الأدوات</h1>
              <p className="text-gray-400 text-sm">أدوات الاختبار الأخلاقي المجانية مع الأوامر والشرح</p>
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
                placeholder="ابحث في الأدوات..."
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
                value={selectedOS}
                onChange={e => setSelectedOS(e.target.value)}
                className="px-4 py-2.5 bg-dark-900 border border-fire-600/20 rounded-xl text-sm text-white focus:outline-none focus:border-fire-500"
              >
                <option value="all">جميع الأنظمة</option>
                <option value="linux">Linux</option>
                <option value="windows">Windows</option>
                <option value="macos">macOS</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedTool(tool.id)}
              className="p-5 rounded-2xl bg-dark-900 border border-fire-600/10 card-hover cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-fire-600/10 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-fire-500" />
                </div>
                <span className="px-2 py-0.5 rounded bg-dark-800 text-[10px] text-gray-400 border border-white/5">
                  v{tool.version}
                </span>
              </div>
              <h3 className="text-white font-bold mb-2">{tool.name}</h3>
              <p className="text-gray-500 text-xs mb-4 line-clamp-2">{tool.description}</p>
              <div className="mb-4">
                <span className="px-2 py-0.5 rounded bg-fire-600/10 text-[10px] text-fire-400 border border-fire-600/20">
                  {tool.category}
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  {tool.os.map(os => (
                    <span key={os} className="text-gray-500" title={os}>
                      {os === 'linux' ? <Terminal className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-fire-400 flex items-center gap-1">
                  التفاصيل
                  <ChevronDown className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500">لا توجد أدوات تطابق معيارات البحث</p>
          </div>
        )}
      </div>

      {/* Tool Detail Modal */}
      <AnimatePresence>
        {tool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl bg-dark-900 border border-fire-600/20 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-fire-600/10 flex items-center justify-center">
                      <Wrench className="w-7 h-7 text-fire-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{tool.name}</h2>
                      <p className="text-gray-500 text-sm">{tool.category} • v{tool.version}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>

                {/* OS Support */}
                <div>
                  <h3 className="text-white font-bold text-sm mb-2">الأنظمة المدعومة</h3>
                  <div className="flex gap-2">
                    {tool.os.map(os => (
                      <span key={os} className="px-3 py-1.5 rounded-lg bg-dark-800 text-xs text-gray-300 border border-white/5 flex items-center gap-1.5">
                        {os === 'linux' ? <Terminal className="w-3.5 h-3.5" /> : <Monitor className="w-3.5 h-3.5" />}
                        {os === 'linux' ? 'Linux' : os === 'windows' ? 'Windows' : 'macOS'}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Usage */}
                <div>
                  <h3 className="text-white font-bold text-sm mb-2">طريقة الاستخدام</h3>
                  <div className="p-3 rounded-xl bg-dark-950 border border-fire-600/10">
                    <code className="text-fire-400 text-sm font-mono">{tool.usage}</code>
                  </div>
                </div>

                {/* Commands */}
                <div>
                  <h3 className="text-white font-bold text-sm mb-2">أمثلة على الأوامر</h3>
                  <div className="space-y-2">
                    {tool.commands.map((cmd, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-dark-950 border border-fire-600/10 group">
                        <Terminal className="w-4 h-4 text-fire-500 flex-shrink-0" />
                        <code className="text-gray-300 text-sm font-mono flex-1 truncate">{cmd}</code>
                        <button
                          onClick={() => copyCommand(cmd)}
                          className="p-1.5 rounded-lg text-gray-500 hover:text-fire-400 hover:bg-fire-600/10 transition-colors"
                        >
                          {copiedCmd === cmd ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-white font-bold text-sm mb-2">المميزات</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feat, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-fire-600/10 text-xs text-fire-400 border border-fire-600/20 flex items-center gap-1.5">
                        <Star className="w-3 h-3" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download */}
                <a
                  href={tool.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-fire-600 hover:bg-fire-700 text-white font-bold rounded-xl transition-colors"
                >
                  <Download className="w-5 h-5" />
                  تحميل الأداة
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
