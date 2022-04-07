import React, { FC, useContext, useEffect, useMemo } from 'react'
import Card from '@/components/Card'
import s from './HomePage.module.scss'
import Button from '@/components/Button'
import { useDeck } from '@/hooks/deck'
import { DeckContext } from '@/contexts/deck'
import { useRevealCard } from '@/hooks/reveal'
import { COIN_PER_GAME, MAX_CARDS, NUMBER_OF_CARDS_EACH_PLAYER } from '@/constants/deck'
import Spinning from '@/components/Spinning'
import { useShuffle } from '@/hooks/shuffle'
import { useDraw } from '@/hooks/draw'
import { PlayerContext, INIT_PLAYER } from '@/contexts/player'
import Popup from '@/components/Popup'
import { usePopup } from '@/hooks/popup'

const HomePage: FC = () => {
  const { getDeck, loading: deckLoading } = useDeck()
  const { isFlipped, setIsFlipped } = useRevealCard()
  const { shuffle, loading: shuffleLoading } = useShuffle()
  const { loading: drawLoading, draw, isDisabledDraw, setIsDisabledDraw, canPlayablePlayers } = useDraw()
  const { players, setPlayers, remainingCards } = useContext(PlayerContext)
  const { visible, setVisible, message, setMessage } = usePopup()

  const isCannotDraw = useMemo(
    () => remainingCards < canPlayablePlayers * NUMBER_OF_CARDS_EACH_PLAYER,
    [remainingCards, canPlayablePlayers, players],
  )

  const remainingPlayer = useMemo(
    () => players.filter((player) => player.canPlayable),
    [remainingCards, canPlayablePlayers, players],
  )

  useEffect(() => {
    getDeck()
  }, [])

  useEffect(() => {
    if (remainingPlayer.length === 1) {
      setVisible(true)
      setMessage(`User ${remainingPlayer[0].name} is winner!!!`)
    }
  }, [remainingPlayer])

  const revealCards = () => {
    setIsFlipped(true)

    if (isCannotDraw) {
      setVisible(true)
      setMessage('Out of cards. Let shuffle to continue ^^')
    }

    if (remainingPlayer.length === 1 || isCannotDraw) return

    setIsDisabledDraw(false)

    const newPlayers = players.map((player) => {
      let coin = player.coin

      if (player.canPlayable) {
        coin = player.isWinner ? player.coin + COIN_PER_GAME : player.coin - COIN_PER_GAME
      }

      return {
        ...player,
        coin,
      }
    })

    setPlayers(newPlayers.map((player) => ({ ...player, canPlayable: player.coin >= COIN_PER_GAME })))
  }

  const handleDraw = () => {
    if (remainingPlayer.length === 1 || isCannotDraw) return

    draw()
    setIsFlipped(false)
  }

  const handleShuffle = () => {
    if (remainingPlayer.length === 1) return

    shuffle()
    setIsFlipped(false)
    setIsDisabledDraw(false)
  }

  const handleReset = () => {
    setPlayers(INIT_PLAYER)
    handleShuffle()
  }

  return (
    <div className={s.root}>
      <Spinning spin={deckLoading || shuffleLoading || drawLoading}>
        <div className={s.gameContainer}>
          {players.map((item, index) => (
            <div key={item.id} className={s[`user${index}`]}>
              <Card isFlipped={isFlipped} player={item} />
            </div>
          ))}
          <div className={s.deckCardButton}>
            <Button type="secondary" size="lg">
              Deck Cards: {remainingCards}
            </Button>
          </div>
        </div>
      </Spinning>

      <div className={s.actions}>
        <Button disabled={shuffleLoading} onClick={handleShuffle} type="primary">
          Shuffle
        </Button>
        <Button
          disabled={isDisabledDraw || remainingPlayer.length === 1 || isCannotDraw}
          onClick={handleDraw}
          type="warning"
        >
          Draw
        </Button>
        <Button disabled={MAX_CARDS === remainingCards || !isDisabledDraw} type="dark" onClick={revealCards}>
          Reveal
        </Button>
        <Button disabled={shuffleLoading} type="danger" onClick={handleReset}>
          Reset
        </Button>
      </div>

      <Popup visible={visible} message={message} />
    </div>
  )
}

export default HomePage
