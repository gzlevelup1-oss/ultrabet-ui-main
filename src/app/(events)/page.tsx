"use client";
import styles from '../landing.module.css';
import Image from 'next/image';
import Link from 'next/link';


import { useState } from 'react';

const matches = [
  {
    league: 'Premier League',
    time: '20:00',
    teams: 'Team A vs Team B',
    odds: { '1': 2.10, X: 3.20, '2': 3.00, '1X': 1.50, X2: 1.80, '12': 1.60 },
    more: [
      { type: 'Over 2.5', odds: 1.90 },
      { type: 'Under 2.5', odds: 2.00 },
      { type: 'Both Teams Score', odds: 1.75 },
    ],
  },
  {
    league: 'La Liga',
    time: '22:00',
    teams: 'Team C vs Team D',
    odds: { '1': 1.80, X: 3.50, '2': 4.20, '1X': 1.40, X2: 1.90, '12': 1.70 },
    more: [
      { type: 'Over 2.5', odds: 2.10 },
      { type: 'Under 2.5', odds: 1.85 },
      { type: 'Both Teams Score', odds: 1.95 },
    ],
  },
  {
    league: 'Serie A',
    time: '21:00',
    teams: 'Team E vs Team F',
    odds: { '1': 2.50, X: 3.00, '2': 2.80, '1X': 1.60, X2: 1.70, '12': 1.55 },
    more: [
      { type: 'Over 2.5', odds: 2.00 },
      { type: 'Under 2.5', odds: 1.90 },
      { type: 'Both Teams Score', odds: 2.05 },
    ],
  },
];


export default function HomePage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,126,52,0.08)', margin: '2rem auto', padding: '1.5rem 1.5rem 2.5rem 1.5rem', maxWidth: 1100, minHeight: 600 }}>
      <section>
        <h2 style={{ fontWeight: 700, color: '#1e7e34', fontSize: 24, marginBottom: 12, letterSpacing: 1 }}>TODAY'S MATCHES</h2>
        {/* Sports Icons Row */}
        <div style={{ display: 'flex', overflowX: 'auto', gap: 24, padding: '12px 0 24px 0', background: '#f7f7f7', borderRadius: 12, marginBottom: 24 }}>
          {[
            { name: 'Soccer', icon: '/sports/soccer.png' },
            { name: 'Basketball', icon: '/sports/basketball.png' },
            { name: 'Futsal', icon: '/sports/futsal.png' },
            { name: 'Table Tennis', icon: '/sports/table-tennis.png' },
            { name: 'Rugby', icon: '/sports/rugby.png' },
            { name: 'Darts', icon: '/sports/darts.png' },
            { name: 'Floorball', icon: '/sports/floorball.png' },
            { name: 'Handball', icon: '/sports/handball.png' },
            { name: 'Cricket', icon: '/sports/cricket.png' },
            { name: 'Ice Hockey', icon: '/sports/ice-hockey.png' },
            { name: 'Volleyball', icon: '/sports/volleyball.png' },
            { name: 'Baseball', icon: '/sports/baseball.png' },
            { name: 'Boxing', icon: '/sports/boxing.png' },
          ].map(sport => (
            <div key={sport.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 72 }}>
              <div style={{ background: '#e9ffe3', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6, border: '2px solid #1e7e34' }}>
                <Image src={sport.icon} alt={sport.name} width={36} height={36} />
              </div>
              <span style={{ fontSize: 13, color: '#1e7e34', fontWeight: 600 }}>{sport.name}</span>
            </div>
          ))}
        </div>
        {/* Matches Table */}
        <div style={{ borderRadius: 12, overflow: 'hidden', width: '100%', boxShadow: '0 1px 8px rgba(30,126,52,0.04)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
            <thead>
              <tr style={{ background: '#1e7e34', color: '#fff', fontWeight: 700, fontSize: 15 }}>
                <th style={{ padding: '0.7em 0.5em' }}>Game ID</th>
                <th style={{ padding: '0.7em 0.5em' }}>League</th>
                <th style={{ padding: '0.7em 0.5em' }}>Time</th>
                <th style={{ padding: '0.7em 0.5em' }}>Teams</th>
                <th style={{ padding: '0.7em 0.5em' }}>1</th>
                <th style={{ padding: '0.7em 0.5em' }}>X</th>
                <th style={{ padding: '0.7em 0.5em' }}>2</th>
                <th style={{ padding: '0.7em 0.5em' }}>1X</th>
                <th style={{ padding: '0.7em 0.5em' }}>X2</th>
                <th style={{ padding: '0.7em 0.5em' }}>12</th>
                <th style={{ padding: '0.7em 0.5em' }}>+</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m, idx) => (
                <>
                  <tr key={m.league + m.teams} style={{ background: idx % 2 === 0 ? '#fff' : '#f7f7f7', fontSize: 15 }}>
                    <td style={{ padding: '0.5em 0.5em' }}>{1893000 + idx}</td>
                    <td style={{ padding: '0.5em 0.5em' }}>{m.league}</td>
                    <td style={{ padding: '0.5em 0.5em' }}>{m.time}</td>
                    <td style={{ padding: '0.5em 0.5em' }}>{m.teams}</td>
                    <td style={{ padding: '0.5em 0.5em' }}>{m.odds['1']}</td>
                    <td style={{ padding: '0.5em 0.5em' }}>{m.odds['X']}</td>
                    <td style={{ padding: '0.5em 0.5em' }}>{m.odds['2']}</td>
                    <td style={{ padding: '0.5em 0.5em' }}>{m.odds['1X']}</td>
                    <td style={{ padding: '0.5em 0.5em' }}>{m.odds['X2']}</td>
                    <td style={{ padding: '0.5em 0.5em' }}>{m.odds['12']}</td>
                    <td style={{ padding: '0.5em 0.5em' }}>
                      <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} style={{ background: '#ffc107', color: '#1e7e34', border: 'none', borderRadius: 6, padding: '0.2em 0.8em', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                        {openIdx === idx ? '-' : '+'}
                      </button>
                    </td>
                  </tr>
                  {openIdx === idx && (
                    <tr>
                      <td colSpan={11} style={{ background: '#e9ffe3', textAlign: 'left', padding: '1rem 2rem' }}>
                        <strong>More Bet Types:</strong>
                        <div style={{ display: 'flex', gap: '2rem', marginTop: 8 }}>
                          {m.more.map((bet) => (
                            <div key={bet.type} style={{ minWidth: 120 }}>
                              <span style={{ color: '#1e7e34', fontWeight: 600 }}>{bet.type}</span>: <span style={{ color: '#ffc107', fontWeight: 600 }}>{bet.odds}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
