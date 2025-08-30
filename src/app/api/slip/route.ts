import { kv } from '@vercel/kv'
import { NextRequest, NextResponse } from 'next/server'
// import { getAccessToken, getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { getClient } from '@/lib/client'
import { PlaceBetDocument, PlaceSingleBetsDocument } from '@/gql/documents.generated'
import { BetType } from '@/gql/types.generated'
import { BetSlipOption, Slip } from '@/ui/bet-slip/bet-slip'

// https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#app-router-1
export const GET = async function myApiRoute(req: NextRequest) {
  // Auth0 removed, always return empty slip and mock id
  const slip: Slip = {}
  return NextResponse.json({ slip, id: 'mock-user' })
}

async function clearSlip(options: BetSlipOption[], sub: string) {
  console.log(`clearing slip for user ${sub}`, options)
  await Promise.all(options.map((option) => kv.hdel(`betslip:${sub}`, option.id)))
}

export const POST = async function postSlipRoute(req: NextRequest) {
  // Auth0 removed, just echo back the bet data as a mock
  const bets = await req.json()
  const betOptions = Object.values(bets.singles) as BetSlipOption[]
  const singles = betOptions.filter((single) => !!single.stake)
  const long = bets.long as BetSlipOption

  // Simulate a successful bet placement
  return NextResponse.json({ success: true, data: { singles, long } })
}
