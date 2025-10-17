'use client';

import { useParams, useRouter } from 'next/navigation';
import { exercises } from '../../data/exercises';

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
    if (role === 'Frontend') return '#3b82f6';
    if (role === 'Backend') return '#8b5cf6';
    return '#ec4899';
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Back Button */}
        <button 
          onClick={() => router.push('/')}
          style={{ 
            padding: '0.5rem 1rem', 
            background: 'rgba(255,255,255,0.2)', 
            color: 'white', 
            border: '1px solid rgba(255,255,255,0.3)', 
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          ← Back to Portal
        </button>

        {/* Header Card */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ 
              padding: '0.25rem 0.75rem', 
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 600,
              background: getRoleColor(exercise.role) + '20',
              color: getRoleColor(exercise.role)
            }}>
              {exercise.role}
            </span>
            <span style={{ 
              padding: '0.25rem 0.75rem', 
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 600,
              background: getLevelColor(exercise.level) + '20',
              color: getLevelColor(exercise.level)
            }}>
              {exercise.level}
            </span>
          </div>

          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#111' }}>
            {exercise.title}
          </h1>
          
          <p style={{ fontSize: '1.125rem', color: '#667eea', fontWeight: 600, marginBottom: '1.5rem' }}>
            {exercise.role} • {exercise.level} Level
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '2rem', 
            padding: '1rem', 
            background: '#f9fafb', 
            borderRadius: '12px',
            marginBottom: '1rem'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>
                TIME LIMIT
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111' }}>
                ⏱️ {exercise.time}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>
                PAGINATION
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111' }}>
                📄 {exercise.pagination}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>
                TECH STACK
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#111' }}>
                {exercise.tech.slice(0, 2).join(', ')}
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
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>
            📋 Problem Statement
          </h2>
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
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>
            ✅ Required Tasks
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '2', color: '#374151' }}>
            {exercise.tasks.map((task, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>{task}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>
            🛠️ Technology Stack
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {exercise.tech.map((tech, i) => (
              <span key={i} style={{ 
                background: '#f3f4f6', 
                padding: '0.5rem 1rem', 
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#4b5563'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expected Deliverables */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>
            📦 Expected Deliverables
          </h2>
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
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>
              ⭐ Bonus (If Time Permits)
            </h2>
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
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>
            ⚠️ Important Notes
          </h2>
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
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#78350f' }}>
            🚫 Submission Rules - READ CAREFULLY
          </h2>
          <div style={{ 
            background: '#fef3c7', 
            padding: '1rem', 
            borderRadius: '8px',
            marginBottom: '1rem',
            border: '1px solid #fbbf24'
          }}>
            <strong style={{ color: '#dc2626', fontSize: '1.125rem' }}>⚠️ COMMITS TO MAIN BRANCH WILL BE REJECTED</strong>
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

        {/* GitHub Repository */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>
            📦 Repository
          </h2>
          <a 
            href={exercise.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: '#24292e',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            <span>🐙</span>
            <span>View on GitHub</span>
          </a>
          <p style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.875rem' }}>
            {exercise.githubRepo}
          </p>
        </div>

        {/* Setup Instructions */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '2rem',
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>
            🛠️ Setup Instructions
          </h2>
          
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#374151', marginTop: '1.5rem' }}>
            1. Clone the Repository
          </h3>
          <div style={{ 
            background: '#f9fafb', 
            padding: '1rem', 
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}>
            git clone {exercise.githubRepo}.git<br />
            cd {exercise.repoName}
          </div>

          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#374151' }}>
            2. Install Dependencies
          </h3>
          <div style={{ 
            background: '#f9fafb', 
            padding: '1rem', 
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}>
            {exercise.role === 'Frontend' && (
              <>
                # Install frontend dependencies<br />
                cd client && pnpm install<br />
                <br />
                # Install mock server dependencies<br />
                cd ../server_mock && pip install -r requirements.txt
              </>
            )}
            {exercise.role === 'Backend' && (
              <>
                # Install backend dependencies<br />
                cd server && pip install -r requirements.txt<br />
                <br />
                # Start MongoDB with Docker<br />
                docker-compose up -d
              </>
            )}
            {exercise.role === 'Full-Stack' && (
              <>
                # Install frontend dependencies<br />
                cd client && pnpm install<br />
                <br />
                # Install backend dependencies<br />
                cd ../server && pip install -r requirements.txt<br />
                <br />
                # Start services with Docker<br />
                cd .. && docker-compose up -d
              </>
            )}
          </div>

          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#374151' }}>
            3. Run the Application
          </h3>
          <div style={{ 
            background: '#f9fafb', 
            padding: '1rem', 
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}>
            {exercise.role === 'Frontend' && (
              <>
                # Terminal 1: Start mock server<br />
                cd server_mock && python -m uvicorn app.main:app --reload --port 4001<br />
                <br />
                # Terminal 2: Start frontend<br />
                cd client && pnpm dev
              </>
            )}
            {exercise.role === 'Backend' && (
              <>
                # Start the backend server<br />
                cd server && python -m uvicorn app.main:app --reload --port 4000<br />
                <br />
                # Access the mock client at http://localhost:4001
              </>
            )}
            {exercise.role === 'Full-Stack' && (
              <>
                # Terminal 1: Start backend<br />
                cd server && python -m uvicorn app.main:app --reload --port 4000<br />
                <br />
                # Terminal 2: Start frontend<br />
                cd client && pnpm dev
              </>
            )}
          </div>

          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#374151' }}>
            4. Access the Application
          </h3>
          <p style={{ color: '#374151', lineHeight: '1.8' }}>
            Open your browser and navigate to: <strong>{exercise.route}</strong>
          </p>
        </div>

        {/* Start Exercise Button */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <a 
            href={exercise.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block',
              padding: '1rem 3rem', 
              background: 'linear-gradient(135deg, #2c5364 0%, #0f2027 100%)',
              color: 'white', 
              border: 'none', 
              borderRadius: '12px',
              fontSize: '1.125rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(44, 83, 100, 0.4)',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            🚀 Clone & Start Exercise
          </a>
          <p style={{ 
            marginTop: '1rem', 
            fontSize: '0.875rem', 
            color: 'rgba(255,255,255,0.9)' 
          }}>
            This will open the GitHub repository
          </p>
        </div>
      </div>
    </div>
  );
}

