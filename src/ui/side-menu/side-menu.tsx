
import Link from 'next/link';
import Image from 'next/image';
import styles from './side-menu.module.css';
import { leagues, countries } from './sidebar-data';

export type Sport = {
  id: string;
  key: string;
  title: string;
  active: boolean;
  group: string;
  description: string;
  hasOutrights: boolean;
};

export type Props = {
  sports: Sport[];
};

const sportIcons: Record<string, string> = {
  soccer: '/sports/soccer.png',
  basketball: '/sports/basketball.png',
  futsal: '/sports/futsal.png',
  tabletennis: '/sports/table-tennis.png',
  rugby: '/sports/rugby.png',
  darts: '/sports/darts.png',
  floorball: '/sports/floorball.png',
  handball: '/sports/handball.png',
  cricket: '/sports/cricket.png',
  icehockey: '/sports/ice-hockey.png',
  volleyball: '/sports/volleyball.png',
  baseball: '/sports/baseball.png',
  boxing: '/sports/boxing.png',
};

export function SideMenu({ sports }: Props) {
  return (
    <aside className={styles.sidebar}>
      {/* Waliyabet-style top filter section */}
      <div className={styles.filterSection}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          <button className={styles.filterBtn} style={{ fontWeight: 700 }}>Today</button>
          <button className={styles.filterBtn}>Tomorrow</button>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label style={{ fontWeight: 600, color: '#1e7e34', fontSize: 13 }}>--Time Filter--</label>
          <input type="time" className={styles.timeInput} style={{ marginLeft: 8, borderRadius: 6, border: '1px solid #ccc', padding: '2px 8px', fontSize: 13 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label style={{ fontWeight: 600, color: '#1e7e34', fontSize: 13 }}>Select date</label>
          <input type="date" className={styles.dateInput} style={{ marginLeft: 8, borderRadius: 6, border: '1px solid #ccc', padding: '2px 8px', fontSize: 13 }} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <span className={styles.menuHeader} style={{ color: '#1e7e34', fontWeight: 700, fontSize: 14 }}>Top Bets</span>
          <ul className={styles.topBetsList}>
            {leagues.map((league) => (
              <li key={league.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '2px 0' }}>
                <input type="checkbox" style={{ accentColor: '#1e7e34', marginRight: 4 }} />
                <span style={{ flex: 1 }}>{league.name}</span>
                <span style={{ color: '#ffc107', fontWeight: 600 }}>{league.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav>
        <ul className={styles.menuList}>
          <li className={styles.menuHeader}>Leagues</li>
          {leagues.map((league) => (
            <li key={league.name} className={styles.menuItem} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" style={{ accentColor: '#1e7e34', marginRight: 4 }} />
              <span style={{ flex: 1 }}>{league.name}</span>
              <span style={{ color: '#ffc107', fontWeight: 600 }}>{league.count}</span>
            </li>
          ))}
        </ul>
        <ul className={styles.menuList}>
          <li className={styles.menuHeader}>Soccer Countries</li>
          {countries.map((country) => (
            <li key={country.name} className={styles.menuItem} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" style={{ accentColor: '#1e7e34', marginRight: 4 }} />
              <span style={{ flex: 1 }}>{country.name}</span>
              <span style={{ color: '#ffc107', fontWeight: 600 }}>{country.count}</span>
            </li>
          ))}
        </ul>
        <ul className={styles.menuList}>
          <li className={styles.menuHeader}>Sports</li>
          {sports.map((sport) => (
            <li key={sport.id} className={styles.menuItem}>
              <Link href={`/${sport.key}`} className={styles.menuLink}>
                <span className={styles.iconWrap}>
                  <span className={styles.iconCircle}>
                    <Image src={sportIcons[sport.key] || '/sports/soccer.png'} alt={sport.title} width={24} height={24} />
                  </span>
                </span>
                <span className={styles.sportTitle}>{sport.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.menuList} style={{ marginTop: 32 }}>
          <li className={styles.menuHeader}>Quick Links</li>
          <li className={styles.menuItem}><Link href="/promotions" className={styles.menuLink}>Promotions</Link></li>
          <li className={styles.menuItem}><Link href="/jackpot" className={styles.menuLink}>Jackpot</Link></li>
          <li className={styles.menuItem}><Link href="/virtuals" className={styles.menuLink}>Virtuals</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
