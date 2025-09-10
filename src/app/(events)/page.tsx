"use client";

import React from 'react';
import LeftSidebar from '@/components/left-sidebar/left-sidebar';
import MatchesTable from '@/components/matches-table/matches-table';
import BetSlipSidebar from '@/components/bet-slip-sidebar/bet-slip-sidebar';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.mainLayout}>
      {/* Left Sidebar */}
      <div className={styles.leftSidebar}>
        <LeftSidebar />
      </div>

      {/* Main Content - Matches Table */}
      <div className={styles.mainContent}>
        <MatchesTable />
      </div>

      {/* Right Sidebar - Bet Slip */}
      <div className={styles.rightSidebar}>
        <BetSlipSidebar />
      </div>
    </div>
  );
}