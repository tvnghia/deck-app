import { IPlayer } from '@/contexts/player'
import { CARD_POINT } from '@/enums/card.enum'
import { ICard } from '@/interfaces/base'

type drawCards = {
  canPlayablePlayers: number
  cards: ICard[]
  currentPlayers: IPlayer[]
}

const sortCards = (canPlayablePlayers: number, cards: ICard[]) => {
  let _cards: ICard[][] = [...Array(canPlayablePlayers)].map(() => [])

  cards.forEach((card: ICard, index: number, array: ICard[]) => {
    _cards[index % canPlayablePlayers].push(array[index])
  })

  return _cards
}

const getMaxPoint = (points: number[]) => {
  return Math.max.apply(Math, points)
}

const handleAddCardPlayer = (currentPlayers: IPlayer[], cards: ICard[][]) => {
  let points: number[] = []

  currentPlayers.forEach((player: IPlayer) => {
    if (!player.canPlayable) return

    const playerCards = cards.shift() || []
    const point = playerCards.reduce((acc: number, card: ICard) => {
      // @ts-ignore
      return acc + (Object.keys(CARD_POINT).includes(card.value) ? CARD_POINT[card.value] : Number(card.value))
    }, 0)
    player.point = point % 10
    player.cards = playerCards
    points.push(player.point)
  })

  const maxPoint = getMaxPoint(points)

  return currentPlayers.map((item) => ({ ...item, isWinner: item.point === maxPoint }))
}

export const drawCards = ({ canPlayablePlayers, cards, currentPlayers }: drawCards) => {
  const _cards = sortCards(canPlayablePlayers, cards)

  return handleAddCardPlayer(currentPlayers, _cards)
}
