import { useState } from 'react'

export const useRevealCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  return {
    isFlipped,
    setIsFlipped,
  }
}
