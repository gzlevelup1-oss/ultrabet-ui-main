
import Link from 'next/link';
import Image from 'next/image';
import styles from './side-menu.module.css';

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
  football: '/sports/soccer.png',
  basketball: '/sports/basketball.png',
  tennis: '/sports/tennis.png',
  volleyball: '/sports/volleyball.png',
  boxing: '/sports/boxing.png',
  rugby: '/sports/rugby.png',
};

export function SideMenu({ sports }: Props) {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.menuList}>
          <li className={styles.menuHeader}>Sports</li>
          {sports.map((sport) => (
            <li key={sport.id} className={styles.menuItem}>
              <Link href={`/${sport.key}`} className={styles.menuLink}>
                <span className={styles.iconWrap}>
                  <Image src={sportIcons[sport.key] || '/sports/soccer.png'} alt={sport.title} width={24} height={24} />
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
