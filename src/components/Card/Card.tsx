import React, { FC, useState } from 'react'
import s from './Card.module.scss'

const Card: FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  return (
    <div className={s.card}>
      <div className={s.cardImages}>
        {isFlipped ? (
          <>
            <img className={s.cardImage} src="https://deckofcardsapi.com/static/img/KH.png" alt="test" />
            <img className={s.cardImage} src="https://deckofcardsapi.com/static/img/KH.png" alt="test" />
            <img className={s.cardImage} src="https://deckofcardsapi.com/static/img/KH.png" alt="test" />
          </>
        ) : (
          <>
            <img className={s.cardImage} src="./images/joker.webp" width={80} height={112} alt="joker" />
            <img className={s.cardImage} src="./images/joker.webp" width={80} height={112} alt="joker" />
            <img className={s.cardImage} src="./images/joker.webp" width={80} height={112} alt="joker" />
          </>
        )}
      </div>
      <div className={s.cardInfo}>
        <p>
          <span className={s.label}>Points:</span>
          <span className={s.val}>5000</span>
        </p>
        <p>
          <span className={s.label}>User:</span>
          <span className={s.val}>A</span>
        </p>
        <p>
          <span className={s.label}>Point of 3 cards:</span>
          <span className={s.val}>22</span>
        </p>
      </div>
    </div>
  )
}

export default Card
