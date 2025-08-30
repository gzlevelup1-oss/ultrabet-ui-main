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
    <main className={styles.landing}>
      {/* Banner SVGs */}
      <div style={{ width: '100%', marginBottom: 16 }}>
        <Image src="/banner1.svg" alt="Banner 1" width={1200} height={120} style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* TODAY'S MATCHES HEADER */}
      <section className={styles.matchesSection}>
        <h2 style={{ fontWeight: 700, color: '#1e7e34', fontSize: 28, marginBottom: 12 }}>TODAY'S MATCHES</h2>

        {/* Sports Icons Row */}
        <div style={{ display: 'flex', overflowX: 'auto', gap: 24, padding: '12px 0 24px 0', background: '#fff', borderRadius: 16, marginBottom: 24 }}>
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
        <div className={styles.matchesTableWrapper}>
          <table className={styles.matchesTable} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', width: '100%' }}>
            <thead>
              <tr style={{ background: '#1e7e34', color: '#fff', fontWeight: 700 }}>
                <th>Game ID</th>
                <th>League</th>
                <th>Time</th>
                <th>Teams</th>
                <th>1</th>
                <th>X</th>
                <th>2</th>
                <th>1X</th>
                <th>X2</th>
                <th>12</th>
                <th>+</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m, idx) => (
                <>
                  <tr key={m.league + m.teams} style={{ background: idx % 2 === 0 ? '#fff' : '#f2f2f2' }}>
                    <td>{1893000 + idx}</td>
                    <td>{m.league}</td>
                    <td>{m.time}</td>
                    <td>{m.teams}</td>
                    <td>{m.odds['1']}</td>
                    <td>{m.odds['X']}</td>
                    <td>{m.odds['2']}</td>
                    <td>{m.odds['1X']}</td>
                    <td>{m.odds['X2']}</td>
                    <td>{m.odds['12']}</td>
                    <td>
                      <button className={styles.detailsBtn} onClick={() => setOpenIdx(openIdx === idx ? null : idx)} style={{ background: '#ffc107', color: '#1e7e34', border: 'none', borderRadius: 6, padding: '0.2em 0.8em', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
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

      {/* Promotions Section (SVG banners) */}
      <section className={styles.promotionsSection}>
        <h2>Promotions</h2>
        <div className={styles.promosGrid}>
          <div className={styles.promoCard}>
            <Image src="/banner2.svg" alt="Promo Banner" width={1200} height={120} style={{ width: '100%', height: 'auto' }} />
            <span>Get 100% Bonus on First Deposit!</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <Link href="/how-to-bet">How To Bet</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/responsible-betting">Responsible Betting</Link>
        </div>
        <div className={styles.footerInfo}>
          <span>Ultrabet Sports Betting © {new Date().getFullYear()}</span>
          <span>Contact: support@ultrabet.com</span>
        </div>
      </footer>
    </main>
  );
}
