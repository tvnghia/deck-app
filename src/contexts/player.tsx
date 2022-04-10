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

export const INIT_PLAYER: IPlayer[] = ['A', 'B', 'C', 'D'].map((item) => ({
  id: item,
  name: item,
  coin: INIT_COIN,
  cards: [],
  canPlayable: true,
  point: 0,
  isWinner: false,
}))

export interface IPlayerContext {
  players: IPlayer[]
  remainingCards: number
  setPlayers: (players: IPlayer[]) => void
  setRemainingCards: (remainingCards: number) => void
}

const PlayerContext = createContext<IPlayerContext>({
  players: INIT_PLAYER,
  remainingCards: 52,
  setPlayers: () => {},
  setRemainingCards: (remainingCards: number) => remainingCards,
})

const PlayerContextProvider = ({ children }: { children: ReactElement }) => {
  const [players, setPlayers] = useState<IPlayer[]>(INIT_PLAYER)
  const [remainingCards, setRemainingCards] = useState<number>(52)

  return (
    <PlayerContext.Provider
      value={{
        remainingCards,
        setRemainingCards,
        players,
        setPlayers,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export { PlayerContext, PlayerContextProvider }
