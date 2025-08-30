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
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Ultrabet</h1>
          <p className={styles.subtitle}>Bet on your favorite sports, play games, and win big!</p>
          <Link href="/register" className={styles.cta}>Register Now</Link>
        </div>
        <div className={styles.heroImage}>
          <Image src="/hero-banner.jpg" alt="Ultrabet Hero" width={500} height={300} />
        </div>
      </section>

      {/* Sports Categories */}
      <section className={styles.sportsSection}>
        <h2>Popular Sports</h2>
        <div className={styles.sportsGrid}>
          <div className={styles.sportCard}><Image src="/sports/soccer.png" alt="Soccer" width={48} height={48} /><span>Soccer</span></div>
          <div className={styles.sportCard}><Image src="/sports/basketball.png" alt="Basketball" width={48} height={48} /><span>Basketball</span></div>
          <div className={styles.sportCard}><Image src="/sports/tennis.png" alt="Tennis" width={48} height={48} /><span>Tennis</span></div>
          <div className={styles.sportCard}><Image src="/sports/volleyball.png" alt="Volleyball" width={48} height={48} /><span>Volleyball</span></div>
          <div className={styles.sportCard}><Image src="/sports/boxing.png" alt="Boxing" width={48} height={48} /><span>Boxing</span></div>
          <div className={styles.sportCard}><Image src="/sports/rugby.png" alt="Rugby" width={48} height={48} /><span>Rugby</span></div>
        </div>
      </section>

      {/* Today's Matches (Collapsible) */}
      <section className={styles.matchesSection}>
        <h2>Today's Matches</h2>
        <div className={styles.matchesTableWrapper}>
          <table className={styles.matchesTable}>
            <thead>
              <tr>
                <th>League</th>
                <th>Time</th>
                <th>Teams</th>
                <th>1</th>
                <th>X</th>
                <th>2</th>
                <th>1X</th>
                <th>X2</th>
                <th>12</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m, idx) => (
                <>
                  <tr key={m.league + m.teams} style={{ background: idx % 2 === 0 ? '#fff' : '#f2f2f2' }}>
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
                      <button className={styles.detailsBtn} onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                        {openIdx === idx ? 'Hide' : 'More'}
                      </button>
                    </td>
                  </tr>
                  {openIdx === idx && (
                    <tr>
                      <td colSpan={10} style={{ background: '#e9ffe3', textAlign: 'left', padding: '1rem 2rem' }}>
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
