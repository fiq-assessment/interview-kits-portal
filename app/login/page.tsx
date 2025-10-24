'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogIn, Lock, User, AlertCircle, UserCircle } from 'lucide-react';

// Frontend-only credentials (no API calls needed)
const validCredentials = [
  { username: 'fiq-fe-beginner-2024', password: 'Kx9#mP2vL@nR8qT!', role: 'Frontend', level: 'Beginner', test: 'Product Catalog', testId: 'fe-beginner' },
  { username: 'fiq-fe-inter-2024', password: 'Zy4$wB7jN!hQ3sV@pF', role: 'Frontend', level: 'Intermediate', test: 'Issue Tracker', testId: 'fe-intermediate' },
  { username: 'fiq-fe-expert-2024', password: 'Gm6#Dt9Rx!Wk2Lc$', role: 'Frontend', level: 'Expert', test: 'Virtualized Logs', testId: 'fe-expert' },
  { username: 'fiq-be-beginner-2024', password: 'Pq5@Hn8Vb#Yx1Jt!', role: 'Backend', level: 'Beginner', test: 'Products CRUD API', testId: 'be-beginner' },
  { username: 'fiq-be-inter-2024', password: 'Fw3!Zr7Km@Sg9Nv#Qc', role: 'Backend', level: 'Intermediate', test: 'Orders & Checkout', testId: 'be-intermediate' },
  { username: 'fiq-be-expert-2024', password: 'Bj4$Xl6Tp!Mh8Wd@', role: 'Backend', level: 'Expert', test: 'RBAC Platform', testId: 'be-expert' },
  { username: 'fiq-fs-beginner-2024', password: 'Cv2#Qk5Rf@Yp9Lg!', role: 'Full-Stack', level: 'Beginner', test: 'Wellness Journal', testId: 'fs-beginner' },
  { username: 'fiq-fs-inter-2024', password: 'Nh7!Ws3Dz$Jm6Xb@Tk', role: 'Full-Stack', level: 'Intermediate', test: 'Shipments Management', testId: 'fs-intermediate' },
  { username: 'fiq-fs-expert-2024', password: 'Rg8@Lv4Fn#Cq1Hp$', role: 'Full-Stack', level: 'Expert', test: 'Admin Panel', testId: 'fs-expert' },
];

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<'login' | 'name'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authenticatedCredential, setAuthenticatedCredential] = useState<any>(null);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay for realistic UX
    await new Promise(resolve => setTimeout(resolve, 500));

    // Verify credentials on frontend
    const credential = validCredentials.find(
      c => c.username === username && c.password === password
    );

    if (credential) {
      // Credentials valid
      setAuthenticatedCredential(credential);
      setIsLoading(false);
      setStep('name');
    } else {
      // Invalid credentials
      setError('Invalid username or password. Please check the credentials provided to you.');
      setIsLoading(false);
    }
  };

  const handleNameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay for realistic UX
    await new Promise(resolve => setTimeout(resolve, 300));

    // Store authentication in localStorage
    localStorage.setItem('authenticated', 'true');
    localStorage.setItem('user', JSON.stringify({
      username: authenticatedCredential.username,
      role: authenticatedCredential.role,
      level: authenticatedCredential.level,
      test: authenticatedCredential.test,
      testId: authenticatedCredential.testId,
      candidateName: candidateName
    }));
    router.push('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e8edf2 100%)',
      padding: '2rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        maxWidth: '480px',
        width: '100%',
        padding: '3rem'
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto' }}>
            <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#333333">
              Fulfillment<tspan fill="#ff6b35">IQ</tspan>
            </text>
          </svg>
          <p style={{
            fontSize: '0.875rem',
            color: '#666',
            marginTop: '0.5rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Technical Interview Portal
          </p>
        </div>

        {step === 'login' ? (
          <>
            {/* Login Title */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#ff6b35',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.25)'
              }}>
                <Lock size={32} color="white" />
              </div>
              <h1 style={{
                fontSize: '1.875rem',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '0.5rem'
              }}>
                Candidate Login
              </h1>
              <p style={{
                fontSize: '0.9375rem',
                color: '#666'
              }}>
                Enter your assigned credentials to access your test
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div style={{
                background: '#fee2e2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                padding: '0.875rem 1rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <AlertCircle size={20} color="#dc2626" />
                <p style={{
                  fontSize: '0.875rem',
                  color: '#991b1b',
                  margin: 0
                }}>
                  {error}
                </p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#333',
              marginBottom: '0.5rem'
            }}>
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <User size={20} color="#999" style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)'
              }} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem 0.875rem 3rem',
                  border: '2px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
              />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#333',
              marginBottom: '0.5rem'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={20} color="#999" style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)'
              }} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem 0.875rem 3rem',
                  border: '2px solid #e5e5e5',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
              />
            </div>
          </div>

              <button
                type="submit"
                disabled={isLoading}
              style={{
                width: '100%',
                padding: '1rem',
                background: isLoading 
                  ? '#9ca3af' 
                  : '#ff6b35',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: isLoading ? 'none' : '0 4px 12px rgba(255, 107, 53, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = '#e85d2a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.background = '#ff6b35';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.3)';
                }
              }}
              >
                {isLoading ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '3px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '3px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <LogIn size={20} />
                    <span>Continue</span>
                  </>
                )}
              </button>
            </form>

            {/* Info Box */}
            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              background: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <p style={{
                fontSize: '0.8125rem',
                color: '#666',
                lineHeight: '1.6',
                margin: 0,
                textAlign: 'center'
              }}>
                <strong style={{ color: '#333' }}>Note:</strong> Your credentials have been provided by the interview coordinator. 
                Contact them if you need assistance.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Name Input Step */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#ff6b35',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.25)'
              }}>
                <UserCircle size={32} color="white" />
              </div>
              <h1 style={{
                fontSize: '1.875rem',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '0.5rem'
              }}>
                Welcome!
              </h1>
              <p style={{
                fontSize: '0.9375rem',
                color: '#666'
              }}>
                Please enter your full name to continue
              </p>
            </div>

            {/* Success Message */}
            <div style={{
              background: '#dcfce7',
              border: '1px solid #86efac',
              borderRadius: '8px',
              padding: '0.875rem 1rem',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '0.875rem',
                color: '#166534',
                margin: 0,
                fontWeight: 600
              }}>
                ✓ Credentials verified for {authenticatedCredential?.test}
              </p>
            </div>

            {/* Name Form */}
            <form onSubmit={handleNameSubmit}>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '0.5rem'
                }}>
                  Full Name
                </label>
                <div style={{ position: 'relative' }}>
                  <UserCircle size={20} color="#999" style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }} />
                  <input
                    type="text"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="e.g., John Smith"
                    required
                    minLength={2}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem 0.875rem 3rem',
                      border: '2px solid #e5e5e5',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                    autoFocus
                  />
                </div>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#999',
                  marginTop: '0.5rem',
                  marginLeft: '0.25rem'
                }}>
                  This will be used to identify your submission
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading || candidateName.trim().length < 2}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: (isLoading || candidateName.trim().length < 2)
                    ? '#9ca3af' 
                    : '#ff6b35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: (isLoading || candidateName.trim().length < 2) ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: (isLoading || candidateName.trim().length < 2) ? 'none' : '0 4px 12px rgba(255, 107, 53, 0.3)'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading && candidateName.trim().length >= 2) {
                    e.currentTarget.style.background = '#e85d2a';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading && candidateName.trim().length >= 2) {
                    e.currentTarget.style.background = '#ff6b35';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.3)';
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '3px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '3px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    <span>Starting Interview...</span>
                  </>
                ) : (
                  <>
                    <LogIn size={20} />
                    <span>Start Interview</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

