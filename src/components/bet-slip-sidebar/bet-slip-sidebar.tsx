'use client'

import React, { useState } from 'react'
import styles from './bet-slip-sidebar.module.css'

interface BetSlipItem {
  id: string
  match: string
  selection: string
  odds: number
  stake?: number
}

const mockBetSlips: BetSlipItem[] = [
  {
    id: '1',
    match: 'New Mexico United Vs Detroit City FC',
    selection: '1x2',
    odds: 2.2
  },
  {
    id: '2',
    match: 'Havadar SC Vs Ario Eslamshahr',
    selection: '1x2',
    odds: 2.22
  },
  {
    id: '3',
    match: 'Nassaji Mazandaran FC Vs Sanat Naft Abadan FC',
    selection: '1x2',
    odds: 2.1
  }
]

export default function BetSlipSidebar() {
  const [activeTab, setActiveTab] = useState('Slip 1')
  const [betSlips, setBetSlips] = useState<BetSlipItem[]>(mockBetSlips)
  const [couponNumber, setCouponNumber] = useState('')
  const [totalStake, setTotalStake] = useState(20)
  const [currentBonus] = useState(3.0)

  const totalOdds = betSlips.reduce((acc, slip) => acc * slip.odds, 1)
  const potentialWin = totalStake * totalOdds
  const vat = potentialWin * 0.15 // 15% VAT

  const removeBetSlip = (id: string) => {
    setBetSlips(betSlips.filter(slip => slip.id !== id))
  }

  const clearAll = () => {
    setBetSlips([])
  }

  return (
    <div className={styles.betSlipContainer}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.headerIcon}>🎯</span>
        <span className={styles.headerTitle}>Bet Slips</span>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {['Slip 1', 'Slip 2', 'Slip 3'].map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Matches Count and Clear */}
      <div className={styles.matchesHeader}>
        <span className={styles.matchesCount}>MATCHES({betSlips.length})</span>
        <button className={styles.clearAllButton} onClick={clearAll}>
          CLEAR ALL
        </button>
      </div>

      {/* Bet Slips Content */}
      <div className={styles.content}>
        {betSlips.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📋</div>
            <div className={styles.emptyTitle}>YOUR SLIP IS STILL EMPTY</div>
            <div className={styles.emptyText}>
              Click on the appropriate odds to add it into your slip.
            </div>
          </div>
        ) : (
          <>
            {/* Bet Slip Items */}
            <div className={styles.betSlipItems}>
              {betSlips.map((slip) => (
                <div key={slip.id} className={styles.betSlipItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.matchName}>{slip.match}</span>
                    <button 
                      className={styles.removeButton}
                      onClick={() => removeBetSlip(slip.id)}
                    >
                      ✕
                    </button>
                  </div>
                  <div className={styles.itemDetails}>
                    <span className={styles.selection}>{slip.selection}</span>
                    <span className={styles.odds}>{slip.odds}</span>
                  </div>
                  <div className={styles.teamNames}>
                    {slip.match.split(' Vs ')[0]}<br />
                    {slip.match.split(' Vs ')[1]}
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon Section */}
            <div className={styles.couponSection}>
              <input
                type="text"
                placeholder="Coupon Number"
                className={styles.couponInput}
                value={couponNumber}
                onChange={(e) => setCouponNumber(e.target.value)}
              />
              <button className={styles.retrieveButton}>
                Retrieve Coupon
              </button>
              <input
                type="text"
                placeholder="Update coupon Number"
                className={styles.couponInput}
              />
              <button className={styles.checkButton}>
                Check Coupon
              </button>
            </div>

            {/* Stake Section */}
            <div className={styles.stakeSection}>
              <div className={styles.stakeLabel}>Stake</div>
              <div className={styles.stakeInput}>
                <span className={styles.currency}>ETB</span>
                <input
                  type="number"
                  value={totalStake}
                  onChange={(e) => setTotalStake(Number(e.target.value))}
                  className={styles.stakeAmount}
                />
              </div>
            </div>

            {/* Bonus Info */}
            <div className={styles.bonusInfo}>
              <span className={styles.bonusIcon}>ℹ️</span>
              <span className={styles.bonusText}>CURRENT BONUS {currentBonus.toFixed(1)}%</span>
            </div>

            {/* Summary */}
            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <span>Total Odd</span>
                <span>{totalOdds.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Stake</span>
                <span>{totalStake.toFixed(2)} ETB</span>
              </div>
              <div className={styles.summaryRow}>
                <span>V.A.T</span>
                <span>{vat.toFixed(2)} ETB</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Chat Widget */}
      <div className={styles.chatWidget}>
        <div className={styles.chatBubble}>
          <span className={styles.chatIcon}>💬</span>
          <span className={styles.chatCount}>1</span>
        </div>
        <div className={styles.chatText}>We Are Here!</div>
      </div>
    </div>
  )
}