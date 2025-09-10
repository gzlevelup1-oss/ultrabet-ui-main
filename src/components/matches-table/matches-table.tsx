'use client'

import React, { useState } from 'react'
import styles from './matches-table.module.css'
import Image from 'next/image'

interface Match {
  gameId: string
  time: string
  league: string
  homeTeam: string
  awayTeam: string
  odds: {
    '1': number
    'X': number
    '2': number
    '1X': number
    'X2': number
    '12': number
  }
  moreMarkets?: number
}

const mockMatches: Match[] = [
  {
    gameId: '1686184',
    time: '11:09 04:00',
    league: 'Soccer - USA - USL Championship',
    homeTeam: 'NEW MEXICO UNITED',
    awayTeam: 'DETROIT CITY FC',
    odds: { '1': 2.2, 'X': 3.3, '2': 2.85, '1X': 1.35, 'X2': 1.53, '12': 1.28 },
    moreMarkets: 509
  },
  {
    gameId: '2025303',
    time: '10:09 18:15',
    league: 'Soccer - Iran - Azadegan League',
    homeTeam: 'HAVADAR SC',
    awayTeam: 'ARIO ESLAMSHAHR',
    odds: { '1': 2.22, 'X': 2.8, '2': 3.35, '1X': 1.27, 'X2': 1.52, '12': 1.36 },
    moreMarkets: 152
  },
  {
    gameId: '2028860',
    time: '10:09 18:15',
    league: 'Soccer - Iran - Azadegan League',
    homeTeam: 'NASSAJI MAZANDARAN FC',
    awayTeam: 'SANAT NAFT ABADAN FC',
    odds: { '1': 2.1, 'X': 2.8, '2': 3.6, '1X': 1.24, 'X2': 1.57, '12': 1.35 },
    moreMarkets: 152
  },
  {
    gameId: '1879767',
    time: '10:09 18:30',
    league: 'Soccer - Germany Amateur - Regionalliga North',
    homeTeam: 'HSC HANNOVER',
    awayTeam: 'HAMBURGER SV II',
    odds: { '1': 3.3, 'X': 3.9, '2': 1.82, '1X': 1.75, 'X2': 1.27, '12': 1.22 },
    moreMarkets: 508
  },
  {
    gameId: '2023525',
    time: '10:09 18:30',
    league: 'Soccer - Spain - Copa Federacion',
    homeTeam: 'CLUB DEPORTIVA MINERA',
    awayTeam: 'UD MELILLA',
    odds: { '1': 2.32, 'X': 3.25, '2': 2.7, '1X': 1.38, 'X2': 1.48, '12': 1.29 },
    moreMarkets: 152
  },
  {
    gameId: '2023529',
    time: '10:09 20:00',
    league: 'Soccer - Spain - Copa Federacion',
    homeTeam: 'BERGANTINOS FC',
    awayTeam: 'CLUB MARINO DE LUANCO',
    odds: { '1': 2.13, 'X': 3.15, '2': 3.1, '1X': 1.3, 'X2': 1.56, '12': 1.3 },
    moreMarkets: 152
  }
]

const sports = [
  { name: 'Soccer', icon: '⚽', active: true },
  { name: 'Basketball', icon: '🏀', active: false },
  { name: 'Futsal', icon: '⚽', active: false },
  { name: 'Table Tennis', icon: '🏓', active: false },
  { name: 'Rugby', icon: '🏈', active: false },
  { name: 'Floorball', icon: '🏑', active: false },
  { name: 'Handball', icon: '🤾', active: false }
]

export default function MatchesTable() {
  const [selectedSport, setSelectedSport] = useState('Soccer')

  return (
    <div className={styles.matchesContainer}>
      {/* Search Bar */}
      <div className={styles.searchSection}>
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search Match..." 
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <span>🔍</span>
          </button>
        </div>
      </div>

      {/* Today's Matches Header */}
      <div className={styles.matchesHeader}>
        <h2 className={styles.matchesTitle}>
          📅 TODAY'S MATCHES
        </h2>
      </div>

      {/* Sports Navigation */}
      <div className={styles.sportsNav}>
        <button className={styles.navArrow}>‹</button>
        {sports.map((sport) => (
          <button
            key={sport.name}
            className={`${styles.sportTab} ${sport.active ? styles.active : ''}`}
            onClick={() => setSelectedSport(sport.name)}
          >
            <span className={styles.sportIcon}>{sport.icon}</span>
            {sport.name}
          </button>
        ))}
        <button className={styles.navArrow}>›</button>
      </div>

      {/* Matches Table */}
      <div className={styles.tableContainer}>
        <table className={styles.matchesTable}>
          <thead>
            <tr className={styles.tableHeader}>
              <th>Game ID</th>
              <th>Time</th>
              <th>Match</th>
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
            {mockMatches.map((match, index) => (
              <React.Fragment key={match.gameId}>
                <tr className={styles.leagueRow}>
                  <td colSpan={10} className={styles.leagueHeader}>
                    <span className={styles.leagueFlag}>🏴</span>
                    {match.league}
                  </td>
                </tr>
                <tr className={styles.matchRow}>
                  <td className={styles.gameId}>{match.gameId}</td>
                  <td className={styles.matchTime}>{match.time}</td>
                  <td className={styles.matchTeams}>
                    <div className={styles.teamsContainer}>
                      <span className={styles.homeTeam}>{match.homeTeam}</span>
                      <span className={styles.vs}>-</span>
                      <span className={styles.awayTeam}>{match.awayTeam}</span>
                    </div>
                  </td>
                  <td>
                    <button className={styles.oddsButton}>
                      {match.odds['1']}
                    </button>
                  </td>
                  <td>
                    <button className={styles.oddsButton}>
                      {match.odds['X']}
                    </button>
                  </td>
                  <td>
                    <button className={styles.oddsButton}>
                      {match.odds['2']}
                    </button>
                  </td>
                  <td>
                    <button className={styles.oddsButton}>
                      {match.odds['1X']}
                    </button>
                  </td>
                  <td>
                    <button className={styles.oddsButton}>
                      {match.odds['X2']}
                    </button>
                  </td>
                  <td>
                    <button className={styles.oddsButton}>
                      {match.odds['12']}
                    </button>
                  </td>
                  <td>
                    <button className={styles.moreButton}>
                      {match.moreMarkets}+ ⚡
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}