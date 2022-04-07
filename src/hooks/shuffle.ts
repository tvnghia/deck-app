import { DeckContext } from '@/contexts/deck'
import { IBaseResponse } from '@/interfaces/base'
import axios from '@/shell/axios'
import { useContext, useState } from 'react'

export const useShuffle = () => {
  const { deckId, setRemainingCards } = useContext(DeckContext)
  const [loading, setLoading] = useState<boolean>(false)

  const shuffle = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get<IBaseResponse>(`/${deckId}/shuffle`)

      setRemainingCards(data.remaining)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    shuffle,
  }
}
