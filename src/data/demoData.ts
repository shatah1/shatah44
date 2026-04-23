export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  content?: string;
  type: 'video' | 'text' | 'lab';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  lessons: number;
  image: string;
  category: string;
  instructor: string;
  instructorBio: string;
  topics: string[];
  lessonsList: Lesson[];
  whatYouWillLearn: string[];
  requirements: string[];
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  os: ('linux' | 'windows' | 'macos')[];
  downloadUrl: string;
  version: string;
  icon: string;
  commands: string[];
  usage: string;
  features: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  pages: number;
  category: string;
  downloadUrl: string;
  cover: string;
  language: string;
  year: number;
  rating: number;
}

export const courses: Course[] = [
  {
    id: 'c1',
    title: 'إعداد بيئة Kali Linux للاختراق الأخلاقي',
    description: 'تعلم كيفية إعداد بيئة Kali Linux على جهازك بشكل احترافي. ستتعلم التثبيت على VirtualBox وVMware، وكيفية تهيئة الشبكة والأدوات الأساسية.',
    level: 'beginner',
    duration: '8 ساعات',
    lessons: 12,
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800',
    category: 'أنظمة تشغيل',
    instructor: 'أحمد الشطا',
    instructorBio: 'خبير أمن سيبراني مع 8 سنوات خبرة في اختبار الاختراق والأمن السيبراني. حاصل على شهادات OSCP وCEH.',
    topics: ['Kali Linux', 'VirtualBox', 'VMware', 'Terminal', 'Network Config'],
    whatYouWillLearn: [
      'تثبيت Kali Linux على VirtualBox وVMware',
      'فهم البنية التحتية لنظام Linux',
      'استخدام Terminal باحترافية',
      'إعداد الشبكات الافتراضية',
      'تثبيت وتحديث الأدوات الأساسية'
    ],
    requirements: [
      'كمبيوتر بمواصفات متوسطة (8GB RAM على الأقل)',
      'اتصال إنترنت مستقر',
      'لا يشترط خبرة سابقة'
    ],
    lessonsList: [
      { id: 'l1-1', title: 'مقدمة عن Kali Linux واستخداماته', duration: '15:30', videoUrl: 'https://www.youtube.com/embed/lZAe1r3dmlw', type: 'video' },
      { id: 'l1-2', title: 'تحميل وتثبيت VirtualBox', duration: '12:45', videoUrl: 'https://www.youtube.com/embed/sPzc6WaxY18', type: 'video' },
      { id: 'l1-3', title: 'تثبيت Kali Linux على VirtualBox', duration: '20:10', videoUrl: 'https://www.youtube.com/embed/VGSkis8r5-Y', type: 'video' },
      { id: 'l1-4', title: 'التعرف على واجهة Kali Linux', duration: '18:20', videoUrl: 'https://www.youtube.com/embed/lZAe1r3dmlw', type: 'video' },
      { id: 'l1-5', title: 'أساسيات Terminal وCommands', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/sPzc6WaxY18', type: 'video' },
      { id: 'l1-6', title: 'إعداد الشبكات الافتراضية', duration: '15:45', videoUrl: 'https://www.youtube.com/embed/VGSkis8r5-Y', type: 'video' },
      { id: 'l1-7', title: 'تحديث النظام والأدوات', duration: '10:30', videoUrl: 'https://www.youtube.com/embed/lZAe1r3dmlw', type: 'video' },
      { id: 'l1-8', title: 'تثبيت أدوات إضافية', duration: '22:15', videoUrl: 'https://www.youtube.com/embed/sPzc6WaxY18', type: 'video' },
      { id: 'l1-9', title: 'إعداد VMware كبديل', duration: '14:00', videoUrl: 'https://www.youtube.com/embed/VGSkis8r5-Y', type: 'video' },
      { id: 'l1-10', title: 'حلول لمشاكل التثبيت الشائعة', duration: '16:30', videoUrl: 'https://www.youtube.com/embed/lZAe1r3dmlw', type: 'video' },
      { id: 'l1-11', title: 'Lab عملي: إعداد بيئة كاملة', duration: '30:00', videoUrl: 'https://www.youtube.com/embed/sPzc6WaxY18', type: 'lab' },
      { id: 'l1-12', title: 'ملخص ونصائح احترافية', duration: '12:00', videoUrl: 'https://www.youtube.com/embed/VGSkis8r5-Y', type: 'video' }
    ]
  },
  {
    id: 'c2',
    title: 'Nmap الاحترافي - فن المسح الشبكي',
    description: 'تعلم Nmap بشكل احترافي من الصفر حتى الاحتراف. اكتشف المنافذ والخدمات والأنظمة التشغيلية على الشبكات بكفاءة.',
    level: 'intermediate',
    duration: '15 ساعة',
    lessons: 18,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    category: 'اكتشاف شبكات',
    instructor: 'محمد السيبراني',
    instructorBio: 'مستشار أمن سيبراني مع خبرة 10 سنوات في تقييم الثغرات واختبار الاختراق.',
    topics: ['Nmap', 'Port Scanning', 'OS Detection', 'NSE Scripts', 'Network Mapping'],
    whatYouWillLearn: [
      'جميع أنواع مسح المنافذ (SYN, Connect, UDP, etc.)',
      'اكتشاف أنظمة التشغيل والخدمات بدقة',
      'كتابة واستخدام NSE Scripts',
      'تخطي Firewalls و IDS',
      'توليد تقارير احترافية'
    ],
    requirements: [
      'Kali Linux مثبت',
      'فهم أساسي للشبكات (TCP/IP)',
      'معرفة Terminal Commands'
    ],
    lessonsList: [
      { id: 'l2-1', title: 'مقدمة عن Nmap وأهميته', duration: '12:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-2', title: 'تثبيت Nmap وفحص الإصدار', duration: '8:30', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-3', title: 'مسح المنافذ الأساسي (TCP Connect)', duration: '18:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-4', title: 'SYN Stealth Scan (-sS)', duration: '15:45', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-5', title: 'UDP Scan (-sU) وتطبيقاته', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-6', title: 'اكتشاف أنظمة التشغيل (-O)', duration: '14:30', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-7', title: 'اكتشاف الخدمات والإصدارات (-sV)', duration: '16:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-8', title: 'NSE Scripts - الجزء الأول', duration: '22:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-9', title: 'NSE Scripts - الجزء الثاني', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-10', title: 'تخطي Firewalls و IDS/IPS', duration: '28:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-11', title: 'تسريع المسح باستخدام Timing', duration: '12:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-12', title: 'مسح نطاقات IP كاملة', duration: '14:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-13', title: 'توليد تقارير XML و HTML', duration: '16:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-14', title: 'Zenmap - الواجهة الرسومية', duration: '10:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-15', title: 'Lab عملي: مسح شبكة كاملة', duration: '35:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'lab' },
      { id: 'l2-16', title: 'Lab عملي: اكتشاف الثغرات بالـ NSE', duration: '30:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'lab' },
      { id: 'l2-17', title: 'أخطاء شائعة وكيفية تجنبها', duration: '15:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' },
      { id: 'l2-18', title: 'الاختبار النهائي والشهادة', duration: '10:00', videoUrl: 'https://www.youtube.com/embed/4t4kBkMsDbQ', type: 'video' }
    ]
  },
  {
    id: 'c3',
    title: 'Metasploit Framework - الاختراق المتقدم',
    description: 'دورة شاملة في Metasploit Framework. تعلم كيفية استغلال الثغرات، بناء الـ Payloads، وإدارة الجلسات باحترافية.',
    level: 'advanced',
    duration: '25 ساعة',
    lessons: 22,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    category: 'اختبار االاختراق',
    instructor: 'خالد المهندس',
    instructorBio: 'مؤسس Shatta Academy، حاصل على OSCP وOSCE مع 12 سنة خبرة في Red Teaming.',
    topics: ['Metasploit', 'Exploits', 'Payloads', 'Post-Exploitation', 'Meterpreter'],
    whatYouWillLearn: [
      'فهم بنية Metasploit بالكامل',
      'البحث عن Exploits واستخدامها',
      'بناء Custom Payloads',
      'تجاوز Antivirus باستخدام Encoders',
      'Post-Exploitation والتحكم الكامل'
    ],
    requirements: [
      'إتقان Kali Linux',
      'معرفة جيدة بالشبكات',
      'خبرة في Nmap وأساسيات الاختراق'
    ],
    lessonsList: [
      { id: 'l3-1', title: 'مقدمة عن Metasploit Framework', duration: '15:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-2', title: 'هيكلية MSF Console', duration: '18:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-3', title: 'البحث عن Exploits (search)', duration: '14:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-4', title: 'استخدام Exploit على هدف', duration: '22:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-5', title: 'أنواع Payloads واختيار الأنسب', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-6', title: 'Meterpreter - الجزء الأول', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-7', title: 'Meterpreter - الجزء الثاني', duration: '28:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-8', title: 'Post-Exploitation Modules', duration: '30:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-9', title: 'Privilege Escalation بـ MSF', duration: '26:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-10', title: 'تجاوز Antivirus بـ Encoders', duration: '24:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-11', title: 'MSFvenom - بناء Payloads', duration: '32:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-12', title: 'Listener و Handler Setup', duration: '16:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-13', title: 'Pivoting بين الشبكات', duration: '28:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-14', title: 'AutoRun Scripts', duration: '14:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-15', title: 'Resource Scripts', duration: '12:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-16', title: 'Lab: اختراق Windows Server', duration: '45:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'lab' },
      { id: 'l3-17', title: 'Lab: اختراق Linux Server', duration: '40:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'lab' },
      { id: 'l3-18', title: 'Lab: تجاوز Windows Defender', duration: '50:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'lab' },
      { id: 'l3-19', title: 'Armitage - الواجهة الرسومية', duration: '18:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-20', title: 'Cobalt Strike مقدمة', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-21', title: 'أفضل الممارسات والأخطاء', duration: '15:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'video' },
      { id: 'l3-22', title: 'الاختبار العملي النهائي', duration: '60:00', videoUrl: 'https://www.youtube.com/embed/8lR27r8Nd', type: 'lab' }
    ]
  },
  {
    id: 'c4',
    title: 'OWASP Top 10 - ثغرات الويب الشائعة',
    description: 'تعلم أشهر 10 ثغرات أمنية في تطبيقات الويب وفقاً لـ OWASP. ستتعلم كيفية اكتشافها واستغلالها وإصلاحها.',
    level: 'intermediate',
    duration: '20 ساعة',
    lessons: 16,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    category: 'هجمات ويب',
    instructor: 'علي الفني',
    instructorBio: 'باحث أمني متخصص في أمن تطبيقات الويب. اكتشف أكثر من 200 ثغرة في برامج Bug Bounty.',
    topics: ['SQL Injection', 'XSS', 'CSRF', 'IDOR', 'Security Misconfig'],
    whatYouWillLearn: [
      'فهم OWASP Top 10 بالتفصيل',
      'اكتشاف SQL Injection يدوياً وأوتوماتيكياً',
      'أنواع XSS وكيفية استغلالها',
      'CSRF و IDOR وثغرات المنطق',
      'كتابة تقارير Bug Bounty احترافية'
    ],
    requirements: [
      'فهم أساسي لتطوير الويب (HTML, JS)',
      'Kali Linux مثبت',
      'معرفة بأدوات Burp Suite أساسية'
    ],
    lessonsList: [
      { id: 'l4-1', title: 'مقدمة OWASP Top 10 2021', duration: '12:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-2', title: 'A01: Broken Access Control', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-3', title: 'A02: Cryptographic Failures', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-4', title: 'A03: Injection (SQL, NoSQL)', duration: '35:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-5', title: 'A04: Insecure Design', duration: '18:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-6', title: 'A05: Security Misconfiguration', duration: '22:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-7', title: 'A06: Vulnerable Components', duration: '16:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-8', title: 'A07: Authentication Failures', duration: '28:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-9', title: 'A08: Data Integrity Failures', duration: '14:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-10', title: 'A09: Logging Failures', duration: '12:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-11', title: 'A10: SSRF', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-12', title: 'Lab: SQL Injection على DVWA', duration: '40:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'lab' },
      { id: 'l4-13', title: 'Lab: XSS على Mutillidae', duration: '35:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'lab' },
      { id: 'l4-14', title: 'Lab: IDOR و Logic Flaws', duration: '30:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'lab' },
      { id: 'l4-15', title: 'كتابة تقارير Bug Bounty', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'video' },
      { id: 'l4-16', title: 'الاختبار النهائي العملي', duration: '50:00', videoUrl: 'https://www.youtube.com/embed/9TcD5YprIxk', type: 'lab' }
    ]
  },
  {
    id: 'c5',
    title: 'Burp Suite Masterclass',
    description: 'دورة شاملة في Burp Suite Professional. تعلم كيفية استخدام جميع أدوات Burp لاختبار أمن تطبيقات الويب.',
    level: 'intermediate',
    duration: '18 ساعة',
    lessons: 15,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    category: 'هجمات ويب',
    instructor: 'سارة المحترفة',
    instructorBio: 'مختبرة اختراق معتمدة (OSCP) متخصصة في اختبار تطبيقات الويب باستخدام Burp Suite.',
    topics: ['Burp Proxy', 'Repeater', 'Intruder', 'Scanner', 'Extensions'],
    whatYouWillLearn: [
      'إعداد Burp Suite Professional',
      'استخدام Proxy و Intercept',
      'Repeater لإعادة الطلبات',
      'Intruder للهجمات الآلية',
      'Scanner واكتشاف الثغرات تلقائياً'
    ],
    requirements: [
      'Burp Suite Community أو Professional',
      'فهم HTTP/HTTPS',
      'Kali Linux'
    ],
    lessonsList: [
      { id: 'l5-1', title: 'تثبيت وإعداد Burp Suite', duration: '15:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-2', title: 'Proxy و Intercept', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-3', title: 'Target و Site Map', duration: '14:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-4', title: 'Repeater - التعديل والإرسال', duration: '22:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-5', title: 'Intruder - الهجمات الآلية', duration: '30:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-6', title: 'Scanner - الفحص التلقائي', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-7', title: 'Sequencer و Decoder', duration: '18:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-8', title: 'Comparer و Extender', duration: '16:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-9', title: 'BApp Store وأفضل الإضافات', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-10', title: 'Macros و Session Handling', duration: '24:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-11', title: 'Lab: SQL Injection بـ Burp', duration: '35:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'lab' },
      { id: 'l5-12', title: 'Lab: Brute Force Login', duration: '30:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'lab' },
      { id: 'l5-13', title: 'Lab: IDOR Discovery', duration: '28:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'lab' },
      { id: 'l5-14', title: 'Project Files و Reporting', duration: '15:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' },
      { id: 'l5-15', title: 'نصائح احترافية واختتام', duration: '12:00', videoUrl: 'https://www.youtube.com/embed/G3hpAioZ38', type: 'video' }
    ]
  },
  {
    id: 'c6',
    title: 'Python للهكر الأخلاقي',
    description: 'تعلم لغة Python وكيفية استخدامها في بناء أدوات الاختراق الأخلاقي والأتمتة الأمنية.',
    level: 'beginner',
    duration: '16 ساعة',
    lessons: 14,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
    category: 'برمجة',
    instructor: 'فاطمة المبرمجة',
    instructorBio: 'مطورة Python متخصصة في أمن المعلومات. بنت أكثر من 50 أداة أمنية مفتوحة المصدر.',
    topics: ['Python Basics', 'Scapy', 'Socket', 'Requests', 'Automation'],
    whatYouWillLearn: [
      'أساسيات Python للأمن السيبراني',
      'بناء Port Scanner بـ Python',
      'استخدام Scapy لتحليل الشبكات',
      'أتمتة اختبار الاختراق',
      'بناء Web Scanner خاص بك'
    ],
    requirements: [
      'لا يشترط خبرة برمجية',
      'Kali Linux أو أي نظام Python',
      'حماس للتعلم!'
    ],
    lessonsList: [
      { id: 'l6-1', title: 'مقدمة Python للأمن السيبراني', duration: '12:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'video' },
      { id: 'l6-2', title: 'Variables, Loops, Functions', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'video' },
      { id: 'l6-3', title: 'File Handling و Regex', duration: '18:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'video' },
      { id: 'l6-4', title: 'Socket Programming', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'video' },
      { id: 'l6-5', title: 'بناء Port Scanner', duration: '35:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'lab' },
      { id: 'l6-6', title: 'Scapy - الجزء الأول', duration: '28:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'video' },
      { id: 'l6-7', title: 'Scapy - الجزء الثاني', duration: '30:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'video' },
      { id: 'l6-8', title: 'Requests و Web Scraping', duration: '22:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'video' },
      { id: 'l6-9', title: 'بناء Subdomain Scanner', duration: '30:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'lab' },
      { id: 'l6-10', title: 'Hash Cracker بـ Python', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'lab' },
      { id: 'l6-11', title: 'Keylogger بـ Python', duration: '28:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'lab' },
      { id: 'l6-12', title: 'Reverse Shell بـ Python', duration: '32:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'lab' },
      { id: 'l6-13', title: 'أتمتة Nmap بـ Python', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'video' },
      { id: 'l6-14', title: 'مشروع نهائي: Web Vuln Scanner', duration: '45:00', videoUrl: 'https://www.youtube.com/embed/3Kq1MIfTWCE', type: 'lab' }
    ]
  },
  {
    id: 'c7',
    title: 'Wireshark - تحليل حركة الشبكات',
    description: 'تعلم كيفية التقاط وتحليل حركة الشبكات باستخدام Wireshark. اكتشف الهجمات وحل مشاكل الشبكات.',
    level: 'intermediate',
    duration: '14 ساعة',
    lessons: 12,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    category: 'شبكات',
    instructor: 'عمر الخبير',
    instructorBio: 'مهندس شبكات وأمن سيبراني معتمد (CCNP Security, CEH).',
    topics: ['Wireshark', 'TCP/IP', 'Protocols', 'Packet Analysis', 'Troubleshooting'],
    whatYouWillLearn: [
      'التقاط الحزم (Packet Capture)',
      'فهم بروتوكولات TCP/IP',
      'تحليل HTTP/HTTPS Traffic',
      'اكتشاف ARP Spoofing',
      'تصفية الحزم باحترافية'
    ],
    requirements: [
      'فهم أساسي للشبكات',
      'Wireshark مثبت',
      'Kali Linux أو Windows'
    ],
    lessonsList: [
      { id: 'l7-1', title: 'مقدمة عن Wireshark', duration: '10:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' },
      { id: 'l7-2', title: 'تثبيت Wireshark على Kali', duration: '8:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' },
      { id: 'l7-3', title: 'التقاط الحزم (Capture)', duration: '18:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' },
      { id: 'l7-4', title: 'Display Filters الأساسية', duration: '22:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' },
      { id: 'l7-5', title: 'Capture Filters', duration: '16:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' },
      { id: 'l7-6', title: 'تحليل TCP Handshake', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' },
      { id: 'l7-7', title: 'تحليل HTTP Traffic', duration: '24:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' },
      { id: 'l7-8', title: 'تحليل DNS Queries', duration: '15:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' },
      { id: 'l7-9', title: 'اكتشاف ARP Spoofing', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' },
      { id: 'l7-10', title: 'اكتشاف Port Scanning', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' },
      { id: 'l7-11', title: 'Lab: تحليل هجوم حقيقي', duration: '35:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'lab' },
      { id: 'l7-12', title: 'توليد تقارير Wireshark', duration: '12:00', videoUrl: 'https://www.youtube.com/embed/TkCSr30UojM', type: 'video' }
    ]
  },
  {
    id: 'c8',
    title: 'Social Engineering - الهندسة الاجتماعية',
    description: 'تعلم فن خداع البشر لاستخراج المعلومات. فهم كيفية عمل هجمات التصيد والهندسة الاجتماعية وكيفية الحماية منها.',
    level: 'intermediate',
    duration: '12 ساعة',
    lessons: 10,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    category: 'هندسة اجتماعية',
    instructor: 'يوسف المبرمج',
    instructorBio: 'خبير في اختبار الاختراق الاجتماعي واختبار الوعي الأمني للموظفين.',
    topics: ['Phishing', 'Pretexting', 'OSINT', 'SET Toolkit', 'Awareness'],
    whatYouWillLearn: [
      'فهم علم النفس في الهندسة الاجتماعية',
      'بناء هجمات Phishing احترافية',
      'جمع معلومات OSINT',
      'استخدام Social Engineering Toolkit',
      'بناء برامج توعية أمنية'
    ],
    requirements: [
      'Kali Linux',
      'فهم أساسي للشبكات',
      'معرفة بـ HTML/JavaScript'
    ],
    lessonsList: [
      { id: 'l8-1', title: 'مقدمة عن الهندسة الاجتماعية', duration: '15:00', videoUrl: 'https://www.youtube.com/embed/u9dBGWVwMMA', type: 'video' },
      { id: 'l8-2', title: 'علم النفس في SE', duration: '22:00', videoUrl: 'https://www.youtube.com/embed/u9dBGWVwMMA', type: 'video' },
      { id: 'l8-3', title: 'OSINT - جمع المعلومات', duration: '28:00', videoUrl: 'https://www.youtube.com/embed/u9dBGWVwMMA', type: 'video' },
      { id: 'l8-4', title: 'Phishing Emails - البناء', duration: '30:00', videoUrl: 'https://www.youtube.com/embed/u9dBGWVwMMA', type: 'video' },
      { id: 'l8-5', title: 'Phishing Pages - التصميم', duration: '35:00', videoUrl: 'https://www.youtube.com/embed/u9dBGWVwMMA', type: 'lab' },
      { id: 'l8-6', title: 'SET Toolkit - الجزء الأول', duration: '25:00', videoUrl: 'https://www.youtube.com/embed/u9dBGWVwMMA', type: 'video' },
      { id: 'l8-7', title: 'SET Toolkit - الجزء الثاني', duration: '28:00', videoUrl: 'https://www.youtube.com/embed/u9dBGWVwMMA', type: 'video' },
      { id: 'l8-8', title: 'Pretexting و Impersonation', duration: '20:00', videoUrl: 'https://www.youtube.com/embed/u9dBGWVwMMA', type: 'video' },
      { id: 'l8-9', title: 'Lab: هجوم Phishing كامل', duration: '45:00', videoUrl: 'https://www.youtube.com/embed/u9dBGWVwMMA', type: 'lab' },
      { id: 'l8-10', title: 'الحماية من SE وتوعية الموظفين', duration: '18:00', videoUrl: 'https://www.youtube.com/embed/u9dBGWVwMMA', type: 'video' }
    ]
  }
];

export const tools: Tool[] = [
  {
    id: 't1',
    name: 'Nmap',
    description: 'أداة اكتشاف الشبكات والمسح الأمني الأكثر شهرة في العالم. تستخدم لاكتشاف المنافذ المفتوحة والخدمات وأنظمة التشغيل.',
    category: 'اكتشاف شبكات',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://nmap.org/download.html',
    version: '7.94',
    icon: 'Network',
    commands: [
      'nmap -sS 192.168.1.1',
      'nmap -sV -O 192.168.1.0/24',
      'nmap -p- --open 192.168.1.1',
      'nmap -sU -p 53,161 192.168.1.1'
    ],
    usage: 'nmap [Scan Type] [Options] {target}',
    features: ['SYN Stealth Scan', 'OS Detection', 'Service Version Detection', 'NSE Scripts', 'Vulnerability Scanning']
  },
  {
    id: 't2',
    name: 'Metasploit Framework',
    description: 'إطار عمل شامل لاختبار الاختراق والتطوير يحتوي على آلاف الـ Exploits والـ Payloads والـ Auxiliaries.',
    category: 'اختبار االاختراق',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://www.metasploit.com/download',
    version: '6.3.0',
    icon: 'Bug',
    commands: [
      'msfconsole',
      'search type:exploit name:ms17',
      'use exploit/windows/smb/ms17_010_eternalblue',
      'set RHOSTS 192.168.1.10',
      'exploit'
    ],
    usage: 'msfconsole → search → use → set → exploit',
    features: ['Exploit Database', 'Payload Generation', 'Post-Exploitation', 'Meterpreter', 'Resource Scripts']
  },
  {
    id: 't3',
    name: 'Wireshark',
    description: 'محلل البروتوكولات الأكثر شهرة للمحالة وتحليل الشبكات. يدعم أكثر من 2000 بروتوكول.',
    category: 'محلل شبكات',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://www.wireshark.org/download.html',
    version: '4.2.0',
    icon: 'Activity',
    commands: [
      'sudo wireshark',
      'tshark -i eth0',
      'tshark -r capture.pcap',
      'tshark -i eth0 -w output.pcap'
    ],
    usage: 'wireshark [options] [capture file]',
    features: ['Live Capture', 'Deep Packet Inspection', 'Protocol Analysis', 'Color Coding', 'Export Objects']
  },
  {
    id: 't4',
    name: 'Burp Suite',
    description: 'منصة شاملة لاختبار أمن التطبيقات الويبية. يستخدمها أكثر من 50,000 محترف أمن حول العالم.',
    category: 'اختبار ويب',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://portswigger.net/burp/communitydownload',
    version: '2024.1.1',
    icon: 'Globe',
    commands: [
      'java -jar burpsuite.jar',
      'Proxy → Intercept is on',
      'Repeater → Modify & Send',
      'Intruder → Sniper Attack'
    ],
    usage: 'GUI Application - Proxy, Repeater, Intruder, Scanner',
    features: ['Proxy Intercept', 'Repeater', 'Intruder', 'Scanner', 'Extensions (BApp)']
  },
  {
    id: 't5',
    name: 'Aircrack-ng',
    description: 'مجموعة أدوات كاملة لاختبار أمن الشبكات اللاسلكية (WEP, WPA, WPA2).',
    category: 'اختبار وايرلس',
    os: ['linux', 'windows'],
    downloadUrl: 'https://www.aircrack-ng.org/downloads.html',
    version: '1.7',
    icon: 'Wifi',
    commands: [
      'airmon-ng start wlan0',
      'airodump-ng wlan0mon',
      'airodump-ng -c 6 --bssid XX:XX wlan0mon',
      'aireplay-ng -0 10 -a XX:XX wlan0mon',
      'aircrack-ng -w wordlist.txt capture.cap'
    ],
    usage: 'airmon-ng → airodump-ng → aireplay-ng → aircrack-ng',
    features: ['WEP Cracking', 'WPA/WPA2 Cracking', 'Deauth Attacks', 'Packet Injection', 'Monitoring']
  },
  {
    id: 't6',
    name: 'John the Ripper',
    description: 'أداة كسر كلمات المرور السريعة والقوية. تدعم Hashing Algorithms متعددة.',
    category: 'كسر كلمات مرور',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://www.openwall.com/john/',
    version: '1.9.0-jumbo-1',
    icon: 'Key',
    commands: [
      'john --wordlist=passwords.txt hash.txt',
      'john --show hash.txt',
      'john --incremental hash.txt',
      'zip2john file.zip > hash.txt'
    ],
    usage: 'john [options] password-file',
    features: ['Dictionary Attack', 'Brute Force', 'Rule-based Attack', 'Multiple Hash Types', 'GPU Support']
  },
  {
    id: 't7',
    name: 'Sqlmap',
    description: 'أداة أوتوماتيكية لاكتشاف واستغلال ثغرات SQL Injection. تدعم MySQL, Oracle, PostgreSQL, MSSQL, and more.',
    category: 'اختبار ويب',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://sqlmap.org/',
    version: '1.7.12',
    icon: 'Database',
    commands: [
      'sqlmap -u "http://target.com/page.php?id=1"',
      'sqlmap -u URL --dbs',
      'sqlmap -u URL -D database --tables',
      'sqlmap -u URL -D db -T users --dump'
    ],
    usage: 'sqlmap -u <URL> [options]',
    features: ['Auto SQLi Detection', 'Database Enumeration', 'Data Dumping', 'OS Shell', 'WAF Bypass']
  },
  {
    id: 't8',
    name: 'Hydra',
    description: 'أداة هجوم سريع على مختلف البروتوكولات. تدعم FTP, SSH, HTTP, SMB, RDP, and 50+ protocols.',
    category: 'هجوم بروتوكولات',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://github.com/vanhauser-thc/thc-hydra',
    version: '9.5',
    icon: 'Zap',
    commands: [
      'hydra -l admin -P passwords.txt ssh://192.168.1.1',
      'hydra -L users.txt -p password ftp://target',
      'hydra -l admin -P pass.txt http-post-form "/login:u=^USER^&p=^PASS^:Invalid"'
    ],
    usage: 'hydra [options] target service',
    features: ['50+ Protocols', 'Multi-threaded', 'Resume Support', 'Custom Modules', 'Fast Brute Force']
  },
  {
    id: 't9',
    name: 'Gobuster',
    description: 'أداة للكشف عن المجلدات والملفات المخفية في المواقع باستخدام Directory Brute Force.',
    category: 'كشف ملفات',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://github.com/OJ/gobuster',
    version: '3.6.0',
    icon: 'Search',
    commands: [
      'gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt',
      'gobuster dns -d target.com -w subdomains.txt',
      'gobuster vhost -u http://target.com -w vhosts.txt'
    ],
    usage: 'gobuster [mode] -u <URL> -w <wordlist>',
    features: ['Directory Brute Force', 'DNS Subdomain Discovery', 'Virtual Host Discovery', 'Fast & Lightweight']
  },
  {
    id: 't10',
    name: 'Nikto',
    description: 'ماسح أمن ويب يكشف عن الثغرات المعروفة والملفات الخطرة والإعدادات الخاطئة.',
    category: 'ماسح أمن',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://github.com/sullo/nikto',
    version: '2.5.0',
    icon: 'Scan',
    commands: [
      'nikto -h http://target.com',
      'nikto -h 192.168.1.1 -p 80,443',
      'nikto -h target.com -output report.html'
    ],
    usage: 'nikto -h <host> [options]',
    features: ['Known Vulnerability Scan', 'Dangerous File Detection', 'Server Config Check', 'SSL/TLS Testing', 'Report Generation']
  },
  {
    id: 't11',
    name: 'Hashcat',
    description: 'أسرع كسار كلمات مرور باستخدام الكرت الرسومي (GPU). يدعم 300+ Hashing Algorithm.',
    category: 'كسر كلمات مرور',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://hashcat.net/hashcat/',
    version: '6.2.6',
    icon: 'Cpu',
    commands: [
      'hashcat -m 0 hash.txt wordlist.txt',
      'hashcat -m 1000 -a 3 hash.txt ?l?l?l?l?l?l',
      'hashcat -m 2500 capture.hccapx wordlist.txt'
    ],
    usage: 'hashcat -m <hash-type> -a <attack-mode> hashfile wordlist',
    features: ['GPU Acceleration', '300+ Hash Types', 'Rule-based Attack', 'Mask Attack', 'Distributed Cracking']
  },
  {
    id: 't12',
    name: 'OWASP ZAP',
    description: 'ماسح أمن تطبيقات ويب مفتوح المصدر من OWASP. بديل مجاني لـ Burp Suite.',
    category: 'اختبار ويب',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://www.zaproxy.org/download/',
    version: '2.14.0',
    icon: 'Shield',
    commands: [
      'zaproxy',
      'zap-cli --zap-path /usr/share/zaproxy quick-scan --self-contained --start-options "-config api.disablekey=true" http://target.com'
    ],
    usage: 'GUI or zap-cli for automation',
    features: ['Auto Spider', 'Active Scan', 'Passive Scan', 'Fuzzer', 'API Automation']
  },
  {
    id: 't13',
    name: 'Maltego',
    description: 'أداة OSINT لجمع المعلومات وربطها بشكل رسومي. مثالية لجمع بيانات الهدف.',
    category: 'OSINT',
    os: ['linux', 'windows', 'macos'],
    downloadUrl: 'https://www.maltego.com/downloads/',
    version: '4.6.0',
    icon: 'Network',
    commands: ['GUI Application - Drag & Drop'],
    usage: 'GUI Application with Transforms',
    features: ['Entity Mapping', 'OSINT Transforms', 'Graph Visualization', 'Custom Transforms', 'Collaboration']
  },
  {
    id: 't14',
    name: 'Recon-ng',
    description: 'إطار عمل OSINT مكتوب بـ Python. يجمع معلومات من مصادر متعددة تلقائياً.',
    category: 'OSINT',
    os: ['linux', 'macos'],
    downloadUrl: 'https://github.com/lanmaster53/recon-ng',
    version: '5.1.2',
    icon: 'Search',
    commands: [
      'recon-ng',
      'marketplace install all',
      'modules load recon/domains-hosts/brute_hosts',
      'run'
    ],
    usage: 'recon-ng → marketplace → modules → run',
    features: ['Modular Framework', 'Multiple Data Sources', 'Database Storage', 'Report Generation', 'API Integration']
  },
  {
    id: 't15',
    name: 'Empire',
    description: 'إطار عمل Post-Exploitation يستخدم PowerShell وPython agents. بديل لـ Meterpreter.',
    category: 'Post-Exploitation',
    os: ['linux'],
    downloadUrl: 'https://github.com/BC-SECURITY/Empire',
    version: '4.10.0',
    icon: 'Terminal',
    commands: [
      'sudo powershell-empire server',
      'sudo powershell-empire client',
      'uselistener http',
      'usestager windows/launcher_bat'
    ],
    usage: 'Empire Server + Client → Listener → Stager → Agent',
    features: ['PowerShell Agents', 'Python Agents', 'Modular Post-Exploitation', 'Credential Harvesting', 'Persistence']
  }
];

export const books: Book[] = [
  {
    id: 'b1',
    title: 'The Web Application Hacker\'s Handbook 2nd Edition',
    author: 'Dafydd Stuttard & Marcus Pinto',
    description: 'الكتاب الأشهر والأكثر شمولاً في عالم اختبار اختراق تطبيقات الويب. يغطي جميع أنواع ثغرات الويب مع أمثلة عملية.',
    pages: 912,
    category: 'اختبار ويب',
    downloadUrl: 'https://www.pdfdrive.com/the-web-application-hackers-handbook-d15803394.html',
    cover: 'https://m.media-amazon.com/images/I/61k5MtZbBFL._AC_UF1000,1000_QL80_.jpg',
    language: 'English',
    year: 2011,
    rating: 4.8
  },
  {
    id: 'b2',
    title: 'Hacking: The Art of Exploitation 2nd Edition',
    author: 'Jon Erickson',
    description: 'كتاب شاملة يغطي في عمق الاختراق والإكسبلويتات. يبدأ من C programming حتى Buffer Overflow وShellcode.',
    pages: 488,
    category: 'اختراق عام',
    downloadUrl: 'https://www.pdfdrive.com/hacking-the-art-of-exploitation-d15785271.html',
    cover: 'https://m.media-amazon.com/images/I/61x2Kz5o4ZL._AC_UF1000,1000_QL80_.jpg',
    language: 'English',
    year: 2008,
    rating: 4.7
  },
  {
    id: 'b3',
    title: 'Metasploit: The Penetration Tester\'s Guide',
    author: 'David Kennedy, Jim O\'Gorman',
    description: 'دليل شامل لاستخدام Metasploit Framework في اختبار الاختراق. يغطي Exploits, Payloads, Meterpreter, Post-Exploitation.',
    pages: 328,
    category: 'اختبار االاختراق',
    downloadUrl: 'https://www.pdfdrive.com/metasploit-the-penetration-testers-guide-d15785272.html',
    cover: 'https://m.media-amazon.com/images/I/51yM7mR2sSL._AC_UF1000,1000_QL80_.jpg',
    language: 'English',
    year: 2011,
    rating: 4.6
  },
  {
    id: 'b4',
    title: 'Black Hat Python 2nd Edition',
    author: 'Justin Seitz & Tim Arnold',
    description: 'كتاب يعلمك كيفية بناء أدوات الاختراق باستخدام Python. يغطي Networking, Web Hacking, Forensics, and more.',
    pages: 216,
    category: 'برمجة',
    downloadUrl: 'https://www.pdfdrive.com/black-hat-python-python-programming-for-hackers-and-pentesters-d15803395.html',
    cover: 'https://m.media-amazon.com/images/I/61hOpO5JzYL._AC_UF1000,1000_QL80_.jpg',
    language: 'English',
    year: 2021,
    rating: 4.5
  },
  {
    id: 'b5',
    title: 'The Art of Memory Forensics',
    author: 'Michael Hale Ligh, Andrew Case',
    description: 'كتاب شاملة في تحليل ذاكرة الجهاز والتحقيق الجنائي الرقمي. يغطي Windows, Linux, and Mac memory analysis.',
    pages: 800,
    category: 'تحقيق جنائي',
    downloadUrl: 'https://www.pdfdrive.com/the-art-of-memory-forensics-d15803396.html',
    cover: 'https://m.media-amazon.com/images/I/51X7dEUFgoL._AC_UF1000,1000_QL80_.jpg',
    language: 'English',
    year: 2014,
    rating: 4.7
  },
  {
    id: 'b6',
    title: 'Practical Malware Analysis',
    author: 'Michael Sikorski & Andrew Honig',
    description: 'دليل عملي لتحليل البرامج الضارة وفهم سلوكها. يغطي Static Analysis, Dynamic Analysis, and Reverse Engineering.',
    pages: 800,
    category: 'تحليل برامج',
    downloadUrl: 'https://www.pdfdrive.com/practical-malware-analysis-d15803397.html',
    cover: 'https://m.media-amazon.com/images/I/61N+FGx0XfL._AC_UF1000,1000_QL80_.jpg',
    language: 'English',
    year: 2012,
    rating: 4.8
  },
  {
    id: 'b7',
    title: 'Network Security Assessment 3rd Edition',
    author: 'Chris McNab',
    description: 'كتاب في تقييم أمن الشبكات واكتشاف الثغرات. يغطي Internal and External Network Assessment.',
    pages: 500,
    category: 'شبكات',
    downloadUrl: 'https://www.pdfdrive.com/network-security-assessment-d15803398.html',
    cover: 'https://m.media-amazon.com/images/I/61x2Kz5o4ZL._AC_UF1000,1000_QL80_.jpg',
    language: 'English',
    year: 2016,
    rating: 4.4
  },
  {
    id: 'b8',
    title: 'RTFM: Red Team Field Manual',
    author: 'Ben Clark',
    description: 'دليل ميداني سريع لفريق Red Team. يحتوي على Commands وScripts لأدوات Pentesting الشائعة.',
    pages: 100,
    category: 'اختبار االاختراق',
    downloadUrl: 'https://www.pdfdrive.com/rtfm-red-team-field-manual-d15803399.html',
    cover: 'https://m.media-amazon.com/images/I/51X7dEUFgoL._AC_UF1000,1000_QL80_.jpg',
    language: 'English',
    year: 2014,
    rating: 4.6
  },
  {
    id: 'b9',
    title: 'Penetration Testing: A Hands-On Introduction to Hacking',
    author: 'Georgia Weidman',
    description: 'مقدمة عملية لاختبار الاختراق. يغطي من الصفر حتى بناء Lab كامل واختباره.',
    pages: 520,
    category: 'اختبار االاختراق',
    downloadUrl: 'https://www.pdfdrive.com/penetration-testing-d15803400.html',
    cover: 'https://m.media-amazon.com/images/I/61hOpO5JzYL._AC_UF1000,1000_QL80_.jpg',
    language: 'English',
    year: 2014,
    rating: 4.5
  },
  {
    id: 'b10',
    title: 'Social Engineering: The Art of Human Hacking',
    author: 'Christopher Hadnagy',
    description: 'كتاب شاملة في الهندسة الاجتماعية وعلم النفس المستخدم في خداع البشر لاستخراج المعلومات.',
    pages: 320,
    category: 'هندسة اجتماعية',
    downloadUrl: 'https://www.pdfdrive.com/social-engineering-d15803401.html',
    cover: 'https://m.media-amazon.com/images/I/51yM7mR2sSL._AC_UF1000,1000_QL80_.jpg',
    language: 'English',
    year: 2010,
    rating: 4.4
  }
];

export const categories = {
  courses: ['أنظمة تشغيل', 'اكتشاف شبكات', 'اختبار االاختراق', 'شبكات', 'هجمات ويب', 'برمجة', 'هندسة اجتماعية', 'تحقيق جنائي'],
  tools: ['اكتشاف شبكات', 'اختبار االاختراق', 'محلل شبكات', 'اختبار ويب', 'اختبار وايرلس', 'كسر كلمات مرور', 'هجوم بروتوكولات', 'كشف ملفات', 'ماسح أمن', 'OSINT', 'Post-Exploitation'],
  books: ['اختبار ويب', 'اختراق عام', 'أساسيات', 'اختبار االاختراق', 'برمجة', 'تحقيق جنائي', 'تحليل برامج', 'شبكات', 'هندسة اجتماعية']
};

export const levelLabels = {
  beginner: { label: 'مبتدئ', color: 'bg-green-600' },
  intermediate: { label: 'متوسط', color: 'bg-yellow-600' },
  advanced: { label: 'متقدم', color: 'bg-fire-600' }
};
