import Link from 'next/link';
import { exercises } from './data/exercises';

export default function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-section">
          <h1 className="company-name">FulfillmentIQ</h1>
          <div className="logo-subtitle">Technical Interview Portal</div>
        </div>
        <p className="tagline">Assess Your Skills • Choose Your Challenge • Showcase Your Expertise</p>
      </div>

      <div className="info-box">
        <h3>📋 What to Expect</h3>
        <ul>
          <li>Each exercise is self-contained with boilerplate code and comments</li>
          <li>README includes problem statement, tasks, and expected deliverables</li>
          <li>90-minute timebox - do as much as you can</li>
          <li>Focus on functionality, code quality, and documentation</li>
          <li>Leave notes on trade-offs and next steps in the README</li>
        </ul>
      </div>

      <div className="info-box" style={{ background: 'rgba(254, 243, 199, 0.98)', borderColor: '#f59e0b' }}>
        <h3>⚠️ Important Submission Rules</h3>
        <ul>
          <li style={{ color: '#78350f' }}><strong>DO NOT commit to the main branch</strong> - Commits to main will be rejected</li>
          <li style={{ color: '#78350f' }}>Create a new branch with your name: <code style={{ background: '#fef3c7', padding: '0.125rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem' }}>git checkout -b your-name</code></li>
          <li style={{ color: '#78350f' }}>Push your branch: <code style={{ background: '#fef3c7', padding: '0.125rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem' }}>git push origin your-name</code></li>
          <li style={{ color: '#78350f' }}>Submit a Pull Request from your branch to main for review</li>
        </ul>
      </div>

      <div className="grid">
        {exercises.map((exercise) => (
          <Link key={exercise.id} href={`/details/${exercise.id}`} className="card">
            <h2>{exercise.title}</h2>
            <h3>{exercise.role} • {exercise.level}</h3>
            
            <div className="card-description">
              <p>{exercise.description}</p>
            </div>
            
            <div className="btn">
              View Details →
            </div>
          </Link>
        ))}
      </div>

      <div className="footer">
        <p>© 2025 FulfillmentIQ – Technical Interview Platform</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
          All exercises include complete setup, documentation, and clear evaluation criteria
        </p>
      </div>
    </div>
  );
}

