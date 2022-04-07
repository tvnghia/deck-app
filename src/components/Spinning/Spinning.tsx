import React, { FC } from 'react'
import s from './Spinning.module.scss'

interface SpinningProps {
  children: React.ReactNode
  spin?: boolean
}

const Spinning: FC<SpinningProps> = ({ spin = false, children }) => {
  return (
    <div className={s.root}>
      {spin && (
        <div className={s.spin}>
          <img className={s.loadingIcon} src="/images/loading.gif" alt="loading" />
        </div>
      )}

      <div className={spin ? s.blur : ''}>{children}</div>
    </div>
  )
}

export default Spinning
