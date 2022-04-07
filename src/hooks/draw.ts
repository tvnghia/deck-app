import { NUMBER_OF_CARDS_EACH_PLAYER } from '@/constants/deck'
import { DeckContext } from '@/contexts/deck'
import { PlayerContext } from '@/contexts/player'
import { drawCards } from '@/helpers/draw-card'
import { IBaseResponse } from '@/interfaces/base'
import axios from '@/shell/axios'
import { useContext, useMemo, useState } from 'react'

export const useDraw = () => {
  const { deckId } = useContext(DeckContext)
  const [isDisabledDraw, setIsDisabledDraw] = useState<boolean>(false)
  const { players, setPlayers, setRemainingCards } = useContext(PlayerContext)
  const canPlayablePlayers = useMemo(() => players.filter((item) => item.canPlayable).length, [players])
  const [loading, setLoading] = useState<boolean>(false)

  const draw = async () => {
    setIsDisabledDraw(true)
    setLoading(true)

    try {
      const { data } = await axios.get<IBaseResponse>(
        `/${deckId}/draw/?count=${canPlayablePlayers * NUMBER_OF_CARDS_EACH_PLAYER}`,
      )

      const currentPlayers = drawCards({ canPlayablePlayers, cards: data.cards, currentPlayers: players })

      setPlayers(currentPlayers)
      setRemainingCards(data.remaining)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    canPlayablePlayers,
    draw,
    isDisabledDraw,
    setIsDisabledDraw,
  }
}
