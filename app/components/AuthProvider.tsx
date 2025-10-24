'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user is authenticated
    const authenticated = localStorage.getItem('authenticated') === 'true';
    setIsAuthenticated(authenticated);

    // Redirect to login if not authenticated and not already on login page
    if (!authenticated && pathname !== '/login') {
      router.push('/login');
    } else if (authenticated && pathname === '/login') {
      router.push('/');
    }
  }, [pathname, router]);

  // Show nothing while checking authentication
  if (isAuthenticated === null) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '4px solid #e5e5e5',
          borderTop: '4px solid #667eea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}

