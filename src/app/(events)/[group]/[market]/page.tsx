// import { getClient } from '@/lib/client'
// import { ListSportsWithEventsDocument, SportWithEventsFragment } from '@/gql/documents.generated'
import styles from '../../page.module.css'
import React from 'react'
import { MarketNav, PageNav } from '@/ui/page-nav'
import classnames from 'classnames'
import { SportList } from '@/ui/sport-list/sport-list'

export const revalidate = 0
export const dynamic = 'force-dynamic'


// Mock data for sports with events
const mockSports = [
  {
    __typename: "Sport" as "Sport",
    id: '1',
    title: 'Football',
    active: true,
    group: 'main',
    description: 'Football matches',
    hasOutrights: false,
    events: [
      {
        __typename: "Event" as "Event",
        id: 'e1',
        externalId: 'ext1',
        name: 'Match 1',
        startTime: new Date().toISOString(),
        homeTeamName: 'Team A',
        awayTeamName: 'Team B',
        result: null,
        isLive: false,
        completed: false,
        sport: {
          __typename: "Sport" as "Sport",
          id: '1',
          key: 'football',
          title: 'Football',
          description: 'Football matches',
          active: true,
          group: 'main',
          hasOutrights: false,
        },
        markets: [],
        scoreUpdates: [],
      },
      {
        __typename: "Event" as "Event",
        id: 'e2',
        externalId: 'ext2',
        name: 'Match 2',
        startTime: new Date().toISOString(),
        homeTeamName: 'Team C',
        awayTeamName: 'Team D',
        result: null,
        isLive: true,
        completed: false,
        sport: {
          __typename: "Sport" as "Sport",
          id: '1',
          key: 'football',
          title: 'Football',
          description: 'Football matches',
          active: true,
          group: 'main',
          hasOutrights: false,
        },
        markets: [],
        scoreUpdates: [],
      },
    ],
  },
  {
  __typename: "Sport" as "Sport",
    id: '2',
    title: 'Basketball',
    active: true,
    group: 'main',
    description: 'Basketball games',
    hasOutrights: false,
    events: [
      {
        __typename: "Event" as "Event",
        id: 'e3',
        externalId: 'ext3',
        name: 'Game 1',
        startTime: new Date().toISOString(),
        homeTeamName: 'Team E',
        awayTeamName: 'Team F',
        result: null,
        isLive: false,
        completed: false,
        sport: {
          __typename: "Sport" as "Sport",
          id: '2',
          key: 'basketball',
          title: 'Basketball',
          description: 'Basketball games',
          active: true,
          group: 'main',
          hasOutrights: false,
        },
        markets: [],
        scoreUpdates: [],
      },
    ],
  },
]


export default function Page({ params }: { params: { group: string; market: string } }) {
  // Use mock data instead of fetching from backend
  const sports = mockSports

  return (
    <main className={classnames(styles.eventsContainer)}>
      <MarketNav prefix={`/${params.group ?? 'all'}`} />
      <SportList group={params.group} sports={sports} market={params.market} />
    </main>
  )
}
