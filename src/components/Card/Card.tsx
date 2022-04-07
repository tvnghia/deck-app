import { COIN_PER_GAME, MAX_CARDS } from '@/constants/deck'
import { IPlayer, PlayerContext } from '@/contexts/player'
import { usePopup } from '@/hooks/popup'
import { FC, useContext, useEffect, useMemo } from 'react'
import Popup from '../Popup'
import s from './Card.module.scss'

interface CardProps {
  isFlipped?: boolean
  player: IPlayer
}

const Card: FC<CardProps> = ({ isFlipped = false, player }) => {
  const { remainingCards } = useContext(PlayerContext)
  const { visible, setVisible, message, setMessage } = usePopup()
  const isRip = useMemo(() => player.coin < COIN_PER_GAME, [player])

  useEffect(() => {
    if (isRip) {
      setVisible(true)
      setMessage(`User ${player.name} is RIP!!!`)
    }
  }, [isRip])

  return (
    <div className={s.card}>
      <div className={s.cardImages}>
        {remainingCards < MAX_CARDS || !player.canPlayable ? (
          <>
            {!player.canPlayable || isFlipped ? (
              <>
                {player.cards.map((item) => (
                  <img
                    key={item.code}
                    className={s.cardImage}
                    src={item.image}
                    width={80}
                    height={112}
                    alt={item.suit}
                  />
                ))}
              </>
            ) : (
              <>
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    className={s.cardImage}
                    src="./images/joker.webp"
                    width={80}
                    height={112}
                    alt="joker"
                  />
                ))}
              </>
            )}
          </>
        ) : (
          <img className={s.waitingImg} src="./images/waiting.png" width={80} height={80} alt="waiting" />
        )}
      </div>
      <div className={s.cardInfo}>
        <p>
          <span className={s.label}>Coin:</span>
          <span className={s.val}>{player.coin}</span>
        </p>
        <p>
          <span className={s.label}>User:</span>
          <span className={s.val}>{player.name}</span>
        </p>
        <p>
          <span className={s.label}>Point of 3 cards:</span>
          <span className={s.val}>{!player.canPlayable || isFlipped ? player.point : '***'}</span>
        </p>

        {player.canPlayable && isFlipped && (
          <>
            {player.isWinner ? (
              <img className={s.labelImgCard} width={80} src="./images/winner.png" />
            ) : (
              <img className={s.labelImgCard} width={80} src="./images/loser.jpeg" />
            )}
          </>
        )}

        {isRip && <img className={s.labelImgCard} width={80} src="./images/rip.png" />}
      </div>

      <Popup visible={visible} message={message} />
    </div>
  )
}

export default Card
