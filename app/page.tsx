import Link from 'next/link';
import { exercises } from './data/exercises';

export default function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <h1>🎯 Interview Kits Portal</h1>
        <p>Choose your coding challenge • 90-minute timeboxed exercises</p>
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
        <p>© 2025 yourorg – For interview use only</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
          All exercises include complete setup, seed data, and clear expectations
        </p>
      </div>
    </div>
  );
}

