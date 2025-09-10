'use client'

import React, { useState } from 'react'
import styles from './left-sidebar.module.css'

interface League {
  name: string
  count: number
  flag: string
}

const topLeagues: League[] = [
  { name: 'Premier League', count: 20, flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { name: 'Bundesliga', count: 18, flag: '🇩🇪' },
  { name: 'LaLiga', count: 20, flag: '🇪🇸' },
  { name: 'Serie A', count: 20, flag: '🇮🇹' },
  { name: 'Ligue 1', count: 18, flag: '🇫🇷' },
  { name: 'UEFA Europa League', count: 0, flag: '🏆' },
  { name: 'USL Championship', count: 12, flag: '🇺🇸' }
]

const allLeagues = [
  { name: 'Algeria', count: 5, flag: '🇩🇿' },
  { name: 'Argentina', count: 2, flag: '🇦🇷' }
]

export default function LeftSidebar() {
  const [selectedDate, setSelectedDate] = useState('TODAY')
  const [timeFilter, setTimeFilter] = useState('--Time Filter --')
  const [selectedDateInput, setSelectedDateInput] = useState('')

  return (
    <div className={styles.sidebar}>
      {/* Date Filters */}
      <div className={styles.dateSection}>
        <button 
          className={`${styles.dateButton} ${selectedDate === 'TODAY' ? styles.active : ''}`}
          onClick={() => setSelectedDate('TODAY')}
        >
          📅 TODAY
        </button>
        <button 
          className={`${styles.dateButton} ${selectedDate === 'TOMORROW' ? styles.active : ''}`}
          onClick={() => setSelectedDate('TOMORROW')}
        >
          📅 TOMORROW
        </button>
      </div>

      {/* Time Filter */}
      <div className={styles.filterSection}>
        <select 
          className={styles.timeFilter}
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
        >
          <option value="--Time Filter --">--Time Filter --</option>
          <option value="morning">Morning (06:00-12:00)</option>
          <option value="afternoon">Afternoon (12:00-18:00)</option>
          <option value="evening">Evening (18:00-24:00)</option>
        </select>
      </div>

      {/* Date Picker */}
      <div className={styles.filterSection}>
        <input 
          type="date"
          className={styles.datePicker}
          value={selectedDateInput}
          onChange={(e) => setSelectedDateInput(e.target.value)}
          placeholder="Select date"
        />
      </div>

      {/* Top Bets */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIcon}>💧</span>
          <span className={styles.sectionTitle}>TOP BETS</span>
        </div>
        <div className={styles.leaguesList}>
          {topLeagues.map((league) => (
            <div key={league.name} className={styles.leagueItem}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.leagueFlag}>{league.flag}</span>
              <span className={styles.leagueName}>{league.name}</span>
              <span className={styles.leagueCount}>({league.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* All Leagues */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionIcon}>📋</span>
          <span className={styles.sectionTitle}>ALL LEAGUES (0)</span>
          <button className={styles.clearButton}>🗑️</button>
        </div>
        
        {/* Soccer Subsection */}
        <div className={styles.subsection}>
          <div className={styles.subsectionHeader}>
            <span className={styles.expandIcon}>▶</span>
            <span className={styles.sportIcon}>⚽</span>
            <span className={styles.sportName}>Soccer</span>
          </div>
          <div className={styles.countriesList}>
            {allLeagues.map((country) => (
              <div key={country.name} className={styles.countryItem}>
                <span className={styles.expandIcon}>▶</span>
                <input type="checkbox" className={styles.checkbox} />
                <span className={styles.countryFlag}>{country.flag}</span>
                <span className={styles.countryName}>{country.name}</span>
                <span className={styles.countryCount}>({country.count})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}