import styles from './page.module.css'
import React from 'react'
import { Bet, BetOption, BetStatus } from '@/gql/types.generated'
import { getLongBetName } from '@/lib/util'
import { formatTime } from '@/ui/date-util'
import { getOptionPointLabel, getSpreadOptionLabel, renderScore } from '@/ui/event-util'
import { Card } from '@/ui/card/card'
import CardHeader from '@/ui/card/card-header'
import { CardContent } from '@/ui/card/card-content'


const BetListItem: React.FC<{ bet: Bet }> = ({ bet }) => {
  const betType = getLongBetName(bet.betOptions?.length ?? 1)

  const betWinLabel = (status: BetStatus): string => {
    return status === BetStatus.Won ? 'Won' : 'To Return'
  }
  const options = bet.betOptions?.filter((option) => !!option) as BetOption[]
  const betOptions = options.map((option: BetOption) => {
    const event = option?.marketOption.market?.event
    return (
      <li key={option?.id} className={styles.betDetails}>
        <div className={styles.marketOption}>
          <div>
            <span
              className={styles.status + ' ' + styles[`status-${option?.status?.toLowerCase()}`]}
            />
            {option?.marketOption?.name}{' '}
            {option &&
              getOptionPointLabel(
                option.marketOption ?? null,
                option.marketOption?.market?.name ?? 'totals'
              )}{' '}
            <span className={styles.smallestText}>{option?.marketOption.id}</span>
          </div>
          <div>{option?.marketOption.odds}</div>
        </div>
        <div className={styles.eventMeta}>
          {event?.name} | {event?.startTime ? formatTime(new Date(event.startTime)) : ''}
        </div>
      </li>
    )
  })

  return (
    <Card>
      <CardHeader title={betType}>
        <div className={styles.betHeader}>
          <div className={styles.betType}>{betType}</div>
          <div className={styles.betMeta}>Placed {formatTime(new Date(bet.createdAt))}</div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className={styles.options}>{betOptions}</ul>
        <div className={styles.numbers}>
          <div className={styles.number}>
            <div className={styles.smallText}>Stake</div>
            <div>€{bet.stake}</div>
          </div>
          <div className={styles.number}>
            <div className={styles.smallText}>{betWinLabel(bet.status)}</div>
            <div>€{Number(bet.potentialWinnings).toFixed(2)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Page() {
  // Hardcoded mock data for bets
  const bets = [
    {
      id: '1',
      betOptions: [
        {
          id: 101,
          status: BetStatus.Won,
          marketOption: {
            id: '201',
            name: 'Team A vs Team B',
            odds: 2.5,
            market: {
              id: 'm1',
              name: 'Match Winner',
              isLive: false,
              source: 'mock',
              event: {
                id: '301',
                name: 'Event 1',
                startTime: new Date().toISOString(),
                awayTeamName: 'Team B',
                completed: false,
                homeTeamName: 'Team A',
                isLive: false,
                sport: {
                  id: 's1',
                  key: 'football',
                  title: 'Football',
                  description: 'Football sport',
                  active: true,
                  group: 'main',
                  hasOutrights: false,
                },
              },
            },
          },
          bet: {} as any,
        },
      ],
      status: BetStatus.Won,
      stake: 10,
      potentialReturn: 25,
      potentialWinnings: 25,
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      betOptions: [
        {
          id: 102,
          status: BetStatus.Lost,
          marketOption: {
            id: '202',
            name: 'Team C vs Team D',
            odds: 1.8,
            market: {
              id: 'm2',
              name: 'Total Goals',
              isLive: false,
              source: 'mock',
              event: {
                id: '302',
                name: 'Event 2',
                startTime: new Date().toISOString(),
                awayTeamName: 'Team D',
                completed: false,
                homeTeamName: 'Team C',
                isLive: false,
                sport: {
                  id: 's1',
                  key: 'football',
                  title: 'Football',
                  description: 'Football sport',
                  active: true,
                  group: 'main',
                  hasOutrights: false,
                },
              },
            },
          },
          bet: {} as any,
        },
      ],
      status: BetStatus.Lost,
      stake: 15,
      potentialReturn: 27,
      potentialWinnings: 0,
      createdAt: new Date().toISOString(),
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>My Bets</h1>
      {bets.length === 0 ? (
        <p>No bets placed yet.</p>
      ) : (
        bets.map((bet) => <BetListItem key={bet.id} bet={bet} />)
      )}
    </main>
  )
}
