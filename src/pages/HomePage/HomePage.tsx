import React, { FC } from 'react'
import Card from '@/components/Card'
import s from './HomePage.module.scss'
import Button from '@/components/Button'

const HomePage: FC = () => {
  return (
    <div className={s.root}>
      <h1 className={s.headline}>Welcome to Bài Cào</h1>

      <div className={s.gameContainer}>
        {[1, 2, 3, 4].map((item) => (
          <div className={s[`user${item}`]}>
            <Card />
          </div>
        ))}
      </div>

      <div className={s.deckCardButton}>
        <Button type="secondary" size="lg">
          Deck Cards: 40
        </Button>
      </div>

      <div className={s.actions}>
        <Button type="primary" size="lg">
          Shuffle
        </Button>
        <Button type="warning" size="lg">
          Draw
        </Button>
        <Button type="dark" size="lg">
          Reveal
        </Button>

        <Button type="danger" size="lg">
          Reset
        </Button>
      </div>
    </div>
  )
}

export default HomePage
