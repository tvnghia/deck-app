import { INIT_COIN } from '@/constants/deck'
import { ICard } from '@/interfaces/base'

import { createContext, ReactElement, useState } from 'react'

export interface IPlayer {
  id: string
  name: string
  coin: number
  cards: ICard[]
  canPlayable: boolean
  point: number
  isWinner: boolean
}

export interface IPlayerContext {
  players: IPlayer[]
  setPlayers: (players: IPlayer[]) => void
}

export const INIT_PLAYER = [
  {
    id: '1',
    name: 'A',
    coin: INIT_COIN,
    cards: [],
    canPlayable: true,
    point: 0,
    isWinner: false,
  },
  {
    id: '2',
    name: 'B',
    coin: INIT_COIN,
    cards: [],
    canPlayable: true,
    point: 0,
    isWinner: false,
  },
  {
    id: '3',
    name: 'C',
    coin: INIT_COIN,
    cards: [],
    canPlayable: true,
    point: 0,
    isWinner: false,
  },
  {
    id: '4',
    name: 'D',
    coin: INIT_COIN,
    cards: [],
    canPlayable: true,
    point: 0,
    isWinner: false,
  },
]

const PlayerContext = createContext<IPlayerContext>({
  players: INIT_PLAYER,
  setPlayers: () => {},
})

const PlayerContextProvider = ({ children }: { children: ReactElement }) => {
  const [players, setPlayers] = useState<IPlayer[]>(INIT_PLAYER)

  return (
    <PlayerContext.Provider
      value={{
        players,
        setPlayers,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export { PlayerContext, PlayerContextProvider }
