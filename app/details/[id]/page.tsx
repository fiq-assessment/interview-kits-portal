'use client';

import { useParams, useRouter } from 'next/navigation';
import { exercises } from '../../data/exercises';
import { Clock, Github, ClipboardList, CheckSquare, Package, AlertTriangle, Ban, Rocket, LogOut, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ExerciseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('user');
    router.push('/login');
  };
  
  const exercise = exercises.find(e => e.id === id);
  
  if (!exercise) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Exercise Not Found</h1>
        <button 
          onClick={() => router.push('/')}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#667eea', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          ← Back to Portal
        </button>
      </div>
    );
  }

  const getLevelColor = (level: string) => {
    if (level === 'Beginner') return '#10b981';
    if (level === 'Intermediate') return '#f59e0b';
    return '#ef4444';
  };

  const getRoleColor = (role: string) => {
    if (role === 'Frontend') return '#ff6b35';
    if (role === 'Backend') return '#ff8c42';
    return '#ffa05c';
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      padding: '1.5rem 1rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header with Name and Logout */}
        {user && (
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem 1.25rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: '12px',
            marginBottom: '1.25rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(255, 107, 53, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <svg width="160" height="40" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#333333">
                  Fulfillment<tspan fill="#ff6b35">IQ</tspan>
                </text>
              </svg>
              <div style={{
                height: '24px',
                width: '1px',
                background: '#e5e7eb'
              }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)'
                }}></div>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.01em' }}>
                  {user.candidateName}
                </p>
              </div>
            </div>
        <button 
              onClick={handleLogout}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: 'white', 
                color: '#ff6b35',
                border: '2px solid #ff6b35',
            borderRadius: '10px',
            fontSize: '0.9375rem',
            fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
            alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(255, 107, 53, 0.15)'
          }}
              onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ff6b35';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 107, 53, 0.3)';
          }}
              onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#ff6b35';
            e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 107, 53, 0.15)';
          }}
        >
              <LogOut size={18} />
              Logout
        </button>
          </div>
        )}

        {/* Hero Card */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)', 
          borderRadius: '16px', 
          padding: '1.5rem 1.75rem',
          marginBottom: '1.25rem',
          boxShadow: '0 20px 60px rgba(255, 107, 53, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(30%, -30%)'
          }}></div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', position: 'relative' }}>
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'inline-block',
                padding: '0.375rem 0.875rem',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                marginBottom: '0.75rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <span style={{ fontSize: '0.8125rem', color: 'white', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  🎯 Your Challenge
                </span>
              </div>
              <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', color: 'white', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                {exercise.title}
              </h1>
            </div>

            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              padding: '1.125rem 1.5rem', 
              background: 'rgba(255, 255, 255, 0.95)', 
              borderRadius: '16px',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              flexShrink: 0,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Clock size={28} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.25rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em' }}>
                  Time Limit
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.01em' }}>
                  {exercise.time}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
          borderRadius: '16px', 
          padding: '1.25rem',
          marginBottom: '1.25rem',
          boxShadow: '0 8px 32px rgba(14, 165, 233, 0.15)',
          border: '2px solid #bae6fd'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(14, 165, 233, 0.25)'
            }}>
              <Package size={20} color="white" strokeWidth={2.5} />
            </div>
            <h2 style={{ fontSize: '1.5rem', color: '#075985', margin: 0, fontWeight: 700, letterSpacing: '-0.01em' }}>
              Technology Stack
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {exercise.tech.map((tech: string) => (
              <span key={tech} style={{
                background: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.9375rem',
                color: '#0284c7',
                border: '2px solid #bae6fd',
                fontWeight: 600,
                boxShadow: '0 2px 4px rgba(14, 165, 233, 0.1)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem Statement */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', 
          borderRadius: '16px', 
          padding: '1.25rem',
          marginBottom: '1.25rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(255, 107, 53, 0.25)'
              }}>
                <ClipboardList size={20} color="white" strokeWidth={2.5} />
              </div>
              <h2 style={{ fontSize: '1.5rem', color: '#1a1a1a', margin: 0, fontWeight: 700, letterSpacing: '-0.01em' }}>
                Problem Statement
              </h2>
            </div>
            <a 
              href={exercise.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.125rem',
                background: '#1a1a1a',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '10px',
                fontSize: '0.875rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.background = '#ff6b35';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.background = '#1a1a1a';
              }}
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </a>
          </div>
          <p style={{ lineHeight: '1.7', color: '#4b5563', fontSize: '1rem', margin: 0 }}>
            {exercise.description}
          </p>
        </div>

        {/* Tasks */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', 
          borderRadius: '16px', 
          padding: '1.25rem',
          marginBottom: '1.25rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(16, 185, 129, 0.25)'
            }}>
              <CheckSquare size={20} color="white" strokeWidth={2.5} />
            </div>
            <h2 style={{ fontSize: '1.5rem', color: '#1a1a1a', margin: 0, fontWeight: 700, letterSpacing: '-0.01em' }}>
              Required Tasks
            </h2>
          </div>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.6', color: '#4b5563', fontSize: '1rem', margin: 0 }}>
            {exercise.tasks.map((task, i) => (
              <li key={i} style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}>{task}</li>
            ))}
          </ul>
        </div>


        {/* Getting Started */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', 
          borderRadius: '16px', 
          padding: '1.25rem',
          marginBottom: '1.25rem',
          boxShadow: '0 8px 32px rgba(34, 197, 94, 0.15)',
          border: '2px solid #bbf7d0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(34, 197, 94, 0.25)'
            }}>
              <Rocket size={20} color="white" strokeWidth={2.5} />
            </div>
            <h2 style={{ fontSize: '1.5rem', color: '#166534', margin: 0, fontWeight: 700, letterSpacing: '-0.01em' }}>
              Getting Started
            </h2>
          </div>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.6', color: '#166534', fontSize: '1rem', margin: 0 }}>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}><strong>Clone the repository</strong> from the GitHub link above</li>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}><strong>Install dependencies</strong> - Check package.json/requirements.txt for setup instructions</li>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}><strong>Read the boilerplate code</strong> - Contains helpful comments and structure</li>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}><strong>Run the development server</strong> - Instructions in the repository</li>
            <li style={{ marginBottom: 0, paddingLeft: '0.25rem' }}><strong>Start coding!</strong> - Focus on required tasks first, then bonus if time permits</li>
          </ul>
        </div>

        {/* Expected Deliverables */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', 
          borderRadius: '16px', 
          padding: '1.25rem',
          marginBottom: '1.25rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(59, 130, 246, 0.25)'
            }}>
              <CheckSquare size={20} color="white" strokeWidth={2.5} />
            </div>
            <h2 style={{ fontSize: '1.5rem', color: '#1a1a1a', margin: 0, fontWeight: 700, letterSpacing: '-0.01em' }}>
              Expected Deliverables
            </h2>
          </div>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.6', color: '#4b5563', fontSize: '1rem', margin: 0 }}>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}>Functional implementation of all required tasks</li>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}>Proper error handling and loading states</li>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}>Clean, well-structured code with meaningful names</li>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}>Basic accessibility (keyboard navigation, ARIA labels)</li>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}>Comments documenting trade-offs and decisions</li>
            <li style={{ marginBottom: 0, paddingLeft: '0.25rem' }}>Notes on what you'd do with more time</li>
          </ul>
        </div>

        {/* Bonus */}
        {exercise.bonus && exercise.bonus.length > 0 && (
          <div style={{ 
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', 
            borderRadius: '16px', 
            padding: '1.25rem',
            marginBottom: '1.25rem',
            boxShadow: '0 8px 32px rgba(245, 158, 11, 0.2)',
            border: '2px solid #fbbf24'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(245, 158, 11, 0.3)'
              }}>
                <Star size={20} color="white" strokeWidth={2.5} fill="white" />
              </div>
              <h2 style={{ fontSize: '1.5rem', color: '#78350f', margin: 0, fontWeight: 700, letterSpacing: '-0.01em' }}>
                Bonus (If Time Permits)
              </h2>
            </div>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.6', color: '#78350f', fontSize: '1rem', margin: 0 }}>
              {exercise.bonus.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Important Notes */}
        <div style={{ 
          background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', 
          borderRadius: '16px', 
          padding: '1.25rem',
          marginBottom: '1.25rem',
          boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)',
          border: '2px solid #60a5fa'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)'
            }}>
              <AlertTriangle size={20} color="white" strokeWidth={2.5} />
            </div>
            <h2 style={{ fontSize: '1.5rem', color: '#1e3a8a', margin: 0, fontWeight: 700, letterSpacing: '-0.01em' }}>
              Important Notes
            </h2>
          </div>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.6', color: '#1e40af', fontSize: '1rem', margin: 0 }}>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}><strong>Time Limit:</strong> {exercise.time} - Focus on core functionality first</li>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}><strong>Documentation:</strong> Leave notes on trade-offs and what you'd do with more time</li>
            <li style={{ marginBottom: '0.375rem', paddingLeft: '0.25rem' }}><strong>Code Quality:</strong> Prioritize clarity and structure over perfection</li>
            <li style={{ marginBottom: 0, paddingLeft: '0.25rem' }}><strong>Questions:</strong> Document assumptions in your README</li>
          </ul>
        </div>

        {/* Submission Instructions */}
        <div style={{ 
          background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)', 
          borderRadius: '16px', 
          padding: '1.25rem',
          marginBottom: '1.25rem',
          boxShadow: '0 8px 32px rgba(239, 68, 68, 0.2)',
          border: '2px solid #f87171'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(239, 68, 68, 0.3)'
            }}>
              <Ban size={20} color="white" strokeWidth={2.5} />
            </div>
            <h2 style={{ fontSize: '1.5rem', color: '#7f1d1d', margin: 0, fontWeight: 700, letterSpacing: '-0.01em' }}>
              Submission Rules - READ CAREFULLY
            </h2>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '0.75rem', 
            borderRadius: '10px',
            marginBottom: '0.75rem',
            border: '2px solid #dc2626',
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            boxShadow: '0 4px 16px rgba(220, 38, 38, 0.15)'
          }}>
            <AlertTriangle size={20} color="#dc2626" strokeWidth={2.5} />
            <strong style={{ color: '#dc2626', fontSize: '1rem', letterSpacing: '-0.01em' }}>COMMITS TO MAIN BRANCH WILL BE REJECTED</strong>
          </div>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.625rem', color: '#7f1d1d', fontWeight: 700 }}>
            Follow these steps:
          </h3>
          <ol style={{ paddingLeft: '1.25rem', lineHeight: '1.6', color: '#991b1b', fontSize: '1rem', margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Create a new branch with your name:</strong>
              <div style={{ 
                background: '#1a1a1a', 
                padding: '0.5rem 0.75rem', 
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                margin: '0.375rem 0',
                border: '2px solid #374151',
                color: '#10b981',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}>
                git checkout -b your-name
              </div>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Make your commits on your branch:</strong>
              <div style={{ 
                background: '#1a1a1a', 
                padding: '0.5rem 0.75rem', 
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                margin: '0.375rem 0',
                border: '2px solid #374151',
                color: '#10b981',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}>
                git add .<br />
                git commit -m "Your commit message"
              </div>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Push your branch to GitHub:</strong>
              <div style={{ 
                background: '#1a1a1a', 
                padding: '0.5rem 0.75rem', 
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                margin: '0.375rem 0',
                border: '2px solid #374151',
                color: '#10b981',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}>
                git push origin your-name
              </div>
            </li>
            <li style={{ marginBottom: 0 }}>
              <strong>Create a Pull Request</strong> from your branch to <code style={{ background: '#1a1a1a', padding: '0.25rem 0.625rem', borderRadius: '6px', color: '#10b981', border: '1px solid #374151' }}>main</code> on GitHub
            </li>
          </ol>
        </div>

        {/* Start Exercise Button */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <a 
            href={exercise.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '1.125rem 3rem', 
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              color: 'white', 
              border: 'none', 
              borderRadius: '12px',
              fontSize: '1.125rem',
              fontWeight: 700,
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 12px 40px rgba(255, 107, 53, 0.4)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              letterSpacing: '-0.01em'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 16px 50px rgba(255, 107, 53, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 53, 0.4)';
            }}
          >
            <Rocket size={22} strokeWidth={2.5} />
            <span>Start the Challenge</span>
          </a>
          <p style={{ 
            marginTop: '1rem', 
            fontSize: '0.9375rem', 
            color: '#6b7280',
            fontWeight: 500,
            letterSpacing: '-0.01em'
          }}>
            Clone the repository and begin your 90-minute assessment
          </p>
        </div>
      </div>
    </div>
  );
}

