import { DeckContext } from '@/contexts/deck'
import { IBaseResponse } from '@/interfaces/base'
import axios from '@/shell/axios'
import { useContext, useState } from 'react'

export const useDeck = () => {
  const { setDeckId, setRemainingCards } = useContext(DeckContext)
  const [loading, setLoading] = useState<boolean>(false)

  const getDeck = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get<IBaseResponse>('/new/shuffle?deck_count=1')

      setDeckId(data.deck_id)
      setRemainingCards(data.remaining)
    } finally {
      setLoading(false)
    }
  }

  return {
    getDeck,
    loading,
  }
}
