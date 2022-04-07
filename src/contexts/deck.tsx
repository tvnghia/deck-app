import { createContext, ReactElement, useState } from 'react'

interface IDeckContext {
  deckId: string
  setDeckId: (deckID: string) => void
}

const DeckContext = createContext<IDeckContext>({
  deckId: '',
  setDeckId: (deckID: string) => deckID,
})

const DeckContextProvider = ({ children }: { children: ReactElement }) => {
  const [deckId, setDeckId] = useState<string>('')
  const [remainingCards, setRemainingCards] = useState<number>(52)

  return (
    <DeckContext.Provider
      value={{
        deckId,
        setDeckId,
      }}
    >
      {children}
    </DeckContext.Provider>
  )
}

export { DeckContext, DeckContextProvider }
