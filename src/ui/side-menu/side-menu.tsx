import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('today');
  const [expandedSections, setExpandedSections] = useState({
    leagues: true,
    countries: false,
    sports: true,
  });

  const today = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const defaultDate = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
  const defaultTime = `${pad(today.getHours())}:${pad(today.getMinutes())}`;

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filteredLeagues = leagues.filter(league =>
    league.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSports = sports.filter(sport =>
    sport.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className={styles.sidebar}>
      {/* Search and Quick Filters */}
      <div className={styles.searchSection}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search sports, leagues..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className={styles.quickFilters}>
          <button
            className={`${styles.quickFilter} ${activeFilter === 'today' ? styles.active : ''}`}
            onClick={() => setActiveFilter('today')}
          >
            Today
          </button>
          <button
            className={`${styles.quickFilter} ${styles.live} ${activeFilter === 'live' ? styles.active : ''}`}
            onClick={() => setActiveFilter('live')}
          >
            Live
          </button>
          <button
            className={`${styles.quickFilter} ${activeFilter === 'top' ? styles.active : ''}`}
            onClick={() => setActiveFilter('top')}
          >
            Top Leagues
          </button>
        </div>
      </div>

      {/* Time Filters */}
      <div className={styles.filterSection}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Time Filter</h3>
        </div>
        <div className={styles.timeFilters}>
          <div className={styles.timeFilter}>
            <label>Select Time</label>
            <input
              type="time"
              className={styles.timeInput}
              defaultValue={defaultTime}
            />
          </div>
          <div className={styles.timeFilter}>
            <label>Select Date</label>
            <input
              type="date"
              className={styles.dateInput}
              defaultValue={defaultDate}
            />
          </div>
        </div>
      </div>

      {/* Top Leagues */}
      <div className={styles.filterSection}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('leagues')}
        >
          <h3 className={styles.sectionTitle}>Top Leagues</h3>
          <span className={`${styles.toggleIcon} ${expandedSections.leagues ? styles.expanded : ''}`}>
            ▼
          </span>
        </div>
        <div className={`${styles.filterContent} ${!expandedSections.leagues ? styles.collapsed : ''}`}>
          {filteredLeagues.map((league) => (
            <div key={league.name} className={styles.leagueItem}>
              <input
                type="checkbox"
                className={styles.leagueCheckbox}
                id={`league-${league.name}`}
              />
              <label htmlFor={`league-${league.name}`} className={styles.leagueLabel}>
                {league.name}
              </label>
              <span className={styles.leagueCount}>{league.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Countries */}
      <div className={styles.filterSection}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('countries')}
        >
          <h3 className={styles.sectionTitle}>Countries</h3>
          <span className={`${styles.toggleIcon} ${expandedSections.countries ? styles.expanded : ''}`}>
            ▼
          </span>
        </div>
        <div className={`${styles.filterContent} ${!expandedSections.countries ? styles.collapsed : ''}`}>
          {filteredCountries.slice(0, 20).map((country) => (
            <div key={country.name} className={styles.countryItem}>
              <input
                type="checkbox"
                className={styles.countryCheckbox}
                id={`country-${country.name}`}
              />
              <label htmlFor={`country-${country.name}`} className={styles.countryLabel}>
                {country.name}
              </label>
              <span className={styles.countryCount}>{country.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sports */}
      <div className={styles.filterSection}>
        <div 
          className={styles.sectionHeader}
          onClick={() => toggleSection('sports')}
        >
          <h3 className={styles.sectionTitle}>Sports</h3>
          <span className={`${styles.toggleIcon} ${expandedSections.sports ? styles.expanded : ''}`}>
            ▼
          </span>
        </div>
        <div className={`${styles.filterContent} ${!expandedSections.sports ? styles.collapsed : ''}`}>
          <ul className={styles.menuList}>
            {filteredSports.map((sport) => (
              <li key={sport.id} className={styles.menuItem}>
                <Link href={`/${sport.key}`} className={styles.menuLink}>
                  <span className={styles.iconWrap}>
                    <span className={styles.iconCircle}>
                      <Image 
                        src={sportIcons[sport.key] || '/sports/soccer.png'} 
                        alt={sport.title} 
                        width={20} 
                        height={20} 
                      />
                    </span>
                  </span>
                  <span className={styles.sportTitle}>{sport.title}</span>
                  <span className={styles.eventCount}>12</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}