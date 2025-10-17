'use client';

import { useParams, useRouter } from 'next/navigation';
import { exercises } from '../../data/exercises';
import { Clock, Github, ClipboardList, CheckSquare, Package, AlertTriangle, Ban, Rocket, ArrowLeft, Star } from 'lucide-react';

export default function ExerciseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
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
      background: '#f5f5f5',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Back Button */}
        <button 
          onClick={() => router.push('/')}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: 'white', 
            color: '#333333', 
            border: '2px solid #e5e5e5', 
            borderRadius: '10px',
            cursor: 'pointer',
            marginBottom: '1.5rem',
            fontSize: '0.9375rem',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.2s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#ff6b35';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = '#ff6b35';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.25)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = '#333333';
            e.currentTarget.style.borderColor = '#e5e5e5';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
          }}
        >
          <ArrowLeft size={18} />
          <span>Back to Portal</span>
        </button>

        {/* Header Card */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#111' }}>
                {exercise.title}
              </h1>
              
              <p style={{ fontSize: '1.125rem', color: '#ff6b35', fontWeight: 600 }}>
                {exercise.role} • {exercise.level} Level
              </p>
            </div>

            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.5rem', 
              background: '#fff4ed', 
              borderRadius: '10px',
              border: '2px solid #ff6b35',
              flexShrink: 0
            }}>
              <Clock size={28} color="#ff6b35" strokeWidth={2.5} />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#c2410c', marginBottom: '0.125rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>
                  Time Limit
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ff6b35' }}>
                  {exercise.time}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ClipboardList size={24} color="#111" strokeWidth={2} />
              <h2 style={{ fontSize: '1.5rem', color: '#111', margin: 0 }}>
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
                padding: '0.625rem 1.25rem',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '0.9375rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(255, 107, 53, 0.25)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.35)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 107, 53, 0.25)';
              }}
            >
              <Github size={18} />
              <span>View Repository on GitHub</span>
            </a>
          </div>
          <p style={{ lineHeight: '1.8', color: '#374151' }}>
            {exercise.description}
          </p>
        </div>

        {/* Tasks */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <CheckSquare size={24} color="#111" strokeWidth={2} />
            <h2 style={{ fontSize: '1.5rem', color: '#111', margin: 0 }}>
              Required Tasks
            </h2>
          </div>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '2', color: '#374151' }}>
            {exercise.tasks.map((task, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>{task}</li>
            ))}
          </ul>
        </div>


        {/* Expected Deliverables */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Package size={24} color="#111" strokeWidth={2} />
            <h2 style={{ fontSize: '1.5rem', color: '#111', margin: 0 }}>
              Expected Deliverables
            </h2>
          </div>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '2', color: '#374151' }}>
            <li>Functional implementation of all required tasks</li>
            <li>Proper error handling and loading states</li>
            <li>Clean, well-structured code with meaningful names</li>
            <li>Basic accessibility (keyboard navigation, ARIA labels)</li>
            <li>README updated with trade-offs and next steps</li>
          </ul>
        </div>

        {/* Bonus */}
        {exercise.bonus && exercise.bonus.length > 0 && (
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '2rem',
            marginBottom: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Star size={24} color="#ff6b35" strokeWidth={2} fill="#ff6b35" />
              <h2 style={{ fontSize: '1.5rem', color: '#111', margin: 0 }}>
                Bonus (If Time Permits)
              </h2>
            </div>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '2', color: '#374151' }}>
              {exercise.bonus.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Important Notes */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          border: '2px solid #fbbf24'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <AlertTriangle size={24} color="#f59e0b" strokeWidth={2} />
            <h2 style={{ fontSize: '1.5rem', color: '#111', margin: 0 }}>
              Important Notes
            </h2>
          </div>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '2', color: '#374151' }}>
            <li><strong>Time Limit:</strong> {exercise.time} - Focus on core functionality first</li>
            <li><strong>Documentation:</strong> Leave notes on trade-offs and what you'd do with more time</li>
            <li><strong>Code Quality:</strong> Prioritize clarity and structure over perfection</li>
            <li><strong>Questions:</strong> Document assumptions in your README</li>
          </ul>
        </div>

        {/* Submission Instructions */}
        <div style={{ 
          background: 'rgba(254, 243, 199, 0.95)', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          border: '2px solid #f59e0b'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Ban size={24} color="#dc2626" strokeWidth={2.5} />
            <h2 style={{ fontSize: '1.5rem', color: '#78350f', margin: 0 }}>
              Submission Rules - READ CAREFULLY
            </h2>
          </div>
          <div style={{ 
            background: '#fef3c7', 
            padding: '1rem', 
            borderRadius: '8px',
            marginBottom: '1rem',
            border: '1px solid #fbbf24',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <AlertTriangle size={20} color="#dc2626" strokeWidth={2.5} />
            <strong style={{ color: '#dc2626', fontSize: '1.125rem' }}>COMMITS TO MAIN BRANCH WILL BE REJECTED</strong>
          </div>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#78350f' }}>
            Follow these steps:
          </h3>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: '2', color: '#78350f' }}>
            <li>
              <strong>Create a new branch with your name:</strong>
              <div style={{ 
                background: '#fff', 
                padding: '0.75rem', 
                borderRadius: '6px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                margin: '0.5rem 0',
                border: '1px solid #e2e8f0'
              }}>
                git checkout -b your-name
              </div>
            </li>
            <li>
              <strong>Make your commits on your branch:</strong>
              <div style={{ 
                background: '#fff', 
                padding: '0.75rem', 
                borderRadius: '6px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                margin: '0.5rem 0',
                border: '1px solid #e2e8f0'
              }}>
                git add .<br />
                git commit -m "Your commit message"
              </div>
            </li>
            <li>
              <strong>Push your branch to GitHub:</strong>
              <div style={{ 
                background: '#fff', 
                padding: '0.75rem', 
                borderRadius: '6px',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                margin: '0.5rem 0',
                border: '1px solid #e2e8f0'
              }}>
                git push origin your-name
              </div>
            </li>
            <li>
              <strong>Create a Pull Request</strong> from your branch to <code style={{ background: '#fff', padding: '0.125rem 0.5rem', borderRadius: '4px' }}>main</code> on GitHub
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
              display: 'inline-block',
              padding: '1.25rem 3.5rem', 
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
              color: 'white', 
              border: 'none', 
              borderRadius: '12px',
              fontSize: '1.25rem',
              fontWeight: 700,
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 6px 16px rgba(255, 107, 53, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 107, 53, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 107, 53, 0.4)';
            }}
          >
            <Rocket size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem' }} />
            Start the Challenge
          </a>
          <p style={{ 
            marginTop: '1rem', 
            fontSize: '0.9375rem', 
            color: '#666666',
            fontWeight: 500
          }}>
            Clone the repository and begin your 90-minute assessment
          </p>
        </div>
      </div>
    </div>
  );
}

