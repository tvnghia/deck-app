import { createContext, ReactElement, useState } from 'react'

interface IDeckContext {
  deckId: string
  remainingCards: number
  setDeckId: (deckID: string) => void
  setRemainingCards: (remainingCards: number) => void
}

const DeckContext = createContext<IDeckContext>({
  deckId: '',
  remainingCards: 52,
  setDeckId: (deckID: string) => deckID,
  setRemainingCards: (remainingCards: number) => remainingCards,
})

const DeckContextProvider = ({ children }: { children: ReactElement }) => {
  const [deckId, setDeckId] = useState<string>('')
  const [remainingCards, setRemainingCards] = useState<number>(52)

  return (
    <DeckContext.Provider
      value={{
        deckId,
        remainingCards,
        setDeckId,
        setRemainingCards,
      }}
    >
      {children}
    </DeckContext.Provider>
  )
}

export { DeckContext, DeckContextProvider }
