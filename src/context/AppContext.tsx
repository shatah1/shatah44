import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'course' | 'book' | 'tool' | 'system';
  read: boolean;
  createdAt: string;
}

interface AppContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
  markNotificationRead: (id: string) => void;
  markAllRead: () => void;
  unreadCount: number;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isAdmin: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const ADMIN_CREDENTIALS = { email: 'admin@shatta.academy', password: 'admin123' };

const defaultNotifications: Notification[] = [
  {
    id: 'n1',
    title: 'كورس جديد!',
    message: 'تم إضافة كورس "Python للهكر الأخلاقي"',
    type: 'course',
    read: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'n2',
    title: 'أداة جديدة',
    message: 'تم إضافة أداة Hashcat إلى مخزن الأدوات',
    type: 'tool',
    read: false,
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 'n3',
    title: 'كتاب جديد',
    message: 'تم إضافة كتاب "Black Hat Python" إلى المكتبة',
    type: 'book',
    read: true,
    createdAt: new Date(Date.now() - 172800000).toISOString()
  }
];

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('shatta_user');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const saved = localStorage.getItem('shatta_notifications');
    return saved ? JSON.parse(saved) : defaultNotifications;
  });
  
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('shatta_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('shatta_notifications', JSON.stringify(notifications));
  }, [notifications]);

  const login = useCallback((email: string, password: string): boolean => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const adminUser: User = {
        id: 'admin-1',
        name: 'المدير',
        email: ADMIN_CREDENTIALS.email,
        role: 'admin'
      };
      setUser(adminUser);
      return true;
    }
    
    const users = JSON.parse(localStorage.getItem('shatta_users') || '[]');
    const found = users.find((u: any) => u.email === email && u.password === password);
    if (found) {
      setUser({
        id: found.id,
        name: found.name,
        email: found.email,
        role: 'user'
      });
      return true;
    }
    return false;
  }, []);

  const register = useCallback((name: string, email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('shatta_users') || '[]');
    if (users.some((u: any) => u.email === email)) {
      return false;
    }
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password
    };
    users.push(newUser);
    localStorage.setItem('shatta_users', JSON.stringify(users));
    setUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: 'user'
    });
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'createdAt'>) => {
    setNotifications(prev => [{
      ...notification,
      id: `n-${Date.now()}`,
      createdAt: new Date().toISOString()
    }, ...prev]);
  }, []);

  const markNotificationRead = useCallback((id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;
  const isAdmin = user?.role === 'admin';

  return (
    <AppContext.Provider value={{
      user,
      login,
      register,
      logout,
      notifications,
      addNotification,
      markNotificationRead,
      markAllRead,
      unreadCount,
      searchQuery,
      setSearchQuery,
      isAdmin
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
