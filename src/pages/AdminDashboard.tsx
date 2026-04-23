import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, GraduationCap, Wrench, BookOpen, Plus, Trash2, Edit3,
  Users, TrendingUp, Activity, AlertCircle, X, CheckCircle
} from 'lucide-react';
import { courses, tools, books } from '../data/demoData';
import type { Course, Tool, Book } from '../data/demoData';

type TabType = 'courses' | 'tools' | 'books' | 'users';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('courses');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit'>('add');
  const [editItem, setEditItem] = useState<any>(null);
  const [message, setMessage] = useState('');

  // Local state for demo data management
  const [courseList, setCourseList] = useState<Course[]>(courses);
  const [toolList, setToolList] = useState<Tool[]>(tools);
  const [bookList, setBookList] = useState<Book[]>(books);

  const tabs = [
    { id: 'courses' as TabType, label: 'الكورسات', icon: GraduationCap, count: courseList.length },
    { id: 'tools' as TabType, label: 'الأدوات', icon: Wrench, count: toolList.length },
    { id: 'books' as TabType, label: 'الكتب', icon: BookOpen, count: bookList.length },
    { id: 'users' as TabType, label: 'المستخدمين', icon: Users, count: 1250 },
  ];

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDelete = (type: TabType, id: string) => {
    if (!confirm('هل أنت متأكد من الحذف؟')) return;
    if (type === 'courses') setCourseList(prev => prev.filter(c => c.id !== id));
    if (type === 'tools') setToolList(prev => prev.filter(t => t.id !== id));
    if (type === 'books') setBookList(prev => prev.filter(b => b.id !== id));
    showMessage('تم الحذف بنجاح');
  };

  const openAddModal = () => {
    setModalType('add');
    setEditItem(null);
    setShowModal(true);
  };

  const openEditModal = (item: any) => {
    setModalType('edit');
    setEditItem(item);
    setShowModal(true);
  };

  const stats = [
    { label: 'إجمالي الكورسات', value: courseList.length, icon: GraduationCap, color: 'bg-blue-600' },
    { label: 'إجمالي الأدوات', value: toolList.length, icon: Wrench, color: 'bg-yellow-600' },
    { label: 'إجمالي الكتب', value: bookList.length, icon: BookOpen, color: 'bg-green-600' },
    { label: 'الزيارات', value: '12.5K', icon: TrendingUp, color: 'bg-fire-600' },
  ];

  const currentList = activeTab === 'courses' ? courseList : activeTab === 'tools' ? toolList : activeTab === 'books' ? bookList : [];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-fire-600/10 flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-fire-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">لوحة تحكم المدير</h1>
              <p className="text-gray-400 text-sm">إدارة محتوى المنصة</p>
            </div>
          </div>
        </div>

        {/* Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-3 rounded-lg bg-green-600/10 border border-green-600/20 flex items-center gap-2 text-green-400 text-sm"
          >
            <CheckCircle className="w-4 h-4" />
            {message}
          </motion.div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-xl bg-dark-900 border border-fire-600/10"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-lg ${stat.color}/10 flex items-center justify-center`}>
                  <stat.icon className={`w-4 h-4 ${stat.color.replace('bg-', 'text-')}`} />
                </div>
                <Activity className="w-4 h-4 text-gray-600" />
              </div>
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-fire-600 text-white'
                  : 'bg-dark-900 text-gray-400 hover:text-white border border-fire-600/10'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-dark-800'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-dark-900 border border-fire-600/10 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-white font-bold">
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            {activeTab !== 'users' && (
              <button
                onClick={openAddModal}
                className="flex items-center gap-1.5 px-4 py-2 bg-fire-600 hover:bg-fire-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
                إضافة
              </button>
            )}
          </div>

          {activeTab === 'users' ? (
            <div className="p-8 text-center">
              <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">إدارة المستخدمين متوفرة في النسخة الكاملة</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-right px-4 py-3 text-xs font-medium text-gray-500">الاسم</th>
                    <th className="text-right px-4 py-3 text-xs font-medium text-gray-500">التصنيف</th>
                    <th className="text-right px-4 py-3 text-xs font-medium text-gray-500 hidden md:table-cell">الوصف</th>
                    <th className="text-right px-4 py-3 text-xs font-medium text-gray-500">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {currentList.map((item: any) => (
                    <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {'image' in item || 'cover' in item ? (
                            <img
                              src={item.image || item.cover}
                              alt={item.title || item.name}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-fire-600/10 flex items-center justify-center">
                              <Wrench className="w-4 h-4 text-fire-500" />
                            </div>
                          )}
                          <span className="text-white text-sm font-medium">{item.title || item.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded bg-fire-600/10 text-[10px] text-fire-400 border border-fire-600/20">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell max-w-xs truncate">
                        {item.description}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => openEditModal(item)}
                            className="p-1.5 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-600/10 transition-colors"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(activeTab, item.id)}
                            className="p-1.5 rounded-lg text-gray-400 hover:text-fire-400 hover:bg-fire-600/10 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg bg-dark-900 border border-fire-600/20 rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">
                {modalType === 'add' ? 'إضافة جديد' : 'تعديل'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); showMessage('تم الحفظ بنجاح'); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">الاسم</label>
                <input
                  defaultValue={editItem?.title || editItem?.name || ''}
                  className="w-full px-4 py-2.5 bg-dark-800 border border-fire-600/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-fire-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">التصنيف</label>
                <input
                  defaultValue={editItem?.category || ''}
                  className="w-full px-4 py-2.5 bg-dark-800 border border-fire-600/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-fire-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">الوصف</label>
                <textarea
                  defaultValue={editItem?.description || ''}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-dark-800 border border-fire-600/20 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-fire-500 resize-none"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 bg-dark-800 hover:bg-dark-700 text-gray-300 font-medium rounded-xl transition-colors"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-fire-600 hover:bg-fire-700 text-white font-medium rounded-xl transition-colors"
                >
                  حفظ
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
