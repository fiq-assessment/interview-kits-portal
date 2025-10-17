import Link from 'next/link';
import { exercises } from './data/exercises';
import { Target, ClipboardCheck, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-section">
          <div className="logo-container">
            <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#333333">
                Fulfillment<tspan fill="#ff6b35">IQ</tspan>
              </text>
            </svg>
          </div>
          <div className="logo-subtitle">Technical Interview Portal</div>
        </div>
        <p className="tagline">Assess Your Skills • Choose Your Challenge • Showcase Your Expertise</p>
      </div>

      <div className="info-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <ClipboardCheck size={24} color="#1a1a1a" strokeWidth={2} />
          <h3 style={{ margin: 0 }}>What to Expect</h3>
        </div>
        <ul className="compact-list">
          <li>Each exercise is self-contained with boilerplate code and comments</li>
          <li>README includes problem statement, tasks, and expected deliverables</li>
          <li>90-minute timebox - do as much as you can</li>
          <li>Focus on functionality, code quality, and documentation</li>
          <li>Leave notes on trade-offs and next steps in the README</li>
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
            
            <div className="btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <span>View Details</span>
              <ArrowRight size={18} />
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

