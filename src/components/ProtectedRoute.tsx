import { Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export function AuthRoute({ children }: { children: React.ReactNode }) {
  const { user } = useApp();
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, isAdmin } = useApp();
  if (!user) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/" replace />;
  return <>{children}</>;
}

export function GuestRoute({ children }: { children: React.ReactNode }) {
  const { user } = useApp();
  if (user) return <Navigate to="/" replace />;
  return <>{children}</>;
}
