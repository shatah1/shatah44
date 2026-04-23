import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Clock, BookOpen, ArrowLeft, User, CheckCircle,
  Play, Lock, ChevronDown, ChevronUp, Terminal, Star,
  Shield, Award, Users
} from 'lucide-react';
import { courses, levelLabels } from '../data/demoData';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  const [activeLesson, setActiveLesson] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>('lessons');

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <GraduationCap className="w-16 h-16 text-gray-700 mx-auto mb-4" />
          <h1 className="text-xl font-bold text-white mb-2">الكورس غير موجود</h1>
          <Link to="/courses" className="text-fire-400 hover:text-fire-300 text-sm">
            العودة إلى الكورسات
          </Link>
        </div>
      </div>
    );
  }

  const level = levelLabels[course.level];
  const currentLesson = course.lessonsList[activeLesson];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Link
          to="/courses"
          className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          العودة إلى الكورسات
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Video Player */}
              <div className="rounded-2xl overflow-hidden bg-dark-900 border border-fire-600/10 mb-6">
                <div className="aspect-video bg-dark-950 relative">
                  {currentLesson?.videoUrl ? (
                    <iframe
                      src={currentLesson.videoUrl}
                      title={currentLesson.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-fire-600 mx-auto mb-3" />
                        <p className="text-gray-500">فيديو الدرس غير متوفر حالياً</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white ${
                      currentLesson?.type === 'lab' ? 'bg-purple-600' : 'bg-fire-600'
                    }`}>
                      {currentLesson?.type === 'lab' ? 'Lab عملي' : 'فيديو'}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {currentLesson?.duration}
                    </span>
                  </div>
                  <h2 className="text-white font-bold text-lg">{currentLesson?.title}</h2>
                </div>
              </div>

              {/* Course Info Tabs */}
              <div className="bg-dark-900 border border-fire-600/10 rounded-2xl overflow-hidden">
                <div className="flex border-b border-white/5">
                  {[
                    { id: 'overview', label: 'نبذة' },
                    { id: 'lessons', label: `الدروس (${course.lessonsList.length})` },
                    { id: 'instructor', label: 'المحاضر' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setExpandedSection(tab.id)}
                      className={`flex-1 py-3 text-sm font-medium transition-colors ${
                        expandedSection === tab.id
                          ? 'text-fire-400 border-b-2 border-fire-500'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {expandedSection === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <h3 className="text-white font-bold mb-3">وصف الكورس</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">{course.description}</p>

                        <h3 className="text-white font-bold mb-3">ما ستتعلمه</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                          {course.whatYouWillLearn.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-fire-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-400 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <h3 className="text-white font-bold mb-3">متطلبات الكورس</h3>
                        <ul className="space-y-2">
                          {course.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                              <Shield className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {expandedSection === 'lessons' && (
                      <motion.div
                        key="lessons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-2"
                      >
                        {course.lessonsList.map((lesson, i) => (
                          <button
                            key={lesson.id}
                            onClick={() => setActiveLesson(i)}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-right ${
                              activeLesson === i
                                ? 'bg-fire-600/10 border border-fire-600/30'
                                : 'hover:bg-white/5 border border-transparent'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              activeLesson === i ? 'bg-fire-600' : 'bg-dark-800'
                            }`}>
                              {activeLesson === i ? (
                                <Play className="w-4 h-4 text-white" />
                              ) : lesson.type === 'lab' ? (
                                <Terminal className="w-4 h-4 text-purple-400" />
                              ) : (
                                <Lock className="w-4 h-4 text-gray-500" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium ${activeLesson === i ? 'text-white' : 'text-gray-400'}`}>
                                {lesson.title}
                              </p>
                              <p className="text-xs text-gray-600">{lesson.duration}</p>
                            </div>
                            <span className={`text-[10px] px-2 py-0.5 rounded ${
                              lesson.type === 'lab' ? 'bg-purple-600/20 text-purple-400' : 'bg-dark-800 text-gray-500'
                            }`}>
                              {lesson.type === 'lab' ? 'Lab' : 'فيديو'}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}

                    {expandedSection === 'instructor' && (
                      <motion.div
                        key="instructor"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-full gradient-fire flex items-center justify-center">
                            <User className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-bold">{course.instructor}</h3>
                            <p className="text-fire-400 text-sm">محاضر في {course.category}</p>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{course.instructorBio}</p>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-white text-sm font-bold">4.9</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-400 text-sm">2,340 طالب</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4 text-fire-500" />
                            <span className="text-gray-400 text-sm">OSCP</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-dark-900 border border-fire-600/10 rounded-2xl p-6 sticky top-24"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-white font-bold mb-2">{course.title}</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white ${level.color}`}>
                  {level.label}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] text-gray-400 bg-dark-800">
                  {course.category}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">المدة</span>
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">الدروس</span>
                  <span className="text-white">{course.lessons} درس</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">المستوى</span>
                  <span className="text-white">{level.label}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">المحاضر</span>
                  <span className="text-white">{course.instructor}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-fire-600 hover:bg-fire-700 text-white font-bold rounded-xl transition-colors mb-3">
                التسجيل في الكورس
              </button>
              <button className="w-full py-3 bg-dark-800 hover:bg-dark-700 text-white font-bold rounded-xl border border-fire-600/20 transition-colors">
                إضافة إلى المفضلة
              </button>

              <div className="mt-6 pt-6 border-t border-white/5">
                <h4 className="text-white font-bold text-sm mb-3">المواضيع</h4>
                <div className="flex flex-wrap gap-1.5">
                  {course.topics.map(topic => (
                    <span key={topic} className="px-2 py-1 rounded-lg bg-dark-800 text-[10px] text-gray-400 border border-white/5">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
